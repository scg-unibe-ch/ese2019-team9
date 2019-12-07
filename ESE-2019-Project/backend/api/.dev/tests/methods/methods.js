const jwt = require('jsonwebtoken');
let privateKey = "7YpBnfZnS1r0CcxrIRbfA4Jp2zwrdUhd82JBZAEluYip3GA76Fsz8ng/VUNgVCT/";
/**
 * @param payload can be undefined or contain a arbitrary json
 * @returns a token containing {admin: true} if payload is undefined or a token containg the payload.
 */
exports.getToken = (payload) => {
    return new Promise((resolve, reject)=>{
        try{
            if(!payload){
                resolve(jwt.sign({admin:true}, privateKey));
            }else{
                resolve(jwt.sign(payload, privateKey));
            }
        }catch(err) {
            reject(err);
        }
    })
}

exports.verifyToken = (token) => {
    return new Promise((reject, resolve) => {
        try{
            let decoded = jwt.verify(token, privateKey);
            resolve(decoded);
        }catch(err){
            reject(err);
        }
    })
}