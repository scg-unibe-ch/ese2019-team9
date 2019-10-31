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
 * Update given properties of specific product
 * @param req has to contain productId and fields to update as well as values
 * @example { "productId":"asd", "categoryId":"asdasd" } updates categoryId of product with id 'asd'
 */
exports.updateProduct = (req, res, next) => {
    const id = req.params.productId;
    const udpateFields = {};

    for(const [propName, value] of Object.entries(req.body)) {
        udpateFields[propName] = value;
    }

    Product.update({ _id:id }, { $set: udpateFields })
    .exec()
    .then(result => {
        res.status(200).json(result);
    })
    .catch(err => { 
        res.status(500).json({ error: err })
    });
};

/**
 * Add product to database and push to products array of category
 * @param req has to include name and categoryId inside the body
 */
exports.addProduct = (req, res, next) => {
    if(!req.body.name || !req.body.categoryId)
        return res.status(500).json({
            message:"Please give a name and categoryId for the product"
        });

    Product.find({ name:req.body.name })
    .exec()
    .then(result => {
        if(result.length > 0) {
            throw new Error("Product with same name already exists");
        }
        return newProduct = new Product({
            _id:new mongoose.Types.ObjectId,
            name:req.body.name,
            category:req.body.categoryId
        });
    })
    .then(async newProduct => {
        try {
            await Category.updateOne(
                { _id:newProduct.category }, 
                { $push: { products:newProduct } 
            });

            await newProduct.save();
        } catch (err) {
            throw new Error(err);
        }

        return newProduct;
    })
    .then(result => {
        res.status(200).json({
            message:"Product created",
            createdProduct:{
                name:result.name,
                _id:result._id,
                categoryId:result.categoryId
            }
        });
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
                $pull: { "products": { '_id':result._id }}}, 
            );

            const s = await Category.findOne( { '_id':result.category } );
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