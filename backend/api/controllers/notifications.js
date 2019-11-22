const mongoose = require('mongoose');
const User = require('../models/user');
const Notification = require('../models/notification');

exports.getAllNotifications = (req, res, next)=>{
    Notification.find()
    .select("-__v")
    .exec()
    .then((notifications)=>{
       return res.status(200).json(notifications);
    })
    .catch((err)=>{
        res.status(500).json(err.message);
    })
}

exports.getNotificationsByUId = (req, res, next) => {
    const uId = req.userData.userId;
    Notification.find({user: uId})
    .exec()
    .then((notifications) =>{
        res.status(200).json(notifications);
    })  
    .catch((err) => {
        res.status.json({message: err});
    })
}

exports.setRead = (req, res, next) => {
    const uId = req.userData.userId;
    Notification.find({user: uId})
    .exec()
    .then((notifications) => {
        notifications.forEach((notification) => {
            try{
                notification.read = true;
                notification.save();
            }catch(err){
                res.status(500).json({message: err});
            }
        });
        res.status(200).json({message: 'read flag set'})
    })
    .catch((err) => {
        res.status(500).json({message: err});
    })
}

exports.sendNotificationstoUser = (req, res, next)=> {
    const message = req.body.message;
    const url = req.body.link;
    const id = req.params.uId;
    User.findById(id)
    .exec()
    .then((usr) => {
        const newNot = new Notification({
            _id: new mongoose.Types.ObjectId(),
            user: usr._id,
            text: message,
            date: new Date(),
            link: url
        });
        newNot.save()
        .then((savedNotification) => {
            res.status(201).json({message: 'Notification sent', notification: savedNotification});
        }).catch((err)=>{
            res.status(500).json(err);
        });
    })
    .catch((err) => {
        res.status(500).json({message: err});
    });
}

exports.deleteById = async (req,res,err) => {
    const id = req.params.notifId;
    Notification.deleteOne({_id:id})
    .exec()
    .then((result) => {
        res.status(200).json({message: 'deleted Notification'});
    })
    .catch((err) => {
        res.status(500).json(err);
    })
};

exports.deleteByUser = (req, res, err) => {
    const uId = req.userData.userId;
    Notification.deleteMany({user:uId})
    .then((result)=>{
        res.status(200).json({message: 'all notifications deleted'})
    })
    .catch((err) => {
        res.status(501).json({message: err});
    })
}