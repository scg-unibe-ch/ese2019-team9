const express = require('express');
const router = express.Router();
const checkAuth = require('../mware/check-auth');
const checkAdmin = require('../mware/check-admin');

const ReviewController = require('../controllers/review');

router.post('/add', checkAuth, ReviewController.addReview);

router.patch('/:productId', checkAuth, ReviewController.editReview);

router.delete('/:productId', checkAuth, ReviewController.deleteReview);

router.get('', checkAdmin, ReviewController.getReviews);

module.exports = router;