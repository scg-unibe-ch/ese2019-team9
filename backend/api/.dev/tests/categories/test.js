const jwt = require('jsonwebtoken');
const app = 'http://localhost:8080/category'
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const request = chai.request(app).keepOpen();
const assert = chai.assert;

describe('Test categories', ()=>{
    let token;
    before(()=>{
        //make a token
        token = jwt.sign({admin:true},"7YpBnfZnS1r0CcxrIRbfA4Jp2zwrdUhd82JBZAEluYip3GA76Fsz8ng/VUNgVCT/");
        //add a testcategory
    });
    after(()=>{

    });
    it('add category', (done)=>{
        request.post('/add')
        .set('Content-Type', 'application/json')
        .set('Authorization', 'Bearer ' + token)
        .send({slug:'üsewiiisch', name:'nogruusig'})
        .attach('image/png',null, 'wein.png')
        .then((res) =>{
            assert.equal(res.status, 200, 'adding should work');
            //check if category is added
            done();
        })
        .catch((err)=>{
            done(err);
        });
    });
    it.skip('add subcategory', (done)=>{

    });
    it('get all categories', (done)=>{
        request.get('/')
        .then((res) =>{
            assert.equal(res.status,200,'should work');
            assert.hasAnyKeys(res.body, ['count','category']);
            done();
        })
        .catch((err) => {
            done(err);
        });
    });
    it('get single category', (done)=>{
        request.get('/' + 'foodbeverage')
        .then((res) =>{
            assert.equal(res.status, 200, 'should work');
            assert.hasAllKeys(res.body, ['count','categories']);
            assert.isAbove(res.body.categories.length, 0, 'should contain more than zero categories');
            for(let i = 0; i < res.body.categories.length; i++){
                assert.equal(res.body.categories[i].slug, 'foodbeverage');
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