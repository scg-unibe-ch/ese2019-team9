const OrderController = require('../controllers/order');
const checkAuth = require('../mware/check-auth');
const express = require('express');
const router = express.Router();

router.get('', checkAuth, OrderController.getOrders);

router.post('/place', checkAuth, OrderController.placeOrder);

router.patch('/accept', checkAuth, OrderController.acceptOrder);

router.patch('/reject', checkAuth, OrderController.rejectOrder);

router.patch('/fulfill', checkAuth, OrderController.fulfillOrder);

module.exports = router;