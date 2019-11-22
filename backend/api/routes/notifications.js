const express = require('express');
const router = express.Router();

const UserController = require('../controllers/user');
const checkAuth = require('../mware/check-auth');
const checkAdmin = require('../mware/check-admin');
const NotificationController = require('../controllers/notifications');
// get all notifications (only admins)
router.get('/', checkAdmin, NotificationController.getAllNotifications);

//get userspecific notification
router.get('/user', checkAuth, NotificationController.getNotificationsByUId);

//send userspecific notification
router.post('/:uId', checkAuth, NotificationController.sendNotificationstoUser);

//delete all userspecific notifications (backend only?)
router.delete('/user', checkAuth, NotificationController.deleteByUser);

//set read flag of all notifications for user
router.patch('/user', checkAuth, NotificationController.setRead);

//delete notification
router.delete('/:notifId', checkAuth, NotificationController.deleteById);

module.exports = router;