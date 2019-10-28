const request = require("request");
const url = "http://localhost:8080/user/";
const dev = 'http://localhost:8080/dev/';
const assert = require('assert');
const BuildAndClean = require('./buildAndClean.js');
    
describe("Test Login", () =>{
    let pw = 'unsicher';
    let wrongmail = 'fs';
    let email = Math.floor(Math.random() * 100000) + '@fs.ch';
    let id;
    
    it("normal login", (done)=>{
        let loginJson = {'email': email, 'password': pw};
        request({
            method: 'POST',
            uri: url + 'signup',
            json: true,
            body: loginJson
        },
        (err, res, body)=>{
            assert.equal(res.statusCode, 201);
            id = body.createdUser._id;
            done();
        });
    });

    it('login with existing mail',(done) => {
        let loginJson = {'email': email, 'password': pw}
        request({
            method: 'POST',
            uri: url + 'signup',
            json: true,
            body: loginJson
        },
        (err, res, body)=>{
            assert.equal(res.statusCode, 409);
            assert.equal(body.message, 'User with same email already exists')
            done();
        });
    });

    it('login with invalid mail',(done) => {
        let loginJson = {'email': wrongmail, 'password': pw}
        request({
            method: 'POST',
            uri: url + 'signup',
            json: true,
            body: loginJson
        },
        (err, res, body)=>{
            assert.equal(res.statusCode, 500);
            done();
        });
    });
    after(()=>{
        request({
            method: 'DELETE',
            uri: dev + id
        },
        (err, res, body) =>{
            assert.equal(res.statusCode, 200);
        })
    });
});