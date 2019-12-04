const PaymentController = require('../controllers/payment');
const express = require('express');
const Router = express.Router();
const checkAuth = require('../mware/check-auth');

Router.post('/create', checkAuth, PaymentController.createPayment);

Router.post('/execute', checkAuth, PaymentController.executePayment);

module.exports = Router;