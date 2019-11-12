const express = require('express');
const router = express.Router();

const CategoryController = require('../controllers/category');
const checkAuth = require('../mware/check-auth');
const checkAdmin = require('../mware/check-admin');
const imageUpload = require('../mware/image-upload');

router.get('/', CategoryController.getCategories);

router.get('/:slug', CategoryController.getSingleCategory)

router.post('/add', checkAdmin, CategoryController.addCategory);

router.delete('/:categoryId', checkAdmin, CategoryController.deleteCategory);

router.patch('/:categoryId', checkAdmin, CategoryController.updateCategory);

module.exports = router;