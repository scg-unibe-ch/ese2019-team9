const request = require("request");
const url = "http://localhost:8080/user/asdf";
const assert = require('assert');
describe("Test /", function(){
    describe("GET", function(){
        it("returns status code 200", function(done){
            request.get(url, function(error, response, body){
                assert.equal(200, response.statusCode);
                done();
            });
        });
        it("returns content-type json", (done) => {
            request.get(url, function(error, response, body){
                assert.equal("application/json; charset=utf-8", response.headers["content-type"]);
                done();
            });
        })
    });
});