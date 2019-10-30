const mongoose = require('mongoose');
const Product = require('../models/product');
const Category = require('../models/category')

/**
 * Get all products
 */
exports.getProducts = (req, res, next) => {
    Product.find()
    .exec()
    .then((products) => {
        return res.status(200).json(products);
    }).catch(err => {
        res.status(500).json(err);
    });
}

/**
 * Add product to database and push to products array of category
 */
exports.addProduct = (req, res, next) => {
    Product.find({ name:req.body.name })
    .exec()
    .then(result => {
        if(result)
            throw new Error("Product with same name already exists");
        
        return newProduct = new Product({
            _id:new mongoose.Schema.Types.ObjectId,
            name:req.body.name,
            category:req.body.category
        });
    })
    .then(async newProduct => {
        await Category.updateOne(
            { _id:req.body.parent }, 
            { $push: { products:newProduct } 
        });

        await newProduct.save();

        return result;
    })
    .catch(err => {
        res.status(500).json({
            error:err
        });
    });
}

/**
 * Delete product
 */
exports.deleteProduct = (req, res, next) => {
    Product.findOne({ _id:req.params.productId })
    .then(result => {
        if(!result)
            throw new Error("Product not found");

        return result;
    })
    .then(async result => {
        // delete from category products array
        if(result.category) {
            await Category.updateOne({ '_id':result.category }, { 
                $pull: { "products": { "_id":result._id }}}, 
            );
        }

        return result;
    })
    .then(result => {
        // now delete product itself
        return Category.deleteOne({ _id:req.params.productId });
    })
    .then(result => {
        res.status(200).json({
            message: "Product deleted"
        });
    })
    .catch(err => {
        res.status(500).json({
            error:err
        });
    });
}