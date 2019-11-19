const express = require('express');
const router = express.Router();

const UserController = require('../controllers/user');
const checkAuth = require('../mware/check-auth');
const checkAdmin = require('../mware/check-admin');
const NotificationController = require('../controllers/notifications');

router.get('/', checkAdmin, NotificationController.getAllNotifications);

module.exports = router;