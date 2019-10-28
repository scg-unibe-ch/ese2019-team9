const mongoose = require('mongoose');
const Product = require('../models/product');
const Category = require('../models/category')

exports.getProducts = (req, res, next) => {
    Product.find()
    .exec()
    .then((products) => {
        return res.status(200).json(products);
    }).catch(err => {
        res.status(500).json(err);
    });
}

exports.addProduct = (req, res, next) => {
    Product.find({ name:req.body.name })
    .exec()
    .then(result => {
        if(result)
            return res.status(500).json({
                message:"Product with same name already exists"
            });
        
        const newProduct = new Product({
            _id:new mongoose.Schema.Types.ObjectId,
            name:req.body.name,
            category:req.body.category
        });
    });
}