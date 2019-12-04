const express = require('express');
const router = express.Router();
const DevController = require('../controllers/dev');
const checkAuth = require('../../mware/check-auth');

//lists users without authoritsation
router.get('/', DevController.getAllUsers);

//verify user email by id
router.patch('/verify', DevController.verify);

//deletes all users used for dev purposes
router.delete('/', DevController.deleteAllDev);

//delete specific user without verification and pw
router.delete('/:id', DevController.deleteUser);

//delete every user with that domain
router.delete('/regex/:domain/:namespace', DevController.deleteUserWithDomain);

//get user by id
router.get('/:id', DevController.getUser);

//verifies token
router.get('/verifyToken/:token', DevController.verifyToken)

//gets token
router.post('/token', DevController.getToken);

module.exports = router;