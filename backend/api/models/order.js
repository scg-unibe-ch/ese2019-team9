const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    date:{ type:Date, required:true },
    status:{ type:String, default:'pending' },
    buyer:{ type:mongoose.Schema.Types.ObjectId, ref:'User', index:true, required:true },
    product:{ type:mongoose.Schema.Types.ObjectId, ref:'Product', index:true, required:true },
    seller:{ type:mongoose.Schema.Types.ObjectId, ref:'User', index:true, required:true }
});

module.exports = mongoose.model('Order', orderSchema);