const express = require('express');
const router = express.Router();

const UserController = require('../controllers/user');
const checkAuth = require('../mware/check-auth');
const checkAdmin = require('../mware/check-admin');
const NotificationController = require('../controllers/notifications');

router.get('/', checkAdmin, NotificationController.getAllNotifications);
router.post('/', checkAuth, NotificationController.broadcast);
router.post('/:id', checkAuth, NotificationController.sendNotificationstoUser);
router.delete('/:notifId', checkAdmin, NotificationController.deleteById);
router.delete('/user/:uId', checkAuth, NotificationController.deleteByUser);
module.exports = router;