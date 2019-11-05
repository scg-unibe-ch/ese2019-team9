const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:{ type:String, required:true },
    parent:{ type:String, index:true },
    path:{ type:String, index:true },
    slug:{ type:String },
    image:{ type:String }
});

module.exports = mongoose.model('Category', categorySchema);