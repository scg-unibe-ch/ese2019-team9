const express = require('express');
const router = express.Router();

const UserController = require('../controllers/user');

// list users (only for dev purposes, remove later!)
router.get('/', UserController.getAllUsers);

// get specific user (only for dev purposes, remove later!)
router.get('/:userId', UserController.getUserById);

// register new user
router.post('/signup', UserController.signUp);

// user login
router.post('/login', UserController.login);

// update existing user
router.patch('/:userId', UserController.updateUser);

// delete existing user
router.delete('/:userId', UserController.deleteUser);

module.exports = router;