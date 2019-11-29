const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    date:{ type:Date, required:true },
    sender:{ type:mongoose.Schema.Types.ObjectId, ref:'User', index:true, required:true },
    message:{ type:String },
    statusMessage:{ type:Boolean, required:true, default:false }
});

const orderSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    startDate:{ type:Date, required:true },
    endDate:{ type:Date, required:true },
    orderDate:{ type:Date, required:true },
    status:{ type:String, default:'pending' },
    buyer:{ type:mongoose.Schema.Types.ObjectId, ref:'User', index:true, required:true },
    product:{ type:mongoose.Schema.Types.ObjectId, ref:'Product', index:true, required:true },
    seller:{ type:mongoose.Schema.Types.ObjectId, ref:'User', index:true, required:true },
    chat:[messageSchema]
});

module.exports = mongoose.model('Order', orderSchema);