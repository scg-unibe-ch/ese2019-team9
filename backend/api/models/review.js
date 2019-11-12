const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    rating:{ type:Number, required:true },
    comment:{ type:String },
    user:{ type:mongoose.Schema.Types.ObjectId, ref:'User', index:true, required:true },
    product:{ type:mongoose.Schema.Types.ObjectId, ref:'Product', index:true, required:true }
});

module.exports = mongoose.model('Review', reviewSchema);