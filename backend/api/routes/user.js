const express = require('express');
const router = express.Router();

const UserController = require('../controllers/user');
const checkAuth = require('../mware/check-auth');


// list users (only for dev purposes, remove later!)
router.get('/', checkAuth, UserController.getAllUsers);

//deletes all users used for dev purposes (remove later!)
router.delete('/delalldev', UserController.deleteAllDev);

//lists users without authoritsation
router.get('/asdf', UserController.getAllUsers);

//verify user
router.patch('/verify', UserController.verifyUser);

// register new user
router.post('/signup', UserController.signUp);

// get specific user (only for dev purposes, remove later!)
router.get('/:userId', checkAuth, UserController.getUserById);

// user login
router.post('/login', UserController.login);

// update existing user
router.patch('/:userId', UserController.updateUser);

// delete existing user
router.delete('/:userId', checkAuth, UserController.deleteUser);

module.exports = router;

