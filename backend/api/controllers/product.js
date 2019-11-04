const mongoose = require('mongoose');

const Product = require('../models/product');
const Category = require('../models/category');
const User = require('../models/user');
const Promise = require('bluebird');

/**
 * Get all products
 */
exports.getProducts = (req, res, next) => {
    Product.find()
    .exec()
    .then(async products => {
        if(products.length == 0)
            return res.status(200).json({});
        
        try {
            const productList = await Promise.map(products, async p => {
                const categoryName = await Category.findById(p.categoyId);
                const seller = await User.findById(p.sellerId);

                return {
                    name:p.name,
                    _id:p._id,
                    category:categoryName,
                    price:p.price,
                    description:p.description, 
                    location:p.location,
                    sellerId:p.sellerId,
                    image:p.image,
                    seller:{
                        id:seller._id,
                        name:seller.name,
                        email:seller.email,
                        address:seller.address,
                        country:seller.country,
                        website:seller.website,
                        sex:seller.sex,
                        phone:seller.phone
                    }
                }
            });
            return res.status(200).json(productList);
        } catch (err) {
            throw new Error(err.message);
        }
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
    const udpateFields = {};

    for(const [propName, value] of Object.entries(req.body)) {
        if(propName != 'verified' || req.userData.admin)
            udpateFields[propName] = value;
    }

    if(req.file.path)
        updateFields['image'] = req.file.path;
        
    Product.findOne({ _id:id })
    .exec()
    .then(result => {
        if(result.sellerId != req.userData.userId && !req.userData.admin)
            throw new Error("Access forbidden");

        return Product.update({ _id:id }, { $set: udpateFields });
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
exports.addProduct = (req, res, next) => {
    let categoryName = "";

    if(!req.body.name || !req.file.path || !req.body.categorySlug || !req.body.price || !req.body.description || !req.body.location)
        return res.status(500).json({
            message:"Please specify image, name, categorySlug, price, location and description for the product"
        });

    try {
        User.findById(req.userData.userId)
        .exec()
        .then(result => {
            console.log(result);
            if(!result.name || !result.address || !result.country || !result)
                throw new Error("You first have to add your name, address and country to your profile in order to create a product");

            return Category.findOne({ slug:req.body.categorySlug });
        })
        .then(category => {
            if(!category)
                throw new Error("Given category could not be found");

            categoryName = category.name;

            newProduct = new Product({
                _id:new mongoose.Types.ObjectId,
                name:req.body.name,
                description:req.body.description,
                price:req.body.price,
                categoryId:category._id,
                location:req.body.location,
                sellerId:req.userData.userId,
                image:req.file.path
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
                    sellerId:result.sellerId
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
        if(req.userData.userId != result.sellerId && !req.userData.admin)
            throw new Error("Access forbidden");
        return result;
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