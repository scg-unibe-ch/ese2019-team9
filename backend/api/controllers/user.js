const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Email = require('../methods/mail.js');

const User = require('../models/user');

exports.getUserById = (req, res, next) => {
    const id = req.params.userId;
    User.findById(id)
    .exec()
    .then(doc => {
        if(doc) {
            res.status(200).json(doc);
        } else {
            res.status(404).json({ message:'No valid entry found for provided user ID' });
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
                                id:user._id
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
                            res.status(500).json({ error:err });
                        });
                        
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
                
            // correct password - create and send access token
            if(result) {
                const token = jwt.sign(
                    { 
                        email:user[0].email, 
                        userId:user[0]._id,
                        admin:user[0].admin,
                        _flag:1
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
            }else{
                //check whether email is verified
                if(!user[0].verifiedEmail) {
                    return res.status(307).json({
                        message:'Email not verified',
                        id:user[0].id
                    });
                }else{
                    // wrong password
                    res.status(401).json({
                        message:'Authentication failed'
                    });
                }
            }
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

    if(req.userData.id != req.params.userId || !req.userData.admin)
        return res.status(401).json({
            message:'Access denied'
        });

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
    try{
        const token = jwt.verify(req.body.token, process.env.JWT_KEY);
        User.findById(token.id)
        .exec()
        .then(user => {
            if(user.verifiedEmail){
                res.status(500).json({ message:'Email already verified' });
            }
            user.verifiedEmail = true;
            user.save();
            res.status(200).json({ message:'Email successfully verified' });
        })
        .catch(err => {
            res.status(500).json({ message: err });
        });
    }catch(err){
        res.status(500).json({message: 'token invalid'});
    }
};

/**
 * @param request has to contain a Json with _id and email of the user
 * @param result
 * @param next is the next function
 */

exports.resendVerification = (req, res, next) => {
    const id = req.body._id;
    const userMail = req.body.email;
    const verifyToken = jwt.sign({id:id}, process.env.JWT_KEY,{});

    Email.sendVerification(verifyToken, userMail)
    .then(()=>{
        res.status(200).json({message: 'Verification successfully resent'});
    })
    .catch((err) => {
        res.status(500).json({message: err});
    });
};

/**
 * @param request contains the email of the user
 */

 exports.forgotPassword = (req, res, next) => {
    const usermail = req.body.email;

    //user gave existing email
    if(User.exists({email: usermail})){
        User.findOne({email: usermail})
        .exec()
        .then((user) =>{
            const token = jwt.sign({id: user._id}, process.env.JWT_KEY, {expiresIn: "1h"});
            Email.sendResetLink(token, usermail)
            .then(() =>{
                res.status(200).json({message: 'Reset-link sent'});
            })
            .catch((err) => {
                res.status(500).json({message: err});
            });
         })
        .catch((err) => {
            res.status(500).json({message: err});
        });
    }else{//user gave wrong email
        Email.sendEmailNotRegistered(usermail)
        .then(() => {
            res.status(200).json({message: 'Reset-link sent'});
        })
        .catch((err) => {
            res.status(500).json({message: err});
        });
    }
 };

 exports.newPassword = (req, res, next)=>{
    const token = req.body.token;
    const password = req.body.password;
    try{
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        const id = decoded.id;
        User.findById(id).exec()
        .then((user) => {
            bcrypt.hash(password, 10, (err, hash) =>{
                if(err){
                    res.status(500).json({message: err});
                }else{
                    user.password = hash;
                    user.save()
                    res.status(200).json({message:'password-reset successful'});
                }
            });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({message: err});
        })
    }catch(err){
        res.status(500).json({message: 'token invalid'})
    } 
 };