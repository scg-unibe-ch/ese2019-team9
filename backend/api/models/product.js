const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:{ type:String, required:true },
    category:{ type:mongoose.Schema.Types.ObjectId, ref:'Category', index:true, required:true },
    price:{ type:Number, required:true },
    verified:{ type:Boolean, default:false },
    seller:{ type:mongoose.Schema.Types.ObjectId, ref:'User', index:true },
    description:{ type:String, required:true },
    location:{ type:String },
    image:{ type:String },
    toRevise:{type: Boolean, default:false}
}, { toJSON: { virtuals: true }, toObject: { virtuals: true }});

productSchema.virtual('reviews', {
    ref: 'Review',
    localField: '_id',
    foreignField: 'product', 
});

module.exports = mongoose.model('Product', productSchema);