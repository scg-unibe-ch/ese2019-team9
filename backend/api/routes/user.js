const express = require('express');
const router = express.Router();

const UserController = require('../controllers/user');
const checkAuth = require('../mware/check-auth');


//verify user
router.patch('/verify', UserController.verifyUser);

// register new user
router.post('/signup', UserController.signUp);

// user login
router.post('/login', UserController.login);

//resend email
router.post('/resend', UserController.resendVerification);

//forgot password
router.post('/forgot', UserController.forgotPassword);

// request own userdata
router.get('/:userId', checkAuth ,UserController.getUserById);

// update existing user
router.patch('/:userId', checkAuth, UserController.updateUser);

// delete existing user
router.delete('/:userId', checkAuth, UserController.deleteUser);

module.exports = router;

