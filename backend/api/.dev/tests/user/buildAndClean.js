const request = require("request");
const dev = 'http://localhost:8080/dev/'
const url = 'http://localhost:8080/user/'

exports.clean = (id) => {
    let del = dev + id;
    request.delete(del, (err,res,body) => {
        return res.statusCode;
    });
};

exports.signupAndVerify = () => {
    return new Promise((resolve, reject) => {
        //make a user
        let pw = 'unsicher';
        let email = Math.floor(Math.random() * 100000) + '@fs.ch';
        let signup = {'email': email, 'pw': pw};
        let id;
        let login;
        request({
            method: 'POST',
            uri: url +'signup',
            json:true,
            body: signup
        }, (err, res, body) => {
            login = {'email': body.createdUser.email, 'id': body.createdUser.id};
            id = login.id;
            //verify email
            request({
                method: 'PATCH',
                uri: dev + 'verify',
                json: true,
                body: {'id':id}
            }, (err,res,body) => {
                resolve(login)
            });
        });
    });
};