const mongoose = require('mongoose');
const Product = require('../models/product');
const Category = require('../models/category')

/**
 * Get all products
 */
exports.getProducts = (req, res, next) => {
    Product.find()
    .exec()
    .then(async (products) => {

        const productList = await Promise.map(products, async p => {
            const categoryName = await Category.findOne( { _id:p.categoyId } );
            return {
                name:p.name,
                _id:p._id,
                category:categoryName,
                price:p.price,
                description:p.description, 
                location:p.location
            }
        });

        return res.status(200).json(productList);
    }).catch(err => {
        res.status(500).json(err);
    });
}

/**
 * Update given properties of specific product
 * @param req has to contain productId and fields to update as well as values
 * @example { "productId":"asd", "path":"asdasd" } updates path of product with id 'asd'
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
}

/**
 * Add product to database and push to products array of category
 * @param req has to include name, price, location, description and categorySlug inside the body
 */
exports.addProduct = (req, res, next) => {
    let categoryName = "";

    if(!req.body.name || !req.body.categorySlug || !req.body.price || !req.body.description || !req.body.location)
        return res.status(500).json({
            message:"Please specify name, categorySlug, price, location and description for the product"
        });

    Category.findOne({ slug:req.body.categorySlug })
    .exec()
    .then(category => {
        if(!category)
            throw new Error("Given category could not be found");

        categoryName = category.name;

        console.log("reached");

        return newProduct = new Product({
            _id:new mongoose.Types.ObjectId,
            name:req.body.name,
            description:req.body.description,
            price:req.body.price,
            categoryId:category._id,
            location:req.body.location
        });
    })
    .then(result => {
        res.status(200).json({
            message:"Product created",
            createdProduct:{
                name:result.name,
                _id:result._id,
                category:categoryName,
                price:result.price,
                description:result.description, 
                location:result.location
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
    .then(result => {
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