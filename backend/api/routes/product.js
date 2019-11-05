const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/product');
const checkAuth = require('../mware/check-auth');
const imageUpload = require('../mware/image-upload');

router.get('/', ProductController.getProducts);

router.post('/add', checkAuth, imageUpload, ProductController.addProduct);

router.patch('/:productId', checkAuth, imageUpload, ProductController.updateProduct);

router.delete('/:productId', checkAuth, ProductController.deleteProduct);

module.exports = router;