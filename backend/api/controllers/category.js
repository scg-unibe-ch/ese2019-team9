const mongoose = require('mongoose');
const Category = require('../models/category');
const Promise = require('bluebird');

/**
 * Return a json object containing all categories in the database
 * and provide a link to get detailed information about each category
 */
exports.getCategories = (req, res, next) => {
    let cat = {};
    try {
        Category.find({ parent:'' })
        .exec()
        .then(async docs => {
            if (!docs)
                throw new Error("Category not found");

            const categories = await Promise.map(docs, async doc => {
                    const subs = await Category.find( { parent: new RegExp("^" + doc.slug + "$")} );

                    return {
                        _id:doc._id,
                        name:doc.name,
                        slug:doc.slug,
                        subcategories:subs,
                        parent:doc.parent,
                        path:doc.path,
                        request: {
                            type:'GET',
                            url:process.env.PUBLIC_DOMAIN_API + "/category/" + doc._id
                        }
                    }
            });

            const response = {
                count:docs.count,
                categories:categories
            };
            
            return res.status(200).json(response);
        }).catch(err => {
            console.log("Error catched: " + err)
            res.status(500).json(err);
        });
    } catch (err) {
        res.status(500).json(err);
    }
}

/**
 * Check if category with same name/slug already exists and if not add the new category to database
 * If category has a parent, update the subcategories array of the parent
 * 
 * @param req.body has to contain slug, name and parentSlug
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
            throw new Error('Category with same name/slug already exists');

        return category;
    })
    .then(docs => {
        return Category.find({ slug:req.body.parentSlug });
    })
    .then( parent => {
        console.log(parent);
        const path = parent.length == 0 ? '' : parent[0].path + '/' + parent[0].slug;
        const parentSlug = parent.length == 0 ? '' : parent[0].slug;

        const newCategory = new Category({
            _id:new mongoose.Types.ObjectId(),
            slug:req.body.slug,
            name:req.body.name,
            path:path,
            parent:parentSlug
        });

        return newCategory.save();
    })
    .then(result => {
        res.status(201).json({
            message:'New category created',
            createdCategory:{
                name:result.name,
                slug:result.slug,
                _id:result.id,
                path:result.path,
                parent:result.parent,
                request:{
                    type:"GET",
                    url:process.env.PUBLIC_DOMAIN_API + "/category/" + result._id
                }
            }
        });
    })
    .catch(err => {
        res.status(500).json({
            error:err
        });
    });;
}

/**
 * Delete category
 * If category has a parent, delete from parent subcategories array too
 * If category has subcategories, delete subcategories too
 */
exports.deleteCategory = (req, res, next) => {
    Category.deleteOne({ _id:req.params.categoryId })
    .then(result => {
        res.status(200).json({
            message: "Category deleted"
        });
    })
    .catch(err => {
        res.status(500).json({
            error:err
        });
    });
}

/**
 * Update category
 */
exports.updateCategory = (req, res, next) => {
    let updateFields = {};

    for(const [propName, value] of Object.entries(req.body)) {
        updateFields[propName] = value;
    }

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

/**
 * Get detailed information about a single category
 */
exports.getSingleCategory = (req, res, next) => {
    Category.find({ _id:req.params.categoryId })
    .exec()
    .then(async (docs) => {
        const categories = await Promise.map(docs, async doc => {
            const subs = await Category.find( { parent: new RegExp("^" + doc.slug + "$")} );

            return {
                _id:doc._id,
                name:doc.name,
                slug:doc.slug,
                subcategories:subs,
                parent:doc.parent,
                path:doc.path,
                request: {
                    type:'GET',
                    url:process.env.PUBLIC_DOMAIN_API + "/category/" + doc._id
                }
            }
        });

        const response = {
            count:docs.count,
            categories:categories
        };

        return res.status(200).json(response);
    }).catch(err => {
        res.status(500).json(err);
    });
}