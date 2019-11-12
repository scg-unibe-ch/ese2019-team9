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
    rating:{ type:Number, default:0 }
});

productSchema.virtual('reviews', {
    ref: 'Review', // The model to use
    localField: '_id', // Find people where `localField`
    foreignField: 'product', // is equal to `foreignField`
});

module.exports = mongoose.model('Product', productSchema);