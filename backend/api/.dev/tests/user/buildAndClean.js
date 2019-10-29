const request = require("request");
const dev = 'http://localhost:8080/dev/'

exports.clean = (id) => {
    let del = dev + id;
    request.delete(del, (err,res,body) => {
        return res.statusCode;
    });
};