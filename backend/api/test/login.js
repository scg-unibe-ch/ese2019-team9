const request = require("request");
const url = "http://localhost:8080/user/";
const assert = require('assert');
const jwt = require('jsonwebtoken');

describe("Test user login", ()=>{
    let pw = "zimlechUnsicher";
    let loginJson = {"email":  Math.floor(Math.random()*1000000) + "@fs.ch", "password":pw};
    let user = loginJson.email;
    let identification ="";
    let token = "";
    var userJson = {};
    before(()=>{
        return new Promise((resolve) => {
            request({
                method: 'POST',
                uri: url + 'signup',
                json: true,
                body: loginJson
            },(error, response, body) => {
                identification = body.createdUser._id;
                userJson = body.createdUser;
                assert.equal(response.statusCode, 201);
                resolve();
            });
        });
    });

    after(() =>{
        request.delete(url + userJson._id, (error, response, body) => {
            assert.equal(response.statusCode, 200);
        });
    });
   
    it("should log in " + user, function(done) {
        request({
            method: 'POST',
            uri: url + 'login',
            json: true,
            body: loginJson
        }, (error,response,body, done) => {
            assert.equal(response.statusCode, 200);
        })
        .then(done());
    });
});