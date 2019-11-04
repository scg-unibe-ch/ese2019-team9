const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const browserDetect = require('browser-detect');

const Email = require('../methods/mail.js');
const User = require('../models/user');

/**
 * Get user data by id
 * @param req has to contain userId
 */
exports.getUserById = (req, res, next) => {
    const id = req.params.userId;
    User.findById(id)
    .exec()
    .then(doc => {
        if(doc) {
            res.status(200).json(doc);
        } else {
            res.status(404).json({ message: 'No valid entry found for provided user ID' });
        }
    }).catch(err => {
        res.status(500).json({ error: err });
    });
}

/**
 * Get all users
 */
exports.getAllUsers = (req, res, next) => {
    User.find()
    .exec()
    .then(doc => {
        if(doc) {
            res.status(200).json(doc);
        } else {
            res.status(404).json({ message: 'No valid entry found for provided user ID' });
        }
    }).catch(err => {
        res.status(500).json({ error: err });
    });
}

/**
 * Creates a new user and sends verification email
 * @param req has to contain email and password
 */
exports.signUp = (req, res, next) => {
    User.find({ email: req.body.email })
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
                        email: req.body.email,
                        password: hash,
                        admin: false,
                        verifiedEmail: false
                    });
        
                    user
                    .save()
                    .then(result => {
                        const token = jwt.sign(
                            { 
                                id: user._id
                            }, 
                            process.env.JWT_KEY, 
                            {
                            }
                        );

                        Email.sendVerification(token, user.email, result).then(()=>{
                            res.status(201).json({
                                message:'User created and verification email sent',
                                createdUser: result
                            });
                        })
                        .catch((err) => {
                            res.status(500).json({ error: err });
                        });
                        
                    }).catch(err => {
                        res.status(500).json({ error: err });
                    });
                }
            });
        }   
    });
};

/**
 * Log the given user in and get login token
 * @param req has to contain email and password
 * @returns token
 */
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
                
            // correct password - create and send access token
            if(result) {
                const token = jwt.sign(
                    { 
                        email: user[0].email, 
                        userId: user[0]._id,
                        admin: user[0].admin,
                        _flag: 1
                    }, 
                    process.env.JWT_KEY, 
                    {
                        expiresIn: "3h"
                    }   
                );
                return res.status(200).json({
                    message: 'Authentication successful',
                    token: token,
                    id: user[0]._id
                });
            }else{
                //check whether email is verified
                if(!user[0].verifiedEmail) {
                    return res.status(307).json({
                        message: 'Email not verified',
                        id: user[0].id
                    });
                }else{
                    // wrong password
                    res.status(401).json({
                        message: 'Authentication failed'
                    });
                }
            }
        });
    })
    .catch(err => {
        res.status(500).json({ error: err });
    });
};

/**
 * Updates given fields for given user
 * @param req has to contain userId and fields to update in the body
 * 
 * @example JSON -> { "userId":"asd", "field":"value1", "field2":"value2" }
 */
exports.updateUser = (req, res, next) => {
    const id = req.params.userId;
    const udpateFields = {};

    for(const [propName, value] of Object.entries(req.body)) {
        udpateFields[propName] = value;
    }

    User.update({ _id:id }, { $set: udpateFields })
    .exec()
    .then(result => {
        res.status(200).json(result);
    })
    .catch(err => { 
        res.status(500).json({ error: err })
    });
};

/**
 * Delete given user
 * @param req has to contain id in the body
 */
exports.deleteUser = (req, res, next) => {
    const id = req.userData.id;

    if(req.userData.id != req.params.userId || !req.userData.admin)
        return res.status(401).json({
            message:'Access denied'
        });

    User.deleteOne({ _id: id })
    .exec()
    .then(result => {
        res.status(200).json({ message: 'User deleted' });
    })
    .catch(err => {
        res.status(500).json({ error: err })
    });
};

/**
 * Verify email address of given user
 * @param req has to contain token in the body
 */
exports.verifyUser = (req, res, next) => {
    try{
        const token = jwt.verify(req.body.token, process.env.JWT_KEY);
        User.findById(token.id)
        .exec()
        .then(user => {
            if(user.verifiedEmail){
                res.status(500).json({ message: 'Email already verified' });
            }
            user.verifiedEmail = true;
            user.save();
            res.status(200).json({ message: 'Email successfully verified' });
        })
        .catch(err => {
            res.status(500).json({ message: err });
        });
    }catch(err){
        res.status(500).json({ message: 'token invalid' });
    }
};

/**
 * Resend email verification link
 * @param req has to contain email and id in the body
 */
exports.resendVerification = (req, res, next) => {
    const id = req.body.id;
    const userMail = req.body.email;
    const verifyToken = jwt.sign({ id: id }, process.env.JWT_KEY,{});

    Email.sendVerification(verifyToken, userMail)
    .then(()=>{
        res.status(200).json({ message: 'Verification successfully resent' });
    })
    .catch((err) => {
        res.status(500).json({ message: err });
    });
};

/**
 * If user requests to change password, send an email to given email. If email is registered,
 * send link to reset password, else send email notification that someone tried to reset password.
 * @param req has to contain email in the body
 */
 exports.forgotPassword = (req, res, next) => {
    const usermail = req.body.email;
    const source = browserDetect(req.headers['user-agent']);

    const browser = source.name;
    const operatingSystem = source.os;
    
    User.findOne({ email: usermail })
    .exec()
    .then((user) =>{
        //user gave existing email
        if(user) {
            const token = jwt.sign({ id: user._id }, process.env.JWT_KEY, { expiresIn: "1h" });
            Email.sendResetLink(token, usermail, browser, operatingSystem)
            .then(() =>{
                res.status(200).json({ message: 'Reset-link sent' });
            })
            .catch((err) => {
                res.status(500).json({ message: err });
            });
        } else {
            // email is not yet registered
            Email.sendEmailNotRegistered(usermail, browser, operatingSystem)
            .then(() => {
                res.status(200).json({ message: 'Reset-link sent' });
            })
            .catch((err) => {
                res.status(500).json({ message: err });
            });
        }
    })
    .catch((err) => {
        res.status(500).json({ message: err });
    });
 };

 /**
  * Save new password for given user
  * @param req has to contain token and password in the body
  */
 exports.newPassword = (req, res, next) => {
    const token = req.body.token;
    const password = req.body.password;
    try {
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        const id = decoded.id;
        User.findById(id).exec()
        .then((user) => {
            bcrypt.hash(password, 10, (err, hash) =>{
                if(err){
                    res.status(500).json({ message: err });
                }else{
                    user.password = hash;
                    user.save()
                    res.status(200).json({ message: 'password-reset successful' });
                }
            });
        })
        .catch((err) => {
            res.status(500).json({ message: err });
        })
    } catch(err) {
        res.status(500).json({ message: 'token invalid' });
    } 
 };