const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const ejs = require('ejs');
const fs = require('fs');

const User = require('../../models/user');
const publicDomain = "themoln.herokuapp.com/";

const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "noah.schmid@gym.spiritus.ch", 
      pass: "molnunibe19" 
    }
  });

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
                })
                .catch(err => {
                    return res.status(500).json({ message:'Failed to delete all users'});
                });
            }
        });
    })
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
    })
    .catch(err => {
        res.status(500).json({ error:err })
    });
};