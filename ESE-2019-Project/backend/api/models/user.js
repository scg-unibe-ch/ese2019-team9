const mongoose = require('mongoose');
const Product = require('./product');
const Notification = require('./notification');
const Review = require('./review');
const Order = require('./review');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: { 
        type:String, 
        required:true, 
        unique:true, 
        match:/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/ 
    },
    password: { type:String, required:true },
    verifiedEmail: { type:Boolean, required:true, default:false },
    admin: { type:Boolean, default:false },
    name: { type:String },
    address: { type:String },
    country: { type:String },
    website: { type:String },
    phone: { type:String },
    sex: { type:String },
    image: { type: String }
});

// delete dependencies when user gets deleted
userSchema.pre('remove', function(next) {
    Product.deleteMany({seller: this._id}).exec();
    Order.deleteMany({buyer:this._id}).exec();
    Order.deleteMany({seller:this._id}).exec();
    Notification.deleteMany({}).exec({user: this._id});
    Review.deleteMany({}).exec({user: this._id});
    next();
});

module.exports = mongoose.model('User', userSchema);
