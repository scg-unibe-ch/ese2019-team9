const mongoose = require('mongoose');
const User = require('../models/user');
const Notification = require('../models/notification');

exports.getAllNotifications = (req, res, next)=>{
    Notification.find({})
    .exec()
    .then((notifications)=>{
        res.status(200).json(notifications);
    })
    .catch((err)=>{
        res.status(500).json(err.message);
    })
}

exports.broadcast = (req,res,next) => {
    const mess = req.body.message;
    User.find({})
    .exec()
    .then((users)=>{
        //for each uid add a message
        users.forEach((user) =>{
            const notification = new Notification({
                _id: new mongoose.Types.ObjectId(),
                uId: user._id,
                message: mess,
                date: Date().getDate()
            });
        });
    })
    .catch((err) => {
        res.status(500).json(err.message);
    })
}

exports.getNotificationsByUId = (req, res, next) => {

}

exports.sendNotificationstoUser = (req, res, next)=> {

}