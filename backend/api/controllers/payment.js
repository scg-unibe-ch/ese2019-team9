var paypal = require('paypal-rest-sdk');
var Order = require('../models/order');

paypal.configure({
    'mode': 'sandbox', //sandbox or live
    'client_id': process.env.PAYPAL_CLIENT_ID,
    'client_secret': process.env.PAYPAL_CLIENT_SECRET
});

/**
 * Creates a paypal payment link
 * @param req.body needs to contain orderId
 */
exports.createPayment = (req, res, next) => {
    if(!req.body.orderId)
        return res.status(500).json({
            message:'No orderId provided'
        });

    Order.findById(req.body.orderId)
    .then(order => {
        if(!order)
            throw new Error("Invalid orderId")

        if(order.buyer != req.userData.userId)
            throw new Error("Access denied");
        
        return Product.findById(order.product);
    })
    .then(product => {
            const create_payment_json = {
                "intent": "sale",
                "payer": {
                    "payment_method": "paypal"
                },
                "redirect_urls": {
                    "return_url": process.env.PUBLIC_DOMAIN + "/paymentExecuted",
                    "cancel_url": process.env.PUBLIC_DOMAIN + "/paymentCancelled"
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
                    console.log("Create Payment Response");
                    console.log(payment);
                    return res.status(200).json(payment);
                }
            });
    })
    .catch(err => {
        return res.status(500).json({
            error:err.message
        });
    });
}


exports.executePayment = (req, res, next) => {
    const execute_payment_json = {
        "payer_id": req.body.payerId,
        "transactions": [{
            "amount": {
                "currency": "USD",
                "total": req.body.amount
            }
        }]
    };

    const paymentId = req.body.paymentId;

    paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
        if (error) {
            console.log(error.response);
            return res.status(500).json({
                message: 'Error during transaction',
                error: error.response
            })
        } else {
            console.log(JSON.stringify(payment));
            return res.status(200).json({
                message: 'Payment successful',
                payment: payment
            })
        }
    });
}