const express = require('express');
const router = express.Router();

const CategoryController = require('../controllers/category');
const checkAuth = require('../mware/check-auth');

router.get('/', CategoryController.getCategories);

router.post('/', CategoryController.addCategory);

router.delete('/:categoryId', CategoryController.deleteCategory);

router.patch('/:categoryId', CategoryController.updateCategory);

module.exports = router;