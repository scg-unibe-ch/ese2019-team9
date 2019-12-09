const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const browserDetect = require('browser-detect');
const fs = require('fs');
const {
    promisify
} = require('util')
const env = process.env;

const Email = require('../methods/mail');
const User = require('../models/user');
const Order = require('../models/order');
const deleteFile = require('../methods/delete-file');

/**
 * Get user data by id
 * @param req has to contain userId
 */
exports.getUserById = (req, res, next) => {
    const id = req.params.userId;
    const fields = id != req.userData.userId && !req.userData.admin ? '-password -__v -admin -email -verifiedEmail -__v' : '-password -__v';
    User.findById(id)
        .select(fields)
        .then(async doc => {
            if (!doc)
                throw new Error('No valid entry found for provided user ID');

            const agg = await Order.aggregate([{
                $match: {
                    $and: [{
                        seller:new mongoose.Types.ObjectId(id)
                    }, {
                        status:'paid'
                    }]
                }
            }, {
                $group: {
                    _id: null,
                    count: {
                        $sum: 1
                    }
                }
            }]);

            const productsSold = agg[0] ? agg[0].count : 0;
            
            const imagePath = !doc.image ? process.env.PUBLIC_DOMAIN_API + "/rsc/no-user-image.png" : process.env.FILE_STORAGE + doc.image;
            res.status(200).json({
                _id: doc._id,
                admin: doc.admin,
                email: doc.email,
                verifiedEmail: doc.verifiedEmail,
                name: doc.name,
                address: doc.address,
                country: doc.country,
                website: doc.website,
                phone: doc.phone,
                sex: doc.sex,
                image: imagePath,
                productsSold:productsSold
            });

        }).catch(err => {
            res.status(500).json({
                error: err.message
            });
        });
}

/**
 * Get all users
 */
exports.getAllUsers = (req, res, next) => {
    const fields = !req.userData.admin ? '-password -__v -admin -email -verifiedEmail -__v' : '-password -__v';
    User.find()
        .select(fields)
        .exec()
        .then(docs => {
            if (docs) {
                res.status(200).json(docs.map(doc => {
                    const imagePath = !doc.image ? process.env.PUBLIC_DOMAIN_API + "/rsc/no-user-image.png" : process.env.FILE_STORAGE + doc.image;
                    return {
                        _id: doc._id,
                        admin: doc.admin,
                        email: doc.email,
                        verifiedEmail: doc.verifiedEmail,
                        name: doc.name,
                        address: doc.address,
                        country: doc.country,
                        website: doc.website,
                        phone: doc.phone,
                        sex: doc.sex,
                        image: imagePath
                    };
                }));
            } else {
                res.status(404).json({
                    message: 'No valid entry found for provided user ID'
                });
            }
        }).catch(err => {
            res.status(500).json({
                error: err.message
            });
        });
}

/**
 * Creates a new user and sends verification email
 * @param req has to contain email and password
 */
exports.signUp = (req, res, next) => {
    User.find({
            email: req.body.email
        })
        .exec()
        .then(user => {
            if (user.length > 0)
                return res.status(409).json({
                    message: 'User with same email already exists'
                });
            else {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if (err) {
                        return res.status(500).json({
                            error: err
                        });
                    } else {
                        const user = new User({
                            _id: new mongoose.Types.ObjectId(),
                            email: req.body.email,
                            password: hash,
                            admin: false,
                            verifiedEmail: false
                        });

                        user
                            .save()
                            .then(result => {
                                const token = jwt.sign({
                                        id: user._id
                                    },
                                    env.JWT_KEY, {}
                                );

                                Email.sendVerification(token, user.email, result).then(() => {
                                        res.status(201).json({
                                            message: 'User created and verification email sent',
                                            createdUser: result
                                        });
                                    })
                                    .catch((err) => {
                                        res.status(500).json({
                                            error: err
                                        });
                                    });

                            }).catch(err => {
                                res.status(500).json({
                                    error: err
                                });
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
    User.findOne({
            email: req.body.email
        })
        .exec()
        .then(user => {
            if (!user) {
                // user not found
                return res.status(401).json({
                    message: 'Authentication failed'
                });
            }

            //check whether email is verified
            if (!user.verifiedEmail) {
                return res.status(406).json({
                    message: 'Email not verified'
                });
            }

            // check if provided password is correct
            bcrypt.compare(req.body.password, user.password, (err, result) => {
                if (err) {
                    return res.status(401).json({
                        message: 'Authentication failed'
                    });
                }

                // correct password - create and send access token
                if (result) {
                    const token = jwt.sign({
                            email: user.email,
                            userId: user._id,
                            admin: user.admin,
                            _flag: 1
                        },
                        env.JWT_KEY, {
                            expiresIn: "3h"
                        }
                    );
                    return res.status(200).json({
                        message: 'Authentication successful',
                        token: token,
                        id: user._id
                    });
                } else {
                    // wrong password
                    res.status(401).json({
                        message: 'Authentication failed'
                    });
                }
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err.message
            });
        });
};

/**
 * Updates given fields for given user
 * @param req has to contain userId and fields to update in the body
 * 
 * @example JSON -> { "userId":"asd", "field1":"value1", "field2":"value2" }
 */
exports.updateUser = async (req, res, next) => {
    const id = req.params.userId;
    const updateFields = {};
    const validFields = [
        'name',
        'email',
        'admin',
        'address',
        'country',
        'website',
        'phone',
        'sex',
        'password'
    ];

    if (id != req.userData.userId && !req.userData.admin)
        return res.status(501).json({
            error: "Access forbidden"
        });

    for (const [propName, value] of Object.entries(req.body)) {
        if (validFields.includes(propName)) {
            switch (propName) {
                case 'admin':
                    if (req.userData.admin && [true, false].includes(value))
                        updateFields[propName] = value;
                    break;
                case 'sex':
                    if (['male', 'female'].includes(value))
                        updateFields[propName] = value;
                    break;

                case 'password':
                    await bcrypt.hash(req.body.password, 10, (err, hash) => {
                        updateFields[propName] = hash;
                    })
                    break;
                default:
                    updateFields[propName] = value;
            }
        }
    }

    if (req.file) {
        updateFields['image'] = req.file;
    }

    User.update({
            _id: id
        }, {
            $set: updateFields
        })
        .exec()
        .then(result => {
            res.status(200).json({'message': 'successfully updated'});
        })
        .catch(err => {
            res.status(500).json({
                error: err.message
            });
        });
};

/**
 * Delete given user
 * @param req has to contain id in the body
 */
exports.deleteUser = (req, res, next) => {
    const id = req.params.userId;

    if (req.userData.userId != req.params.userId && !req.userData.admin)
        return res.status(401).json({
            message: 'Access denied'
        });

    User.findOne({
            _id: id
        })
        .exec()
        .then(async result => {
            if (!result)
                return res.status(500).json({
                    message: 'User not found'
                });

            if(result.admin)
                return res.status(401).json({message: 'Access denied'});

            if (result.image)
                deleteFile(result.image);
            return User.findOneAndDelete({_id: result._id});
        })
        .then((result) => {
            return res.status(200).json({message: 'succeded'});
        })
        .catch(err => {
            res.status(500).json({
                message: err.message
            })
        });
};

/**
 * Verify email address of given user
 * @param req has to contain token in the body
 */
exports.verifyUser = (req, res, next) => {
    try {
        const token = jwt.verify(req.body.token, env.JWT_KEY);
        User.findById(token.id)
            .exec()
            .then(user => {
                if (user.verifiedEmail) {
                    res.status(500).json({
                        message: 'Email already verified'
                    });
                }
                user.verifiedEmail = true;
                user.save();
                res.status(200).json({
                    message: 'Email successfully verified'
                });
            })
            .catch(err => {
                res.status(500).json({
                    message: err.message
                });
            });
    } catch (err) {
        res.status(500).json({
            message: 'token invalid'
        });
    }
};

/**
 * Resend email verification link
 * @param req has to contain email and id in the body
 */
exports.resendVerification = (req, res, next) => {
    const id = req.body.id;
    const userMail = req.body.email;
    const verifyToken = jwt.sign({
        id: id
    }, env.JWT_KEY, {});

    Email.sendVerification(verifyToken, userMail)
        .then(() => {
            res.status(200).json({
                message: 'Verification successfully resent'
            });
        })
        .catch((err) => {
            res.status(500).json({
                message: err.message
            });
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

    User.findOne({
            email: usermail
        })
        .exec()
        .then((user) => {
            //user gave existing email
            if (user) {
                const token = jwt.sign({
                    id: user._id
                }, env.JWT_KEY, {
                    expiresIn: "1h"
                });
                try{
                    Email.sendResetLink(token, usermail, browser, operatingSystem)
                    res.status(200).json({message:'reset link sent'})
                }catch(err) {
                    res.status(500).json({message: err});
                }
            } else {
                // email is not yet registered
                Email.sendEmailNotRegistered(usermail, browser, operatingSystem)
                    .then(() => {
                        res.status(200).json({
                            message: 'Reset-link sent'
                        });
                    })
                    .catch((err) => {
                        res.status(500).json({
                            message: err.message
                        });
                    });
            }
        })
        .catch((err) => {
            res.status(500).json({
                message: err.message
            });
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
        const decoded = jwt.verify(token, env.JWT_KEY);
        const id = decoded.id;
        User.findById(id).exec()
            .then((user) => {
                if (user) {
                    bcrypt.hash(password, 10, (err, hash) => {
                        if (err) {
                            res.status(500).json({
                                message: err.message
                            });
                        } else {
                            user.password = hash;
                            user.save()
                            res.status(200).json({
                                message: 'password-reset successful'
                            });
                        }
                    });
                } else {
                    res.status(500).json({
                        message: 'no user found'
                    });
                }
            })
            .catch((err) => {
                res.status(500).json({
                    message: err.message
                });
            })
    } catch (err) {
        res.status(500).json({
            message: 'token invalid'
        });
    }
};