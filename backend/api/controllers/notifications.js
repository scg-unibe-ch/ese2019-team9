const mongoose = require('mongoose');
const User = require('../models/user');
const Notification = require('../models/notification');

exports.getAllNotifications = (req, res, next) => {
    Notification.find()
        .select("-__v")
        .exec()
        .then((notifications) => {
            return res.status(200).json(notifications);
        })
        .catch((err) => {
            res.status(500).json(err.message);
        })
}
exports.getNotification = (req, res, next) => {
    Notification.find({
            user: new mongoose.Types.ObjectId(req.userData.userId)
        })
        .exec()
        .then((notification) => {
            if (notification)
                res.status(200).json(notification);
            else
                res.status(500).json({
                    message: 'no notification found'
                });
        })
        .catch((err) => {
            res.status(500).json({
                message: err.message
            });
        });
}

exports.getNotificationsByUId = (req, res, next) => {
    const uId = req.userData.userId;
    Notification.find({
            user: new mongoose.Types.ObjectId(uId)
        })
        .exec()
        .then(async (notifications) => {
            const unread = await Notification.aggregate([{
                $match: {
                    $and: [{
                        read: false
                    }, {
                        user: new mongoose.Types.ObjectId(uId)
                    }]
                }
            }, {
                $group: {
                    _id: null,
                    count: {
                        $sum: 1
                    }
                }
            }]);

            res.status(200).json({
                unread: unread[0] ? unread[0].count : 0,
                notifications: notifications
            });
        })
        .catch((err) => {
            res.status(500).json({
                message: err.message
            });
        })
}

exports.setRead = (req, res, next) => {
    const uId = req.userData.userId;
    Notification.updateMany({
            $and: [{
                user: new mongoose.Types.ObjectId(uId)
            }, {
                read: false
            }]
        }, {
            $set: {
                read: true
            }
        })
        .exec()
        .then(result => {
            return res.status(200).json({
                message: 'read flag set'
            })
        })
        .catch((err) => {
            return res.status(500).json({
                message: err.message
            });
        })
}

exports.sendNotificationstoUser = (req, res, next) => {
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
                    res.status(201).json({
                        message: 'Notification sent',
                        notification: savedNotification
                    });
                }).catch((err) => {
                    res.status(500).json(err);
                });
        })
        .catch((err) => {
            res.status(500).json({
                message: err.message
            });
        });
}

exports.deleteById = async (req, res, err) => {
    const id = req.params.notifId;
    Notification.deleteOne({
            _id: id
        })
        .exec()
        .then((result) => {
            res.status(200).json({
                message: 'deleted Notification'
            });
        })
        .catch((err) => {
            res.status(500).json(err);
        })
};

exports.deleteByUser = (req, res, err) => {
    const uId = req.userData.userId;
    Notification.deleteMany({
            user: uId
        })
        .then((result) => {
            res.status(200).json({
                message: 'all notifications deleted'
            })
        })
        .catch((err) => {
            res.status(501).json({
                message: err.message
            });
        })
}