const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    date:{ type:Date, required:true },
    accepted:{ type:Boolean, default:false },
    paid:{ type:Boolean, default:false },
    user:{ type:mongoose.Schema.Types.ObjectId, ref:'User', index:true, required:true },
    product:{ type:mongoose.Schema.Types.ObjectId, ref:'Product', index:true, required:true }
});

module.exports = mongoose.model('Order', orderSchema);