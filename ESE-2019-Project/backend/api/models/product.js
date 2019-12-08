const mongoose = require('mongoose');
const Order = require('./order');
const Review = require('./review');

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
    toRevise:{type: Boolean, default:false},
    date:{ type:Date }
}, { toJSON: { virtuals: true }, toObject: { virtuals: true }});

productSchema.virtual('reviews', {
    ref: 'Review',
    localField: '_id',
    foreignField: 'product', 
});

// delete dependencies when product gets deleted
productSchema.pre('remove', function(next) {
    Order.deleteMany({product: this._id}).exec();
    Review.deleteMany({product: this._id}).exec();
    next();
});

module.exports = mongoose.model('Product', productSchema);