const request = require("request");
const url = "http://localhost:8080/user/";
const assert = require('assert');
const BuildAndClean = require('./buildAndClean.js');

describe("Test requests for userId", () =>{
    let loginJson;
    let verifyToken;
    let userJson;

    beforeEach(()=>{
        return new Promise((resolve) => {
            BuildAndClean.signUp.then((data)=>{
                loginJson = data.signUpJson;
                verifyToken = data.verifyToken;
                userJson = data.userJson;
                console.log(loginJson);
                resolve();
            });
        });
    });
     it("request own userid", (done)=>{
        let auth = 'Bearer ' + verifyToken;
        request({
            method: 'GET',
            uri: url + userJson._id,
            headers: {'authorization': auth}
        }, (error, response, body)=>{
            assert.equal(response.statusCode, 200);
            assert.equal(JSON.parse(body).email, userJson.email);
            done();
        });
    });
    it("not able to request other userid",(done)=>{
        let auth = 'Bearer ' + verifyToken;
        request({
            method: 'GET',
            uri: url + userJson._id,
            headers: {'authorization': auth}
        }, (error, response, body)=>{
            assert.equal(response.statusCode, 403);
            assert.equal(JSON.parse(body).email, emailAndPw.email);
            done();
        });
    });
});