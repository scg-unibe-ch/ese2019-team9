const mongoose = import('mongoose');

const productSchema = {
    _id:mongoose.Schema.types.ObjectId,
    name: { type:String },
    category: { type:String },
    price: { type:Number },
    verified: { type:Boolean, default:false },
    seller: { type:Array, default:[] }
}

module.exports = mongoose.model('Product', productSchema);