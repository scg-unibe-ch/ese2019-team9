const mongoose = require('mongoose');
const User = require('../models/user');
const Notification = require('../models/notification');

exports.getAllNotifications = (req, res, next)=>{
    Notification.find()
    .exec()
    .then((notifications)=>{
       return res.status(200).json(notifications);
    })
    .catch((err)=>{
        res.status(500).json(err.message);
    })
}

exports.broadcast = (req,res,next) => {
    const mess = req.body.message;
    const not = new Notification({
        text: mess,
        date: new Date(),
        user: 'all'
    });
    try{
        not.save();
        res.status(201).json({message: 'Notification sent'});
    }catch(err){
        res.status(500).json({message: err});
    }
}

exports.getNotificationsByUId = (req, res, next) => {

}

exports.sendNotificationstoUser = (req, res, next)=> {
    const message = req.body.message;
    const id = req.params.id;
    User.findById(id)
    .exec()
    .then((usr) => {
        const newNot = new Notification({
            _id: new mongoose.Types.ObjectId(),
            user: usr._id,
            text: message,
            date: new Date()
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

exports.deleteById = (req,res,err) => {
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
    const uId = req.params.uId;
    Notification.deleteMany({user:uId})
    .then((result)=>{
        res.status(200).json({message: 'all notifications for '+ uId +' deleted'})
    })
    .catch((err) => {
        res.status(500).json({message: err});
    })
}