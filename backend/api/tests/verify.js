const request = require("request");
const url = "http://localhost:8080/user/";
const assert = require('assert');

describe("Test email verification", () =>{
    let pw = "zimlechUnsicher";
    let loginJson = {"email":  Math.floor(Math.random()*1000000) + "@fs.ch", "password":pw};
    let user = loginJson.email;
    let identification ="";
    let token = "";
    var userJson = {};
    before(()=>{
        return new Promise((resolve) => {
           // sign up random user
            request({
                method: 'POST',
                uri: url + 'signup',
                json: true,
                body: loginJson
            },(error, response, body) => {
                identification = body.createdUser._id;
                userJson = body.createdUser;
                token = body.verificationToken;
                assert.equal(response.statusCode, 201);
                resolve();
            });
        });
    });
    after(() => {
        request.delete(url + userJson._id, (error, response, body) => {
            assert.equal(response.statusCode, 200);
        });
    });
    it("should send statusCode 200", (done) =>{
        request({
            method: 'PATCH',
            uri: url + 'verify',
            json:true,
            body: {"token": token}
        }, (error, response, body)=>{
            assert.equal(response.statusCode, 200);
            done();
        });
    });
    it("should alter the verifiedEmail field of user", (done)=>{
        request({
            method:'GET',
            uri: url + userJson._id,
            headers: {"authorization": 'Bearer ' + token}
        }, (error, response, body) => {
            assert.equal(JSON.parse(body).verifiedEmail, true);
            done();
        });
    });
});