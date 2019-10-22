const request = require("request");
const url = "http://localhost:8080/user/";
const assert = require('assert');
const BuildAndClean = require('./buildAndClean.js');
    
describe("Test user login", ()=>{
    let loginJson;
    let user;
    let verifyToken;
    var userJson;

    beforeEach(()=>{
        return new Promise((resolve) => {
            BuildAndClean.signUp.then((data)=>{
                loginJson = data.signUpJson;
                verifyToken = data.verifyToken;
                userJson = data.userJson;
                user = loginJson.email;
                resolve();
            });
        });
    });

    after(()=>{
        BuildAndClean.clean(userJson, (statusCode) => {
            assert.equal(statusCode, 200);
        });
    });

    it('log in without verification', function(done) {
        request({
            method: 'POST',
            uri: url + 'login',
            json: true,
            body: loginJson
        }, (error,response,body) => {
            assert.equal(response.statusCode, 401);
            done();
        });
    });
});