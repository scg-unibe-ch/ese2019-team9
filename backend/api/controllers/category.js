const mongoose = require('mongoose');
const Category = require('../models/category');

exports.getCategories = (req, res, next) => {
    Category.find()
    .exec()
    .then((categories) => {
        return res.status(200).json(categories);
    }).catch(err => {
        res.status(500).json(err);
    });
}

exports.addCategory = (req, res, next) => {
    if(!req.body.slug || !req.body.name)
        return res.status(500).json({
            message:"Please specify name and slug"
        });

    Category.find({ $or: { name:req.body.name, slug:req.body.slug } })
    .exec()
    .then(category => {
        if(category.length > 0)
            return res.status(409).json({
                message:'Category with same name already exists'
            });

        if(req.body.parent) {
            const newCategory = new Category({
                _id:new mongoose.Types.ObjectId(),
                slug:req.body.slug,
                name:req.body.name,
                parent:req.body.parent
            });

            Category.update(
                { _id:req.body.parent }, 
                { $push: { 
                    subcategories:{ 
                        _id:newCategory._id, 
                        slug:newCategory.slug, 
                        name:newCategory.name 
                    }
                }})
            .exec()
            .then(result => {
                newCategory
                .save()
                .then(result => {
                    res.status(201).json({
                        message:'New category created',
                        category:result
                    });
                }).catch(err => {
                    res.status(500).json({
                        error:err
                    });
                });
            }).catch(err => {
                res.status(500).json({
                    error:err
                });
            });
        } else {
            const newCategory = new Category({
                _id:new mongoose.Types.ObjectId(),
                slug:req.body.slug,
                name:req.body.name
            });

            newCategory
            .save()
            .then(result => {
                res.status(201).json({
                    message:'New category created',
                    category:result
                });
            }).catch(err => {
                res.status(500).json({
                    error:err
                });
            });
        }
    });
}

exports.deleteCategory = (req, res, next) => {
    Category.deleteOne({ _id:req.params.categoryId})
    .exec()
    .then(result => {
        res.status(200).json({
            message:'Category deleted'
        });
    }).catch(err => {
        res.status(500).json({
            error:err
        });
    });
}

exports.updateCategory = (req, res, next) => {
    const updateFields = {};

    for(const ops of req.body)
        updateFields[ops.propName] = ops.value;

    Category.update({ _id:req.params.categoryId }, { $set:updateFields })
    .exec()
    .then(result => {
        res.status(200).json({
            message:'Category updated'
        });
    }).catch(err => {
        res.status(500).json({
            error:err
        });
    });
}