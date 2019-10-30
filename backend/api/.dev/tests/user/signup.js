const request = require("request");
const url = "http://localhost:8080/user/";
const assert = require('assert');
const BuildAndClean = require('./buildAndClean.js');
const UserController = require('../../../controllers/user');
const User = require('../../../models/user');
const res = require("http");

describe("Test signup", ()=>{   
    describe("Test signup request", () =>{
        let pw = 'unsicher';
        let wrongmail = 'fs';
        let email = Math.floor(Math.random() * 100000) + '@fs.ch';
        let id;

        after(()=>{
            BuildAndClean.clean(id);
        });
        
        it("normal signup", (done)=>{
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

        it('signup with existing mail',(done) => {
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

        it('signup with invalid mail',(done) => {
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
    });
});