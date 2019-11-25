const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const ejs = require('ejs');
const fs = require('fs');
const User = require('../../models/user');

  exports.deleteAllDev = (req, res, next) => {
    User.find()
    .exec()
    .then(docs => {
        docs.forEach(element => {
            if(element.email.match("[A-Za-z0-9]*@fs\\.ch")){
                User.remove({_id:element._id})
                .exec()
                .then(result => {
                    res.status(200).json({ message:'All dev users deleted' });
                    next();
                })
                .catch(err => {
                    res.status(500).json({ message:'Failed to delete all users'});
                });
            }
        });
    }).catch((err) => {
        res.status(500).json({message: err});
    });
};

exports.deleteUser = (req, res, next) => {
    const id = req.params.id;
    User.deleteOne({ _id:id })
    .exec()
    .then(result => {
        res.status(200).json({ message:'User deleted' });
    })
    .catch(err => {
        res.status(500).json({ error:err })
    });
};

exports.getUser = (req, res, next) => {
    const id = req.params.id;
    User.findById(id)
    .exec()
    .then(result => {
        res.status(200).json({ message:result});
        next();
    })
    .catch(err => {
        res.status(500).json({ error:err })
    });
};

exports.getAllUsers = (req, res, next) =>{
    User.find().exec().then( (users) => {
        res.status(200).json(users);
        next();
    }).catch((err) =>{
        res.status(500).json({'message':err});
    });
}

exports.verifyToken = (req, res, next) => {
    const token = req.params.token;
    try{
        const verified = jwt.verify(token, process.env.JWT_KEY);
        res.status(200).json({token: verified});
    }catch(error){
        res.status(500).json({message: error});
    }
}

exports.getToken = (req, res, next) => {
    const token = req.body;
    try{
        const encoded = jwt.sign(token, process.enc.JWT_KEY);
        res.status(200).json({token: encoded});
    }catch (error){
        res.status(500).json({message:error,wiso:'wiso'});
    }
}

exports.deleteUserWithDomain = (req, res, next) => {
    const regex = req.params.domain + '\\.' + req.params.namespace;
      User.find()
    .exec()
    .then(docs => {
        docs.forEach(element => {
            if(element.email.match("[A-Za-z0-9]*@" + regex)){
                User.remove({_id:element._id})
                .exec()
                .then(() => {
                    res.status(200).json({ message:'All dev users deleted' });
                    next();
                })
                .catch(err => {
                    res.status(500).json({ message:'Failed to delete all users'});
                });
            }
        });
    }).catch((err)=>{
        res.status(500).json({message: err});
    });
}
exports.verify = (req,res,next) => {
   let id = req.body.id;
   User.findById({_id:id})
   .exec()
   .then((user)=>{
       user.verifiedEmail = true;
       user.save()
       res.status(200).json({'message': 'successful'});
   })
   .catch((err)=>{
       res.status(500).json({message: err});
   });
}