const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    date:{ type:Date, required:true },
    sender:{ type:mongoose.Schema.Types.ObjectId, ref:'User', index:true, required:true },
    message:{ type:String },
    statusMessage:{ type:Boolean, required:true, default:false }
});

module.exports = mongoose.model('Message', messageSchema);