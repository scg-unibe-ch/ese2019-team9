const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        if(req.headers.authorization) {
            const token = req.headers.authorization.split(" ")[1];
            const decoded = jwt.verify(token, process.env.JWT_KEY);
            if(decoded._flag == 1)
                req.userData = decoded;
        } else {
            req.userData = { admin:false, userId:null, email:null };
        }
        next();
    } catch(error) {
        return res.status(500).json({
            error:error.message
        });
    }
};