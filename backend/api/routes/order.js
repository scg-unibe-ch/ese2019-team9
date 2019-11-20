const OrderController = require('../controllers/order');
const express = require('express');
const Router = express.Router();

Router.get('', OrderController.getOrders);

Router.post('/add', OrderController.addOrder);

Router.post('/confirm', OrderController.confirmOrder);

Router.post('/reject', OrderController.rejectOrder);