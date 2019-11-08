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
    rating:{ type:Number, default:0 },
    image:{ type:String }
});

module.exports = mongoose.model('Product', productSchema);