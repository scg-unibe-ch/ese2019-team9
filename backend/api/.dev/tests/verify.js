const request = require("request");
const BuildAndClean = require('./buildAndClean.js');
const url = "http://localhost:8080/user/";
const assert = require('assert');

describe("Test email verification", () =>{
    let loginJson;
    let token;
    var userJson;

    beforeEach(()=>{
       return new Promise((resolve) => {
        BuildAndClean.signUp.then((data)=>{
            loginJson = data.signUpJson;
            token = data.verifyToken;
            userJson = data.userJson;
            resolve();
        });
       });
    });

    after(()=>{
        BuildAndClean.clean(userJson, (statusCode) => {
            assert.equal(statusCode, 200);
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