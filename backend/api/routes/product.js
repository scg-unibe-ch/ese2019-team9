const express = require('express');
const router = express.Router();

const ProductController = require('../controllers/product');

const checkAuth = require('../mware/check-auth');
const getUserInfo = require('../mware/get-user-info');
const imageUpload = require('../mware/image-upload');

router.get('/', getUserInfo, ProductController.getProducts);

router.get('/:productId', ProductController.getProductById);

router.post('/add', checkAuth, imageUpload, ProductController.addProduct);

router.patch('/:productId', checkAuth, imageUpload, ProductController.updateProduct);

router.delete('/:productId', checkAuth, ProductController.deleteProduct);

router.get('/user/:userId', ProductController.getProductsOfUser);

module.exports = router;