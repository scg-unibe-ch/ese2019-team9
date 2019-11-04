const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:{ type:String, required:true },
    categoryId:{ type:String, index:true, required:true },
    price:{ type:Number, required:true },
    verified:{ type:Boolean, default:false },
    sellerId:{ type:mongoose.Schema.Types.ObjectId },
    description:{ type:String, required:true },
    location:{ type:String },
    rating:{ type:Number, default:0 }
});

module.exports = mongoose.model('Product1', productSchema);