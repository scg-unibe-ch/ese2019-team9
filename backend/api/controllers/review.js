const mongoose = require('mongoose');
const Review = require('../models/review');
const Product = require('../models/product');

/**
 * Add new product review and save new average rating to product document
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
        
        const review = new Review({
            _id:new mongoose.Types.ObjectId,
            rating:req.body.rating,
            comment:req.body.comment,
            user:req.userData.userId,
            product:doc._id
        });

        return review.save();
    })
    .then(async result => {
        const avg = await Review.aggregate([
            { $match: { product:new mongoose.Types.ObjectId(req.body.productId) }},
            { $group: { _id: null, rating: { $avg:"$rating" } } }
        ]);

        return Product.findByIdAndUpdate(req.body.productId, { rating:avg[0].rating });
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
 * Edit a given review and save new average rating inside product document
 * Only admins and the owner of the review can edit it
 * @param req.body has to include the fields to change
 */
exports.editReview = (req, res, next) => {
    let updateFields = {};
    
    for(const [propName, value] of Object.entries(req.body)) {
        updateFields[propName] = value;
    }
    
    Review.updateOne({_id:req.params.reviewId}, { $set:updateFields })
    .then(async result => {
        if(req.body.rating) {
            const avg = await Review.aggregate([
                { $match: { product:new mongoose.Types.ObjectId(req.body.productId) }},
                { $group: { _id: null, rating: { $avg:"$rating" } } }
            ]);
    
            return Product.findByIdAndUpdate(req.body.productId, { rating:avg[0].rating });
        }

        return result;
    })
    .then(result => {
        res.status(200).json({
            message:"Review updated"
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