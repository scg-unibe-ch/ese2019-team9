const mongoose = require('mongoose');
const Category = require('../models/category');

/**
 * Return a json object containing all categories in the database
 * and provide a link to get detailed information about each category
 */
exports.getCategories = (req, res, next) => {
    Category.find( { parent:null } )
    .exec()
    .then((docs) => {
        const response = {
            count:docs.length,
            categories:docs.map(doc => {
                return {
                    _id:doc._id,
                    name:doc.name,
                    slug:doc.slug,
                    subcategories:doc.subcategories,
                    request: {
                        type:'GET',
                        url:process.env.PUBLIC_DOMAIN_API + "/category/" + doc._id
                    }
                }
            })
        }
        return res.status(200).json(response);
    }).catch(err => {
        res.status(500).json(err);
    });
}

/**
 * Check if category with same name/slug already exists and if not add the new category to database
 * If category has a parent, update the subcategories array of the parent
 */
exports.addCategory = (req, res, next) => {
    if(!req.body.slug || !req.body.name)
        return res.status(500).json({
            message:"Please specify name and slug"
        });

    Category.find({ $or: [{ name:req.body.name }, { slug:req.body.slug }] })
    .exec()
    .then(category => {
        if(category.length > 0)
            return res.status(409).json({
                message:'Category with same name/slug already exists'
            });

        if(req.body.parent) {
            const newCategory = new Category({
                _id:new mongoose.Types.ObjectId(),
                slug:req.body.slug,
                name:req.body.name,
                parent:req.body.parent
            });

            Category.updateOne(
                { _id:req.body.parent }, 
                { $push: { subcategories:newCategory } 
            })
            .exec()
            .then(result => {
                newCategory
                .save()
                .then(result => {
                    res.status(201).json({
                        message:'New category created',
                        createdCategory:{
                            name:result.name,
                            slug:category.slug,
                            _id:result.id,
                            request:{
                                type:"GET",
                                url:process.env.PUBLIC_DOMAIN_API + "/category/" + result._id
                            }
                        }
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

/**
 * Delete category
 * If category has a parent, delete from parent subcategories array too
 * If category has subcategories, delete subcategories too
 */
exports.deleteCategory = (req, res, next) => {
    Category.findOne({ _id:req.params.categoryId })
    .then(result => {
        if(!result)
            return res.status(500).json({
                message:"Category not found"
            });

        console.log("category found subcategories:" + result.subcategories.length);

        // if category has parent, delete reference to subcategory
        if(result.parent)
            Category.update({ _id:result.parent }, { $pull: {
                subcategories: { _id:req.params.categoryId }
            }});

        // delete subcategories
        if(result.subcategories.length > 0) {
            for(let i in result.subcategories) {
                let sub = result.subcategories[i];
                Category.deleteOne({ _id:sub._id }).catch(err => {
                    res.status(500).json({
                        error:err
                    });
                });
            }
        } 

        // now delete category itself
        Category.deleteOne({ _id:req.params.categoryId })
        .exec()
        .then(result => {
            res.status(200).json({
                message:'Category deleted'
            });
        }).catch(err => {
            console.log("error deleting category");
            res.status(500).json({
                error:err
            });
        });
    }).catch(err => {
        console.log("error last catch");
        res.status(500).json({
            error:err
        });
    });
}

/**
 * Update category
 */
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