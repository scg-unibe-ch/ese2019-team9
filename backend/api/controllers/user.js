const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const ejs = require('ejs');
const fs = require('fs');

const User = require('../models/user');
const publicDomain = "themoln.herokuapp.com/";

const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "noah.schmid@gym.spiritus.ch", 
      pass: "molnunibe19" 
    }
  });

// list users (only for dev purposes, remove later!)
exports.getAllUsers = (req, res, next) => {
    User.find()
    .exec()
    .then(docs => {
        res.status(200).json(docs);
    })
    .catch(err => {
        res.status(500).json({ error:err })
    });
};

exports.getUserById = (req, res, next) => {
    const id = req.params.userId;
    User.findById(id)
    .exec()
    .then(doc => {
        if(doc) {
            res.status(200).json(doc);
        } else {
            res.status(404).json({ message:'No valid entry found for provided user ID'});
        }
    }).catch(err => {
        res.status(500).json({ error:err });
    });
};

exports.signUp = (req, res, next) => {
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
                        password:hash,
                        verifiedEmail:false
                    });
        
                    user
                    .save()
                    .then(result => {
                        const token = jwt.sign(
                            { 
                                id:user._id
                            }, 
                            process.env.JWT_KEY, 
                            {
                            }
                        );
                        try {
                            const url = process.env.PUBLIC_DOMAIN + "/verify?token=" + token
                            const placeholders = { tokenPlaceholder:url };
                            const template = fs.readFileSync('api/templates/email_verification.html', { encoding:'utf-8' });
                            const body = ejs.render(template, placeholders);
                            
                            const mail = {
                                from:"no-reply@moln.ch",
                                to:user.email,
                                subject:"MOLN account email verification",
                                text:"Please follow this link to verify your email address: " + token,
                                html:body
                            };
                        
                            transport.sendMail(mail, (error, info) => {
                                res.status(201).json({
                                    message:'User created and verification email sent',
                                    createdUser:result,
                                    verificationToken:token
                                });
                            });

                        } catch (err) {
                            console.log(err);
                        }
                    }).catch(err => {
                        res.status(500).json({ error:err });
                    });
                }
            });
        }   
    });
};

exports.login = (req, res, next) => {
    User.find({ email:req.body.email })
    .exec()
    .then(user => {
        if(user.length < 1) {
            // user not found
            return res.status(401).json({
                message:'Authentication failed'
            });
        }

        // check if provided password is correct
        bcrypt.compare(req.body.password, user[0].password, (err, result) => {
            if(err) {
                return res.status(401).json({
                    message:'Authentication failed'
                });
            } 

            // check if email adress is verified
            if(!user[0].verifiedEmail) {
                return res.status(401).json({
                    message:'Email not verified'
                });
            }
                
            // correct password - create and send access token
            if(result) {
                const token = jwt.sign(
                    { 
                        email:user[0].email, 
                        userId:user[0]._id
                    }, 
                    process.env.JWT_KEY, 
                    {
                        expiresIn:"3h"
                    }   
                );
                return res.status(200).json({
                    message:'Authentication successful',
                    token:token,
                    id:user[0]._id
                });
            }

            // wrong password
            res.status(401).json({
                message:'Authentication failed'
            });
        });
    })
    .catch(err => {
        res.status(500).json({ error:err });
    });
};

exports.updateUser = (req, res, next) => {
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
};

exports.deleteUser = (req, res, next) => {
    const id = req.userData.id;
    console.log(req.userData.email);
    User.deleteOne({ _id:id })
    .exec()
    .then(result => {
        res.status(200).json({ message:'User deleted' });
    })
    .catch(err => {
        res.status(500).json({ error:err })
    });
};

exports.verifyUser = (req, res, next) => {
    const token = jwt.verify(req.body.token, process.env.JWT_KEY);
    User.findById(token.id)
        .exec()
        .then(user => {
            user.verifiedEmail = true;
            user.save();
            res.status(200).json({ message:'Email verified' });
        })
        .catch(err => {
            res.status(500).json({ error:err.message });
        });
};