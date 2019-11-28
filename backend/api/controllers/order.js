const Order = require('../models/order');
const Product = require('../models/product');
const mongoose = require('mongoose');

/**
 * Parses dates from different formats
 */
const parseDate = (_date, _format, _delimiter) => {

    var blocks = _date.split(" ");
    var formatLowerCase = _format.toLowerCase();
    var formatItems = formatLowerCase.split(_delimiter);
    let timeItems = [];
    if (blocks[1]) {
        var dateItems = blocks[0].split(_delimiter);
        timeItems = blocks[1].split(":");
    } else {
        var dateItems = _date.split(_delimiter);
    }
    var monthIndex = formatItems.indexOf("mm");
    var dayIndex = formatItems.indexOf("dd");
    var yearIndex = formatItems.indexOf("yyyy");
    var month = parseInt(dateItems[monthIndex]);
    month -= 1;
    var formatedDate = timeItems.length > 0 ?
        new Date(dateItems[yearIndex], month, dateItems[dayIndex],
            timeItems[0], timeItems[1], 0) :
        new Date(dateItems[yearIndex], month, dateItems[dayIndex]);
    return formatedDate;
}

/**
 * Place a new order
 * User has to be logged in
 * @param req.body has to contain productId
 */
exports.placeOrder = (req, res, next) => {
    if (!req.body.productId)
        return res.status(500).json({
            error: "Please specify a productId"
        });

    Product.findById(req.body.productId)
        .then(product => {
            if (!product)
                throw new Error("Product not found!");

            console.log(new Date(req.body.startDate));

            const startDate = parseDate(req.body.startDate, "dd.mm.yyyy", ".");
            const endDate = parseDate(req.body.startDate, "dd.mm.yyyy", ".");

            const order = new Order({
                _id: new mongoose.Types.ObjectId(),
                orderDate: new Date(),
                startDate: startDate,
                endDate: endDate,
                buyer: new mongoose.Types.ObjectId(req.userData.userId),
                product: new mongoose.Types.ObjectId(req.body.productId),
                seller: product.seller
            });

            return order.save();
        })
        .then(order => {
            res.status(200).json({
                message: "Order successfully placed",
                order: order
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err.message
            });
        });
}

/**
 * Accept order
 * Can only be done by the seller of the product (or admin of course) and the order can't be in fulfilled state
 * @param req.body has to contain orderId
 */
exports.acceptOrder = (req, res, next) => {
    if (!req.body.orderId)
        return res.status(500).json({
            error: "Please specify an orderId! "
        });

    Order.findOne({
            $and: [{
                _id: req.body.orderId
            }, {
                status: {
                    $ne: 'fulfilled'
                }
            }]
        })
        .then(order => {
            if (!order)
                throw new Error("Order not found or already fulfilled");

            if (order.seller != req.userData.userId && !req.userData.admin)
                throw new Error("Access denied");

            return Order.updateOne({
                _id: req.body.orderId
            }, {
                $set: {
                    status: 'accepted'
                }
            })
        })
        .then(result => {
            res.status(200).json({
                message: "Order accepted"
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err.message
            });
        });
}

/**
 * Reject order
 * Can only be done by the seller of the product (or admin of course) and order can't be in fulfilled state
 * @param req.body has to contain orderId
 */
exports.rejectOrder = (req, res, next) => {
    if (!req.body.orderId)
        return res.status(500).json({
            error: "Please specify an orderId! "
        });

    Order.findOne({
            $and: [{
                _id: req.body.orderId
            }, {
                status: {
                    $ne: 'fulfilled'
                }
            }]
        })
        .then(order => {
            if (!order)
                throw new Error("Order not found or already fulfilled");

            if (order.seller != req.userData.userId && !req.userData.admin)
                throw new Error("Access denied");

            return Order.updateOne({
                _id: req.body.orderId
            }, {
                $set: {
                    status: 'rejected'
                }
            })
        })
        .then(result => {
            res.status(200).json({
                message: "Order rejected"
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err.message
            });
        });
}

/**
 * Fulfill order
 * Can only be done by the buyer of the product (or admin of course) and product has to be in accepted state
 */
exports.fulfillOrder = (req, res, next) => {
    if (!req.body.orderId)
        return res.status(500).json({
            error: "Please specify an orderId! "
        });

    Order.findOne({
            $and: [{
                _id: req.body.orderId
            }, {
                status: 'accepted'
            }]
        })
        .then(order => {
            if (!order)
                throw new Error("Order not found or not accepted");

            if (order.buyer != req.userData.userId && !req.userData.admin)
                throw new Error("Access denied");

            return Order.updateOne({
                _id: req.body.orderId
            }, {
                $set: {
                    status: 'fulfilled'
                }
            })
        })
        .then(result => {
            res.status(200).json({
                message: "Order fulfilled"
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err.message
            });
        });
}

/**
 * Get all orders
 * Gets either all orders for a specific seller or all orders in total
 * @param req.body has to contain getAll:true if user is admin and wants to get all orders
 */
exports.getOrders = (req, res, next) => {
    const searchFields = req.userData.admin && req.body.getAll ? null : {
        seller: req.userData.userId
    };
    Order.find()
        .select("-__v")
        .populate("buyer", "-__v -password -admin")
        .populate("product", "-__v -verified -toRevise -date")
        .then(docs => {
            const response = docs.map(doc => {
                const _startDate = new Date(doc.startDate);
                const _endDate = new Date(doc.endDate);
                const _orderDate = new Date(doc.orderDate);

                const startDate = _startDate.getDay() + "." + _startDate.getMonth() + "." +
                    _startDate.getFullYear() + " " + 
                    (_startDate.getHours() < 10 ? "0" + _startDate.getHours() : _startDate.getHours()) + 
                    ":" + (_startDate.getMinutes() < 10 ? "0" + _startDate.getMinutes() : _startDate.getMinutes());

                    const endDate = _endDate.getDay() + "." + _endDate.getMonth() + "." +
                    _endDate.getFullYear() + " " + 
                    (_endDate.getHours() < 10 ? "0" + _endDate.getHours() : _endDate.getHours()) + 
                    ":" + (_endDate.getMinutes() < 10 ? "0" + _endDate.getMinutes() : _endDate.getMinutes());

                    const orderDate = _orderDate.getDay() + "." + _orderDate.getMonth() + "." +
                    _orderDate.getFullYear() + " " + 
                    (_orderDate.getHours() < 10 ? "0" + _orderDate.getHours() : _orderDate.getHours()) + 
                    ":" + (_orderDate.getMinutes() < 10 ? "0" + _orderDate.getMinutes() : _orderDate.getMinutes());

                return {
                    _id: doc._id,
                    startDate: startDate,
                    endDate: endDate,
                    status: doc.status,
                    orderDate: orderDate,
                    buyer: {
                        _id: doc.buyer._id,
                        name: doc.buyer.name,
                        email: doc.buyer.slug,
                        address: doc.buyer.address,
                        country: doc.buyer.country,
                        image: !doc.buyer.image ? process.env.PUBLIC_DOMAIN_API + "/rsc/no-user-image.png" : process.env.FILE_STORAGE + doc.buyer.image
                    },
                    product: {
                        name: doc.product.name,
                        price: doc.product.price,
                        image: !doc.product.image ? process.env.PUBLIC_DOMAIN_API + "/rsc/no-user-image.png" : process.env.FILE_STORAGE + doc.product.image
                    }
                }
            });
            res.status(200).json(response);
        })
        .catch(err => {
            res.status(500).json({
                error: err.message
            });
        })
}