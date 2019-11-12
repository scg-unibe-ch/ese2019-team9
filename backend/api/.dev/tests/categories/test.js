const jwt = require('jsonwebtoken');
const app = 'http://localhost:8080/category'
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const request = chai.request(app).keepOpen();
const assert = chai.assert;
const fs = require('fs');

describe('Test categories', ()=>{
    let token;
    before(()=>{
        //make a token
        token = jwt.sign({admin:true},"7YpBnfZnS1r0CcxrIRbfA4Jp2zwrdUhd82JBZAEluYip3GA76Fsz8ng/VUNgVCT/");
        //add a testcategory
    });
    after(()=>{

    });
    it.skip('add category', (done)=>{
        
    });
    it.skip('add subcategory', (done)=>{

    });
    it('get all categories', (done)=>{
        request.get('/')
        .then((res) =>{
            assert.equal(res.status, 200,'should work');
            assert.isArray(res.body);
            done();
        })
        .catch((err) => {
            done(err);
        });
    });
    it('get single category', (done)=>{
        const cat = 'foodbeverage';
        request.get('/' + cat)
        .then((res) =>{
            assert.equal(res.status, 200, 'should work');
            assert.isArray(res.body);
            assert.hasAllKeys(res.body[0], [
                '_id','name','slug','subcategories','parent','request']);
            assert.isArray(res.body[0].subcategories);
            assert.isObject(res.body[0].request);
            assert.isAbove(res.body.length, 0, 'should contain more than zero categories');
            for(let i = 0; i < res.body.length; i++){
                assert.isObject(res.body[0].subcategories[i]);
            }
            done();
        })
        .catch((err) => {
            done(err);
        });
    });
    it.skip('delete single category',(done)=>{

    });
    it.skip('change category', (done)=>{

    })
})