const Order = require('order');
const mongoose = require('mongoose');

exports.addOrder = (req, res, next) => {
    if(!req.body.productId)
        return res.status(500).json({ error:"Please give a productId" });

    const order = new Order({
        date:new Date(),
        user:new mongoose.Types.ObjectId(req.userData.userId),
        product:new mongoose.Types.ObjectId(req.body.productId)
    });

    order.save()
    .then(result => {

    })
    .catch(err => {
        error:err.message
    });
}

exports.confirmOrder = (req, res, next) => {

}

exports.rejectOrder = (req, res, next) => {

}

exports.getOrders = (req, res, next) => {

}