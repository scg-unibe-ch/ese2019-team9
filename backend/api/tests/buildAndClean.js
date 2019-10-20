const request = require("request");
const url = "http://localhost:8080/user/";
const dev = 'http://localhost:8080/dev/';

exports.signUp = new Promise((resolve, reject) => {
    let pw = "zimlechUnsicher";
    let loginJson = {"email":  name() + "@fs.ch", "password":pw};
    let verifyToken;
    var userJson;
    // sign up random user
    request({
        method: 'POST',
        uri: url + 'signup',
        json: true,
        body: loginJson
    },(error, response, body) => {
        userJson = body.createdUser;
        verifyToken = body.verificationToken;
        resolve({'pw':pw, 'signUpJson':loginJson, 'verifyToken':verifyToken, 'userJson':userJson});
    });
});

 //verify email of testuser, only use after the verification process is tested (in './verify.js')
exports.verify = function(verifyToken)  { 
    return new Promise((resolve, reject) => {
        request({
            method: 'PATCH',
            uri: url + 'verify',
            json: true,
            body: { "token": verifyToken }
        }, (error, response, body) => {
            resolve(response.statusCode);
        });
    });
}

exports.login = function(loginJson) {
    return new Promise((resolve, reject ) => {
        request({
            method: 'POST',
            uri: url + 'login',
            json: true,
            body: loginJson
        }, (error, response, body)=>{
            console.log(body.token);
            resolve(body.token);
        });
    });
}

exports.clean = (userJson) => {
    request({
        method: 'DELETE',
        uri: dev + userJson._id,
    },(error,response,body) =>{
        assert.equal(response.statusCode, 200);
    });
}

function name(){
    return Math.floor(Math.random() * 1000000);
}