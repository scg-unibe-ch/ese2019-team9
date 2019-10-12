const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const User = require('../models/user');

router.get('/', (req, res, next) => {
    User.find()
    .exec()
    .then(docs => {
        res.status(200).json(docs);
    })
    .catch(err => {
        res.status.err(500).json({ error:err })
    });
});

router.get('/:userId', (req, res, next) => {
    const id = req.params.userId;

    User.findById(id)
    .exec()
    .then(doc => {
        if(doc) {
            res.status(200).json(doc);
        } else {
            res.status(404).json({ message:'no valid entry found for provided user ID'});
        }
    }).catch(err => {
        res.status(500).json({ error:err });
    });
});

router.post('/signup', (req, res, next) => {
    User.find({ email:req.body.email })
    .exec()
    .then(user => {
        if(user.length > 0)
            return res.status(409).json({
                message:'User with same email already exists'
            });
        else {
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                if(err) {
                    return res.status(500).json({
                        error:err
                    });
                } else {
                    const user = new User ({
                        _id: new mongoose.Types.ObjectId(),
                        email:req.body.email,
                        password:hash
                    });
        
                    user
                    .save()
                    .then(result => {
                        res.status(201).json({
                            message: 'User created',
                            createdUser: result
                        });
                    }).catch(err => {
                        res.status(500).json({ error:err });
                    });
                }
            });
        }   
    });
});

router.patch('/:userId', (req, res, next) => {
    const id = req.params.userId;
    const udpateFields = {};

    for(const ops of req.body) {
        udpateFields[ops.propName] = ops.value;
    }

    User.update({ _id:id }, { $set:udpateFields })
    .exec()
    .then(result => {
        res.status(200).json(result);
    })
    .catch(err => { 
        res.status(500).json({ error:err })
    });
});

router.delete('/:userId', (req, res, next) => {
    const id = req.params.userId;
    User.remove({ _id:id })
    .exec()
    .then(result => {
        res.status(200).json({ message:'User deleted' });
    })
    .catch(err => {
        res.status(500).json({error:err})
    });
    
});

module.exports = router;