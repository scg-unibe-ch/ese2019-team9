const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/product');
const checkAuth = require('../mware/check-auth');

router.get('/', ProductController.getProducts);

router.post('/add', checkAuth, ProductController.addProduct);

router.patch('/:productId', checkAuth, ProductController.updateProduct);

router.delete('/:productId', checkAuth, ProductController.deleteProduct);

module.exports = router;