const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name: { type:String },
    category: { type:String },
    price: { type:Number },
    verified: { type:Boolean, default:false },
    seller: { type:Object, default:{} }
});

module.exports = mongoose.model('Product', productSchema);