const express = require('express');
const router = express.Router();

const CategoryController = require('../controllers/category');
const checkAuth = require('../mware/check-auth');
const checkAdmin = require('../mware/check-admin');
const getUserInfo = require('../mware/get-user-info');
const imageUpload = require('../mware/image-upload');

router.get('/', CategoryController.getCategories);

router.get('/:slug', getUserInfo, CategoryController.getSingleCategory)

router.post('/add', checkAdmin, imageUpload, CategoryController.addCategory);

router.delete('/:categoryId', checkAdmin, CategoryController.deleteCategory);

router.patch('/:categoryId', checkAdmin, imageUpload, CategoryController.updateCategory);

module.exports = router;