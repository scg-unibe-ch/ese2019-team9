const express = require('express');
const router = express.Router();

const UserController = require('../controllers/user');
const checkAuth = require('../mware/check-auth');

// delete existing user
router.delete('/:userId', UserController.deleteUser);

// list users (only for dev purposes, remove later!)
router.get('/', checkAuth, UserController.getAllUsers);

// register new user
router.post('/signup', UserController.signUp);

// user login
router.post('/login', UserController.login);

// get specific user (only for dev purposes, remove later!)
router.get('/:userId', checkAuth, UserController.getUserById);

// update existing user
router.patch('/:userId', UserController.updateUser);

module.exports = router;