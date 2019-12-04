const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        
        if(decoded._flag != 1)
            return res.status(401).json({
                message:'Authentication failed'
            });
        req.userData = decoded;
        req.userData.loginToken = token;
        next();
    } catch(error) {
        return res.status(401).json({
            message:'Authentication failed'
        });
    }
};
