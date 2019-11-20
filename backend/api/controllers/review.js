const mongoose = require('mongoose');
const Review = require('../models/review');
const Product = require('../models/product');
const Order = require('../models/order');
/**
 * Add new product review
 * @param req.body has to include rating and productId
 */
exports.addReview = (req, res, next) => {
    if(!req.body.rating || !req.body.productId)
        return res.status(500).json({
            message:"Please include productId and a rating (0-5)"
        });    
    Product.findById(req.body.productId)
    .then(doc => {
        if(!doc)
            throw new Error("Couldn't find product with given id");

        return Order.find({ 
            $and:[
                { product:req.body.productId }, 
                { status:'fulfilled' }, 
                { buyer:req.userData.userId } 
            ]
        });
    })
    .then(doc => {
        if(doc.length == 0)
            throw new Error("You have to buy the product first in order to write a review!");

        const review = new Review({
            _id:new mongoose.Types.ObjectId,
            rating:req.body.rating,
            comment:req.body.comment,
            user:req.userData.userId,
            product:req.body.productId
        });

        return review.save();
    })
    .then(result => {
        return res.status(200).json({
            message:"Review added"
        });
    })
    .catch(err => {
        return res.status(500).json({
            error:err.message
        });
    });
}

/**
 * Deletes a given review
 * Only admins and the owner of the review can delete it
 */
exports.deleteReview = (req, res, next) => {
    Review.findById(req.params.reviewId)
    .then(doc => {
        if(doc.user != req.userData.userId && !req.userData.admin)
            throw new Error("Access denied");

        return Review.deleteOne({_id:doc._id});
    })
    .then(result=> {
        return res.status(200).json(result);
    })
    .catch(err => {
        res.status(500).json({
            error:err.message
        });
    });
}

/**
 * Edit a given review
 * Only admins and the owner of the review can edit it
 * @param req.body has to include the fields to change
 */
exports.editReview = (req, res, next) => {
    let updateFields = {};
    const validFields = ['comment', 'rating'];
    
    for(const [propName, value] of Object.entries(req.body)) {
        if(validFields.includes(propName))
            updateFields[propName] = value;
    }
    
    Review.updateOne({_id:req.params.reviewId}, { $set:updateFields })
    .then(result => {
        res.status(200).json({
            message:"Review updated",
            updatedReview:result
        })
    })
    .catch(err => {
        res.status(500).json({
            error:err.message
        });
    })
}

/**
 * Get all reviews (for admins only)
 */
exports.getReviews = (req, res, next) => {
    Review.find()
    .select("-__v")
    .exec()
    .then(docs => {
        return res.status(200).json(docs);
    })
    .catch(err => {
        error:err.message
    });
}