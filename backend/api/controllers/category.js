const mongoose = require('mongoose');
const Category = require('../models/category');
const Product = require('../models/product');
const Review = require('../models/review');
const Promise = require('bluebird');
const fs = require('fs');
const { promisify } = require('util')
const deleteFile = require('../methods/delete-file');
const env = process.env;

/**
 * Return a json object containing all categories in the database
 * and provide a link to get detailed information about each category
 */
 exports.getCategories = (req, res, next) => {
    let cat = {};
    
    Category.find({ parent:null })
    .populate("subcategories")
    .select("-__v")
    .then(docs => {
        const response = docs.map(doc => {
            return {
                _id:doc._id,
                name:doc.name,
                image:doc.image ? process.env.FILE_STORAGE + doc.image : process.env.PUBLIC_DOMAIN_API + "/rsc/no-image.jpg",
                subcategories:doc.subcategories.map(sub => {
                    return {
                        _id:sub._id,
                        name:sub.name,
                        slug:sub.slug,
                        image:!sub.image ? process.env.PUBLIC_DOMAIN_API + "/rsc/no-image.jpg" : process.env.FILE_STORAGE + sub.image
                    }
                }),
                slug:doc.slug
            };
        });

        return res.status(200).json(response);
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
        path:'products', 
        populate:{ 
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
    Category.findOne({ slug:req.params.slug })
    .populate("subcategories", "-__v -id")
    .populate(populate)
    .select("-__v")
    .exec()
    .then(async doc => {
        const products = await Promise.map(doc.products, async prod => {
            const avg = await Review.aggregate([
                { $match: { product:prod._id }},
                { $group: { _id: null, rating: { $avg:"$rating" } } }
            ]);

            const imagePath = !doc.image ? process.env.PUBLIC_DOMAIN_API + "/rsc/no-image.jpg" : process.env.FILE_STORAGE + doc.image;
            const rating = !avg[0] ? 0 : avg[0].rating;

            return {
                name:prod.name,
                _id:prod._id,
                description:prod.description,
                image:imagePath,
                rating:rating,
                seller:prod.seller
            };
        });

        return res.status(200).json([{
            _id:doc.id,
            name:doc.name,
            parent:doc.parent,
            image:!doc.image ? process.env.PUBLIC_DOMAIN_API + "/rsc/no-image.jpg" : process.env.FILE_STORAGE + doc.image,
            subcategories:doc.subcategories,
            products:products
        }]);
    }).catch(err => {
        res.status(500).json(err.message);
    });
}

/**
 * Check if category with same name/slug already exists and if not add the new category to database
 * If category has a parent, update the subcategories array of the parent
 * 
 * @param req.body has to contain slug, image and name (optional parentSlug)
 */
exports.addCategory = (req, res, next) => {
    if(!req.body.slug || !req.body.name || !req.file) {
        if(req.file)
            deleteFile(req.file);
        return res.status(500).json({
            message:"Please specify name, image and slug"
        });
    }

    if (!/[^a-zA-Z]/.test(req.body.slug))
        return res.status(500).json({ message:"You are only allowed to use letters for the field 'slug'" });

    Category.find({ slug:req.body.slug })
    .exec()
    .then(category => {
        if(category.length > 0){
            if(req.file)
                deleteFile(req.file);
            throw new Error('Category with same slug already exists');
        }

        return category;
    })
    .then(docs => {
        return Category.findOne({ slug:req.body.parentSlug });
    })
    .then( doc => {
        if(req.body.parentSlug && !doc) {
            if(req.file)
                deleteFile(req.file);
            throw new Error("Wrong parent category slug");
        }

        const parent = !doc ? null : doc._id;

        const newCategory = new Category({
            _id:new mongoose.Types.ObjectId(),
            slug:req.body.slug,
            name:req.body.name,
            parent:parent,
            image:req.file
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
            error:err.message
        });
    });
}

/**
 * Delete category
 * If category has a parent, delete from parent subcategories array too
 * If category has subcategories, delete subcategories too
 */
exports.deleteCategory = (req, res, next) => {
    //First delete all products of that category
    Product.find({ category:req.params.categoryId})
    .then(async result => {
        for(let i in result) {
            if(result[i].image)
                deleteFile(result[i].image);
        }

        return Product.deleteMany({ category:req.params.categoryId });
    })
    .then(result => {
        return Category.findOneAndDelete({ _id:req.params.categoryId });
    })
    .then(async result => {
        if(result.image)
            deleteFile(result.image);
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

    if(req.file) 
        updateFields["image"] = req.file;

    Category.findById(req.params.categoryId)
    .then(async result => {
        if(result.image && req.file)
            deleteFile(req.file);
        return Category.update({ _id:req.params.categoryId }, { $set:updateFields });
    })
    .then(result => {
        res.status(200).json({
            message:'Category updated'
        });
    }).catch(err => {
        res.status(500).json({
            error:err.message
        });
    });
}