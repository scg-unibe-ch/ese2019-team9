const mongoose = require('mongoose');

const notificationSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    text:{ type:String, required:true },
    date:{ type:Date },
    user:{ type:mongoose.Schema.Types.ObjectId, ref:'User', index:true, required:true },
    read: {type:Boolean, default:false}
});

module.exports = mongoose.model('Notification', notificationSchema);