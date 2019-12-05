const mongoose = require('mongoose');

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

module.exports = mongoose.model('Category', categorySchema);