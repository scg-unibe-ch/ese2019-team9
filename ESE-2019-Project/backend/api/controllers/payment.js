const paypal = require('paypal-rest-sdk');
const Order = require('../models/order');
const Product = require('../models/product');
const Notification = require('../models/notification');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

/**
 * Creates a paypal payment link
 * @param req.body needs to contain orderId
 */
exports.createPayment = (req, res, next) => {
    paypal.configure({
        'mode': 'sandbox', //sandbox or live
        'client_id': 'AQ80jQ3OL4Dk7ywA4Occjv6VF8PIq5yk1PGEftipiuOw5Q5sAZIiXpuAPykMAJ0HA3_IFRsFROEFcViE',
        'client_secret': 'EDqLWXOolwLIKYiAOA73w5yQPt8rdo-tpDo_W3TPv5rohHkHykPPpymm-F4FajlEll80c5ITHsk8upWP'
    });

    if (!req.body.orderId)
        return res.status(500).json({
            message: 'No orderId provided'
        });
        
    Order.findById(req.body.orderId)
        .then(order => {
            if (!order)
                throw new Error("Invalid orderId")

            if (order.buyer != req.userData.userId)
                throw new Error("Access denied");

            return Product.findById(order.product);
        })
        .then(async product => {
            const token = await jwt.sign({
                    amount: product.price,
                    orderId: req.body.orderId,
                    loginToken: req.userData.loginToken
                },
                process.env.JWT_KEY, {}
            );

            const create_payment_json = {
                "intent": "sale",
                "payer": {
                    "payment_method": "paypal"
                },
                "redirect_urls": {
                    "return_url": "https://themoln.herokuapp.com/payment/" + token,
                    "cancel_url": "https://themoln.herokuapp.com/order-details/" + req.body.orderId
                },
                "transactions": [{
                    "item_list": {
                        "items": [{
                            "name": product.name,
                            "sku": product.name,
                            "price": product.price,
                            "currency": "CHF",
                            "quantity": 1
                        }]
                    },
                    "amount": {
                        "currency": "CHF",
                        "total": product.price
                    },
                    "description": "This is the payment description."
                }]
            };

            paypal.payment.create(create_payment_json, function (error, payment) {
                if (error) {
                    return res.status(500).json({
                        error: error
                    })
                } else {
                    return res.status(200).json({
                        token: token,
                        payment: payment
                    });
                }
            });
        })
        .catch(err => {
            return res.status(500).json({
                error: err.message
            });
        });
}


exports.executePayment = async (req, res, next) => {
    let data;
    if (!req.body.payerId || !req.body.token || !req.body.paymentId)
        return res.status(500).json({
            message: "Please provide payerId, token and paymentId"
        });

    try {
        data = await jwt.verify(req.body.token, process.env.JWT_KEY);
        const amount = data.amount;

        const execute_payment_json = {
            "payer_id": req.body.payerId,
            "transactions": [{
                "amount": {
                    "currency": "CHF",
                    "total": amount
                }
            }]
        };

        const paymentId = req.body.paymentId;

        await paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
            if (error) {
                console.log(error.response);
                throw new Error(error.response);
            }
        });

        const message = {
            _id: new mongoose.Types.ObjectId(),
            date: new Date(),
            sender: new mongoose.Types.ObjectId(req.userData.userId),
            message: '[PAY]',
            statusMessage: true
        };

        Order.findOneAndUpdate({
                _id: data.orderId
            }, {
                $set: {
                    status: 'paid'
                },
                $push: {
                    chat: message
                }
            })
            .then(order => {
                const notification = new Notification({
                    _id: new mongoose.Types.ObjectId(),
                    user: new mongoose.Types.ObjectId(order.seller),
                    text: "Invoice for order '" + order._id + "' has been paid",
                    link: "/order-details/" + order._id,
                    date: new Date()
                });

                return notification.save();
            })
            .then(result => {
                return res.status(200).json({
                    message: 'Payment successful',
                    orderId: data.orderId,
                    loginToken: data.loginToken
                })
            })
            .catch(err => {
                res.status(500).json({
                    error: err.message
                });
            });
    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
}