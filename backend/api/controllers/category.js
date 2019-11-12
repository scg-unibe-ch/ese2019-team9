const mongoose = require('mongoose');
const Category = require('../models/category');
const Product = require('../models/product');
const Promise = require('bluebird');

/**
 * Return a json object containing all categories in the database
 * and provide a link to get detailed information about each category
 */

 exports.getCategories = (req, res, next) => {
    let cat = {};
    
    Category.find({ parent:null })
    .populate("subcategories")
    .select("-__v")
    .then(async docs => {
        return res.status(200).json(docs);
    }).catch(err => {
        res.status(500).json(err.message);
    });
}

/**
 * Get detailed information about a single category
 * Only display verified products to non admins
 */
exports.getSingleCategory = (req, res, next) => {
    const populate = req.userData.admin == true ? { 
        path:'products', populate:{ 
            path:'seller', 
            model:'User', 
            select:'name image'
        }} : { 
            path:'products', 
            match:{ 
                verified:true 
            }, populate: { 
                path:'seller', 
                model:'User', 
                select:'name image'
            }};
    Category.find({ slug:req.params.slug })
    .populate("subcategories", "-__v -id")
    .populate(populate)
    .select("-__v")
    .exec()
    .then(docs => {
        return res.status(200).json(docs);
    }).catch(err => {
        res.status(500).json(err.message);
    });
}

/**
 * Check if category with same name/slug already exists and if not add the new category to database
 * If category has a parent, update the subcategories array of the parent
 * 
 * @param req.body has to contain slug, image and name (optional parentId)
 */
exports.addCategory = (req, res, next) => {
    if(!req.body.slug || !req.body.name || !req.body.image)
        return res.status(500).json({
            message:"Please specify name, image and slug"
        });

    Category.find({ $or: [{ name:req.body.name }, { slug:req.body.slug }] })
    .exec()
    .then(category => {
        if(category.length > 0)
            throw new Error('Category with same name/slug already exists');

        return category;
    })
    .then(docs => {
        return Category.findOne({ slug:req.body.parentSlug });
    })
    .then( doc => {
        if(req.body.parentId && !doc)
            throw new Error("Wrong parent category id");

        const parent = !doc ? null : doc._id;

        const newCategory = new Category({
            _id:new mongoose.Types.ObjectId(),
            slug:req.body.slug,
            name:req.body.name,
            parent:parent,
            image:req.body.image
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
                parent:result.parent,
                image:result.image
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
    //First delete all products of that category
    Product.deleteMany({ category:req.params.categoryId })
    .then(result => {
        return Category.findOneAndDelete({ _id:req.params.categoryId });
    })
    .then(result => {
        res.status(200).json({
            message: "Category deleted"
        });
    })
    .catch(err => {
        res.status(500).json({
            error:err.message
        });
    });
}

/**
 * Update category
 */
exports.updateCategory = (req, res, next) => {
    let updateFields = {};

    for(const [propName, value] of Object.entries(req.body)) {
        updateFields[propName] = propName == 'parent' && value == '' ? null : value;
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