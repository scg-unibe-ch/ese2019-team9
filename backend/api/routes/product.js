const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/product');

router.get('/', ProductController.getProducts);

router.post('/add', ProductController.addProduct);

router.patch('/:productId', ProductController.updateProduct);

router.delete('/:productId', ProductController.deleteProduct);

module.exports = router;