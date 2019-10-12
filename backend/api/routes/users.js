const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET request on /users'
    });
});

router.get('/:userId', (req, res, next) => {
    const id = req.params.userId;
    res.status(200).json({
        message: 'Handling GET for specific user',
        id: id
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling POST request on /users'
    });
});

router.patch('/:userId', (req, res, next) => {
    const id = req.params.userId;
    res.status(200).json({
        message: 'Updated user'
    });
});

router.delete('/:userId', (req, res, next) => {
    const id = req.params.userId;
    res.status(200).json({
        message: 'Deleted user'
    });
});

module.exports = router;