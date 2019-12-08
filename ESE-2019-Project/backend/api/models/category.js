const mongoose = require('mongoose');
const Product = require('./product');

const categorySchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:{ type:String, required:true },
    parent:{ type:mongoose.Schema.Types.ObjectId, ref:'Category', index:true, required:false },
    slug:{ type:String },
    image:{ type:String }
}, { toJSON: { virtuals: true }, toObject: { virtuals: true }});

categorySchema.virtual('subcategories', {
    ref: 'Category',
    localField: '_id',
    foreignField: 'parent', 
});

categorySchema.virtual('products', {
    ref: 'Product',
    localField: '_id',
    foreignField: 'category', 
});

// delete dependencies when category gets deleted
categorySchema.pre('remove', function(next) {
    Product.deleteMany({category: this._id}).exec();
    Category.deleteMany({parent:this._id}).exec();
    next();
});

module.exports = mongoose.model('Category', categorySchema);