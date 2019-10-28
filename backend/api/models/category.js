const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:{ type:String, required:true },
    parent:mongoose.Schema.Types.ObjectId,
    slug:{ type:String },
    subcategories:{ type:Array, default:[] },
    products:{ type:Array, default:[] }
});

module.exports = mongoose.model('Category', categorySchema);