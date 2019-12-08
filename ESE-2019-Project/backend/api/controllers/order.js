const Order = require('../models/order');
const Product = require('../models/product');
const User = require('../models/user');
const Notification = require('../models/notification');
const mongoose = require('mongoose');

/**
 * Place a new order
 * User has to be logged in
 * @param req.body has to contain productId, startDate and endDate
 */
exports.placeOrder = (req, res, next) => {
    if (!req.body.productId || !req.body.startDate || !req.body.endDate)
        return res.status(500).json({
            error: "Please specify a productId"
        });

    let sellerId, productName, createdOrder;

    Product.findById(req.body.productId)
        .then(product => {
            if (!product)
                throw new Error("Product not found!");

            sellerId = product.seller;
            productName = product.name;

            const messages = [{
                _id: new mongoose.Types.ObjectId(),
                date: new Date(),
                sender: new mongoose.Types.ObjectId(req.userData.userId),
                message: '[INITIAL REQUEST]',
                statusMessage: true
            }, {
                _id: new mongoose.Types.ObjectId(),
                date: new Date(),
                sender: new mongoose.Types.ObjectId(req.userData.userId),
                message: req.body.description
            }];

            const sDate = Date.parse(req.body.startDate);
            const eDate = Date.parse(req.body.endDate);

            const order = new Order({
                _id: new mongoose.Types.ObjectId(),
                orderDate: new Date(),
                startDate: sDate,
                endDate: eDate,
                buyer: new mongoose.Types.ObjectId(req.userData.userId),
                product: new mongoose.Types.ObjectId(req.body.productId),
                seller: product.seller,
                description: req.body.description,
                chat: messages
            });

            return order.save();
        })
        .then(order => {
            createdOrder = order;
            const notification = new Notification({
                _id: new mongoose.Types.ObjectId(),
                user: new mongoose.Types.ObjectId(sellerId),
                text: "New order request for your product '" + productName + "'",
                link: "/order-details/" + order._id,
                date: new Date()
            });

            return notification.save();
        })
        .then(result => {
            res.status(200).json({
                message: "Order successfully placed",
                order: createdOrder
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
                    $ne: 'paid'
                }
            }]
        })
        .then(order => {
            if (!order)
                throw new Error("Order not found or already paid");

            if (order.seller != req.userData.userId && !req.userData.admin)
                throw new Error("Access denied");

            const message = {
                _id: new mongoose.Types.ObjectId(),
                date: new Date(),
                sender: new mongoose.Types.ObjectId(req.userData.userId),
                message: '[ACCEPT]',
                statusMessage: true
            };

            return Order.findOneAndUpdate({
                _id: req.body.orderId
            }, {
                $set: {
                    status: 'accepted'
                },
                $push: {
                    chat: message
                }
            })
        })
        .then(order => {
            const notification = new Notification({
                _id: new mongoose.Types.ObjectId(),
                user: new mongoose.Types.ObjectId(order.buyer),
                text: "Your order '" + order._id + "' has been accepted",
                link: "/order-details/" + order._id,
                date: new Date()
            });

            return notification.save();
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
                    $ne: 'paid'
                }
            }]
        })
        .then(order => {
            if (!order)
                throw new Error("Order not found or already paid");

            if (order.seller != req.userData.userId && !req.userData.admin)
                throw new Error("Access denied");

            const message = {
                _id: new mongoose.Types.ObjectId(),
                date: new Date(),
                sender: new mongoose.Types.ObjectId(req.userData.userId),
                message: '[REJECT]',
                statusMessage: true
            };

            return Order.updateOne({
                _id: req.body.orderId
            }, {
                $set: {
                    status: 'rejected'
                },
                $push: {
                    chat: message
                }
            })
        })
        .then(order => {
            const notification = new Notification({
                _id: new mongoose.Types.ObjectId(),
                user: new mongoose.Types.ObjectId(order.buyer),
                text: "Your order '" + order.id + "' has been rejected",
                link: "/order-details/" + order._id,
                date: new Date()
            });

            return notification.save();
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
 * Pay order
 * Can only be done by the buyer of the product (or admin of course) and product has to be in accepted state
 */
exports.payOrder = (req, res, next) => {
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

            const message = {
                _id: new mongoose.Types.ObjectId(),
                date: new Date(),
                sender: new mongoose.Types.ObjectId(req.userData.userId),
                message: '[PAY]',
                statusMessage: true
            };
            return Order.findOneAndUpdate({
                _id: req.body.orderId
            }, {
                $set: {
                    status: 'paid'
                },
                $push: {
                    chat: message
                }
            })
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
            res.status(200).json({
                message: "Order paid"
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err.message
            });
        });
}

/**
 * Get all orders (for a seller)
 * Gets all order for a specific seller
 * @param req.body has to contain getAll:true if user is admin and wants to get all orders
 */
exports.getSellerOrders = (req, res, next) => {
    const searchFields = {
        $and: [{
            seller: req.userData.userId
        }, {
            status: {
                $nin: ["rejected"]
            }
        }]
    };
    Order.find(searchFields)
        .select("-__v")
        .populate("buyer", "-__v -password -admin")
        .populate("product", "-__v -verified -toRevise -date")
        .sort([['orderDate', -1]])
        .then(docs => {
            const response = docs.map(doc => {
                return {
                    _id: doc._id,
                    startDate: doc.startDate,
                    endDate: doc.endDate,
                    status: doc.status,
                    orderDate: doc.orderDate,
                    buyer: {
                        _id: doc.buyer._id,
                        name: doc.buyer.name,
                        email: doc.buyer.slug,
                        address: doc.buyer.address,
                        country: doc.buyer.country,
                        image: !doc.buyer.image ? process.env.PUBLIC_DOMAIN_API + "/rsc/no-user-image.png" : process.env.FILE_STORAGE + doc.buyer.image
                    },
                    product: {
                        _id: doc.product._id,
                        name: doc.product.name,
                        price: doc.product.price,
                        image: !doc.product.image ? process.env.PUBLIC_DOMAIN_API + "/rsc/no-user-image.png" : process.env.FILE_STORAGE + doc.product.image
                    },
                    chat: doc.chat
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

/**
 * Only get new orders for seller that have not yet been accepted or rejected
 */
exports.getNewSellerOrders = (req, res, next) => {
    const searchFields = {
        $and: [{
            seller: req.userData.userId
        }, {
            status: "pending"
        }]
    };
    Order.find(searchFields)
        .select("-__v")
        .populate("buyer", "-__v -password -admin")
        .populate("product", "-__v -verified -toRevise -date")
        .sort([['orderDate', -1]])
        .then(docs => {
            const response = docs.map(doc => {
                return {
                    _id: doc._id,
                    startDate: doc.startDate,
                    endDate: doc.endDate,
                    status: doc.status,
                    orderDate: doc.orderDate,
                    buyer: {
                        _id: doc.buyer._id,
                        name: doc.buyer.name,
                        email: doc.buyer.slug,
                        address: doc.buyer.address,
                        country: doc.buyer.country,
                        image: !doc.buyer.image ? process.env.PUBLIC_DOMAIN_API + "/rsc/no-user-image.png" : process.env.FILE_STORAGE + doc.buyer.image
                    },
                    product: {
                        _id: doc.product._id,
                        name: doc.product.name,
                        price: doc.product.price,
                        image: !doc.product.image ? process.env.PUBLIC_DOMAIN_API + "/rsc/no-user-image.png" : process.env.FILE_STORAGE + doc.product.image
                    },
                    chat: doc.chat
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

/**
 * Get all orders a specific user has placed
 */
exports.getBuyerOrders = (req, res, next) => {
    Order.find({
            buyer: req.userData.userId
        })
        .select("-__v")
        .populate("seller", "-__v -password -admin")
        .populate("product", "-__v -verified -toRevise -date")
        .sort([['orderDate', -1]])
        .then(docs => {
            const response = docs.map(doc => {
                return {
                    _id: doc._id,
                    startDate: doc.startDate,
                    endDate: doc.endDate,
                    status: doc.status,
                    orderDate: doc.orderDate,
                    seller: {
                        _id: doc.seller._id,
                        name: doc.seller.name,
                        email: doc.seller.slug,
                        address: doc.seller.address,
                        country: doc.seller.country,
                        image: !doc.seller.image ? process.env.PUBLIC_DOMAIN_API + "/rsc/no-user-image.png" : process.env.FILE_STORAGE + doc.seller.image
                    },
                    product: {
                        _id: doc.product._id,
                        name: doc.product.name,
                        price: doc.product.price,
                        image: !doc.product.image ? process.env.PUBLIC_DOMAIN_API + "/rsc/no-user-image.png" : process.env.FILE_STORAGE + doc.product.image
                    },
                    chat: doc.chat
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

/**
 * Get specific order by its id
 * Only buyer, seller of specific order or admins can use this
 */
exports.getOrderById = (req, res, next) => {
    Order.findById(req.params.orderId)
        .select("-__v")
        .populate("seller", "-__v -password -admin")
        .populate("buyer", "-__v -password -admin")
        .populate("product", "-__v -verified -toRevise -date")
        .then(async doc => {
            if (doc.buyer._id != req.userData.userId && doc.seller._id != req.userData.userId && !req.userData.admin)
                throw new Error("Access denied");
            return res.status(200).json({
                _id: doc._id,
                startDate: doc.startDate,
                endDate: doc.endDate,
                status: doc.status,
                orderDate: doc.orderDate,
                reviewed:doc.reviewed,
                seller: {
                    _id: doc.seller._id,
                    name: doc.seller.name,
                    email: doc.seller.slug,
                    address: doc.seller.address,
                    country: doc.seller.country,
                    image: !doc.seller.image ? process.env.PUBLIC_DOMAIN_API + "/rsc/no-user-image.png" : process.env.FILE_STORAGE + doc.seller.image
                },
                buyer: {
                    _id: doc.buyer._id,
                    name: doc.buyer.name,
                    email: doc.buyer.slug,
                    address: doc.buyer.address,
                    country: doc.buyer.country,
                    image: !doc.buyer.image ? process.env.PUBLIC_DOMAIN_API + "/rsc/no-user-image.png" : process.env.FILE_STORAGE + doc.buyer.image
                },
                product: {
                    _id: doc.product._id,
                    name: doc.product.name,
                    price: doc.product.price,
                    image: !doc.product.image ? process.env.PUBLIC_DOMAIN_API + "/rsc/no-user-image.png" : process.env.FILE_STORAGE + doc.product.image
                },
                chat: doc.chat.map(msg => {
                    console.log(msg.sender + " " + doc.buyer._id + " " + doc.seller._id);
                    return {
                        _id: msg._id,
                        sender: {
                            _id: msg.sender,
                            name: msg.sender.equals(doc.buyer._id) ? doc.buyer.name : doc.seller.name,
                            email: msg.sender.equals(doc.buyer._id) ? doc.buyer.email : doc.seller.email,
                            image: msg.sender.equals(doc.buyer._id) ?
                                (!doc.buyer.image ? process.env.PUBLIC_DOMAIN_API +
                                    "/rsc/no-user-image.png" : process.env.FILE_STORAGE + doc.buyer.image) : (!doc.seller.image ? process.env.PUBLIC_DOMAIN_API +
                                    "/rsc/no-user-image.png" : process.env.FILE_STORAGE +
                                    doc.seller.image)
                        },
                        date: msg.date,
                        statusMessage: msg.statusMessage,
                        message: msg.message
                    }
                })
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err.message
            });
        })
}

/**
 * Add new message to chat (only seller and buyer)
 */
exports.sendMessage = (req, res, next) => {
    if (!req.body.orderId || !req.body.message)
        return res.status(500).json({
            message: "Please define orderId and message"
        });
    if (req.body.message.length == 0)
        return res.status(500).json({
            message: "Empty message"
        });

    Order.findById(req.body.orderId)
        .then(order => {
            if (!order.seller.equals(req.userData.userId) && !order.buyer.equals(req.userData.userId))
                throw new Error("Access denied");

            const message = {
                _id: new mongoose.Types.ObjectId(),
                date: new Date(),
                sender: new mongoose.Types.ObjectId(req.userData.userId),
                message: req.body.message,
                statusMessage: false
            };

            return order.update({
                $push: {
                    chat: message
                }
            })
        })
        .then(result => {
            res.status(200).json({
                message:"Message sent"
            });
        })
        .catch(err => {
            return res.status(500).json({
                error: err.message
            });
        });
}