const Order = require('../models/order');
const Product = require('../models/product');
const mongoose = require('mongoose');

/**
 * Place a new order
 * User has to be logged in
 * @param req.body has to contain productId
 */
exports.placeOrder = (req, res, next) => {
    if(!req.body.productId)
        return res.status(500).json({ error:"Please specify a productId" });

    Product.findById(req.body.productId)
    .then(product => {
        if(!product)
            throw new Error("Product not found!");

        const order = new Order({
            _id:new mongoose.Types.ObjectId(),
            orderDate:new Date(),
            startDate:new Date(req.startDate),
            endDate:new Date(req.endDate),
            buyer:new mongoose.Types.ObjectId(req.userData.userId),
            product:new mongoose.Types.ObjectId(req.body.productId),
            seller:product.seller
        });

        return order.save();
    })
    .then(order => {
        res.status(200).json({
            message:"Order successfully placed",
            order:order
        });
    })
    .catch(err => {
        res.status(500).json({
            error:err.message
        });
    });
}

/**
 * Accept order
 * Can only be done by the seller of the product (or admin of course) and the order can't be in fulfilled state
 * @param req.body has to contain orderId
 */
exports.acceptOrder = (req, res, next) => {
    if(!req.body.orderId)
        return res.status(500).json({ error:"Please specify an orderId! "});

    Order.findOne({ $and:[{_id:req.body.orderId}, {status:{ $ne:'fulfilled' }}]})
    .then(order => {
        if(!order)
            throw new Error("Order not found or already fulfilled");

        if(order.seller != req.userData.userId && !req.userData.admin)
            throw new Error("Access denied");

        return Order.updateOne({ _id:req.body.orderId }, { $set:{ status:'accepted' } })
    })
    .then(result => {
        res.status(200).json({
            message:"Order accepted"
        });
    })
    .catch(err => {
        res.status(500).json({ error:err.message });
    });
}

/**
 * Reject order
 * Can only be done by the seller of the product (or admin of course) and order can't be in fulfilled state
 * @param req.body has to contain orderId
 */
exports.rejectOrder = (req, res, next) => {
    if(!req.body.orderId)
        return res.status(500).json({ error:"Please specify an orderId! "});
    
    Order.findOne({ $and:[{_id:req.body.orderId}, {status:{ $ne:'fulfilled' }}]})
    .then(order => {
        if(!order)
            throw new Error("Order not found or already fulfilled");

        if(order.seller != req.userData.userId && !req.userData.admin)
            throw new Error("Access denied");

        return Order.updateOne({ _id:req.body.orderId }, { $set:{ status:'rejected' } })
    })
    .then(result => {
        res.status(200).json({
            message:"Order rejected"
        });
    })
    .catch(err => {
        res.status(500).json({ error:err.message });
    });
}

/**
 * Fulfill order
 * Can only be done by the buyer of the product (or admin of course) and product has to be in accepted state
 */
exports.fulfillOrder = (req, res, next) => {
    if(!req.body.orderId)
        return res.status(500).json({ error:"Please specify an orderId! "});

    Order.findOne({ $and:[{ _id:req.body.orderId }, { status:'accepted' }]})
    .then(order => {
        if(!order)
            throw new Error("Order not found or not accepted");

        if(order.buyer != req.userData.userId && !req.userData.admin)
            throw new Error("Access denied");

        return Order.updateOne({ _id:req.body.orderId }, { $set:{ status:'fulfilled' } })
    })
    .then(result => {
        res.status(200).json({
            message:"Order fulfilled"
        });
    })
    .catch(err => {
        res.status(500).json({ error:err.message });
    });
}

/**
 * Get all orders
 * Gets either all orders for a specific seller or all orders in total
 * @param req.body has to contain getAll:true if user is admin and wants to get all orders
 */
exports.getOrders = (req, res, next) => {
    const searchFields = req.userData.admin && req.body.getAll ? null : { seller:req.userData.userId };
    Order.find()
    .select("-__v")
    .then(docs => {
        res.status(200).json(docs);
    })
    .catch(err => {
        res.status(500).json({ error:err.message });
    })
}