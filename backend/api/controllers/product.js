const mongoose = require('mongoose');
const fs = require('fs');
const { promisify } = require('util')
const unlinkAsync = promisify(fs.unlink);

const Product = require('../models/product');
const Category = require('../models/category');
const User = require('../models/user');
const Promise = require('bluebird');

/**
 * Get all products
 */
exports.getProducts = (req, res, next) => {
    const search = req.userData.admin ? {} : { verified:true };
    Product.find(search)
    .populate("seller", "-admin -password -verifiedEmail -__v")
    .populate("category", "name")
    .select("-__v")
    .exec()
    .then(products => {
        return res.status(200).json(products.map(doc => {
            const imagePath = !doc.image ? undefined : process.env.PUBLIC_DOMAIN_API + '/' + doc.image;
            return {
                _id:doc._id,
                name:doc.name,
                category:doc.category,
                price:doc.price,
                verified:doc.verified,
                seller:doc.seller,
                description:doc.description,
                location:doc.location,
                rating:doc.rating,
                image:imagePath
            }
        })); 
    }).catch(err => {
        res.status(500).json({
            error:err.message
        });
    });
}

/**
 * Get all products
 */
exports.getProductById = (req, res, next) => {
    Product.findById(req.params.productId)
    .populate("category", "name")
    .populate("seller", "-admin -password -verifiedEmail -__v")
    .select("-__v")
    .exec()
    .then(doc => {
        const imagePath = !doc.image ? undefined : process.env.PUBLIC_DOMAIN_API + '/' + doc.image;
        return res.status(200).json({
            _id:doc._id,
            name:doc.name,
            category:doc.category,
            price:doc.price,
            verified:doc.verified,
            seller:doc.seller,
            description:doc.description,
            location:doc.location,
            rating:doc.rating,
            image:imagePath
        }); 
    }).catch(err => {
        res.status(500).json({
            error:err.message
        });
    });
}

/**
 * Update given properties of specific product
 * @param req has to contain productId and fields to update as well as values
 * @example { "productId":"asd", "path":"asdasd" } updates path of product with id 'asd'
 */
exports.updateProduct = (req, res, next) => {
    const id = req.params.productId;
    const updateFields = {};

    for(const [propName, value] of Object.entries(req.body)) {
        if(propName != 'verified' || req.userData.admin)
            updateFields[propName] = value;
    }

    if(req.file) {
        updateFields['image'] = req.file.path;
    }

    Product.findOne({ _id:id })
    .exec()
    .then(async result => {
        if(result.seller != req.userData.userId && !req.userData.admin)
            throw new Error("Access forbidden");

        // if image gets updated delete old image
        if(req.file)
            await unlinkAsync(result.image);

        return Product.update({ _id:id }, { $set: updateFields });
    })
    .then(result => {
        res.status(200).json(result);
    })
    .catch(err => { 
        res.status(500).json({ error: err.message })
    });
}

/**
 * Add product to database and push to products array of category
 * @param req has to include name, price, location, description and categorySlug inside the body
 */
exports.addProduct = async (req, res, next) => {
    let categoryName = "";

    if(!req.body.name || !req.body.categorySlug || !req.body.price || !req.body.description || !req.body.location) {
        if(req.file)
            await unlinkAsync(req.file.path);
        return res.status(500).json({
            message:"Please specify name, categorySlug, price, location and description for the product"
        });
    }
    try {
        User.findById(req.userData.userId)
        .exec()
        .then(async result => {
            if(!result.name || !result.address || !result.country || !result) {
                if(req.file)
                    await unlinkAsync(req.file.path);
                throw new Error("You first have to add your name, address and country to your profile in order to create a product");
            }

            return Category.findOne({ slug:req.body.categorySlug });
        })
        .then(async category => {
            if(!category) {
                if(req.file)
                    await unlinkAsync(req.file.path);
                throw new Error("Given category could not be found");
            }

            categoryName = category.name;

            const file = req.file ? req.file.path : null;

            newProduct = new Product({
                _id:new mongoose.Types.ObjectId,
                name:req.body.name,
                description:req.body.description,
                price:req.body.price,
                category:category._id,
                location:req.body.location,
                seller:req.userData.userId,
                image:file
            });

            return newProduct.save();
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
                    location:result.location,
                    seller:result.sellerId,
                    image:result.image
                }
            });
        })
        .catch(err => {
            res.status(500).json({
                error:err.message
            });
        });
    } catch (err) {
        res.status(500).json({
            error:err.message
        });
    }
}

/**
 * Delete product
 */
exports.deleteProduct = (req, res, next) => {
    Product.findOne({ _id:req.params.productId })
    .then(result => {
        if(req.userData.userId != result.seller && !req.userData.admin)
            throw new Error("Access forbidden");

        return Product.findOneAndDelete({ _id:req.params.productId });
    })
    .then(async result => {
        await unlinkAsync(result.image);
        res.status(200).json({
            message: "Product deleted"
        });
    })
    .catch(err => {
        res.status(500).json({
            error:err.message
        });
    });
}

/**
 * Get products of specific user
 */
exports.getProductsOfUser = (req, res, next) => {
    Product.find({ seller:req.params.userId })
    .populate("category", "name")
    .populate("seller", "-admin -password -verifiedEmail -__v")
    .select("-__v")
    .exec()
    .then(products => {
        return res.status(200).json(products); 
    }).catch(err => {
        res.status(500).json({
            error:err.message
        });
    });
}