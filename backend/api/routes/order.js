const OrderController = require('../controllers/order');
const checkAuth = require('../mware/check-auth');
const express = require('express');
const router = express.Router();

router.get('/id/:orderId', checkAuth, OrderController.getOrderById);

router.get('/seller', checkAuth, OrderController.getSellerOrders);

router.get('/seller/new', checkAuth, OrderController.getNewSellerOrders);

router.get('/buyer', checkAuth, OrderController.getBuyerOrders);

router.post('/place', checkAuth, OrderController.placeOrder);

router.patch('/accept', checkAuth, OrderController.acceptOrder);

router.patch('/reject', checkAuth, OrderController.rejectOrder);

router.patch('/pay', checkAuth, OrderController.payOrder);

router.post('/message/send', checkAuth, OrderController.sendMessage);

module.exports = router;