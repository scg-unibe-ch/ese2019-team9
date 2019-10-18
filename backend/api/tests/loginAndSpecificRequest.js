const request = require("request");
const url = "http://localhost:8080/user/";
const assert = require('assert');

describe("Test user login", ()=>{
    let pw = "zimlechUnsicher";
    let emailAndPw = {"email":  Math.floor(Math.random()*1000000) + "@fs.ch", "password":pw};
    let user = emailAndPw.email;
    let identification ="";
    let verifyToken = "";
    let loginToken = "";
    var userJson = {};
    before(()=>{
        return new Promise((resolve) => {
           // sign up random user
            request({
                method: 'POST',
                uri: url + 'signup',
                json: true,
                body: emailAndPw
            },(error, response, body) => {
                identification = body.createdUser._id;
                userJson = body.createdUser;
                verifyToken = body.verificationToken;
                assert.equal(response.statusCode, 201);
                request({//verify the email of randuser
                    method: 'PATCH',
                    uri: url + 'verify',
                    json:true,
                    body: {"token": verifyToken}
                }, (error, response, body)=>{
                    assert.equal(response.statusCode, 200);
                    resolve();
                });
            });
        });
    });

    after(() =>{
        request({
            method: 'DELETE',
            uri: url + userJson._id,
            headers: {'authorization': 'Bearer ' + verifyToken}
        },(error,response,body) =>{
            assert.equal(response.statusCode, 200);
        });
    });
   
    it("log in " + user, function(done) {
        request({
            method: 'POST',
            uri: url + 'login',
            json: true,
            body: emailAndPw
        }, (error,response,body) => {
            assert.equal(response.statusCode, 200);
            done();
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
            assert.equal(JSON.parse(body).email, emailAndPw.email);
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