const express = require('express');
const router = express.Router();
const DevController = require('../controllers/dev');
const checkAuth = require('../../mware/check-auth');

//lists users without authoritsation
router.get('/', DevController.getAllUsers);

//deletes all users used for dev purposes
router.delete('/', DevController.deleteAllDev);

//delete specific user without verification and pw
router.delete('/:id', DevController.deleteUser);

//get user by id
router.get('/:id', DevController.getUser);

//verifies token
router.get('/verify/:token', DevController.verifyToken)

module.exports = router;