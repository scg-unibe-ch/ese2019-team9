const jwt = require('jsonwebtoken');
const app = 'http://localhost:8080/product'
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const request = chai.request(app).keepOpen();
const assert = chai.assert;

describe('Test products', ()=>{
    before(()=>{

    });
    after(()=>{

    });
    it.skip('add product',(done)=>{

    });
    it.skip('update product',(done)=>{

    });
    it('get product', (done) => {
        request.get('/')
        .then((res)=>{
            assert.equal(res.status, 200);
            assert.isArray(res.body);
            assert.hasAllKeys(res.body[0], 
                ['name','_id','category'
                ,'price', 'description', 'location','image',
            'verified','seller', 'rating']);
            assert.isDefined(res.body[0].seller);
            assert.hasAllKeys(res.body[0].seller,[
                '_id','name','email','address',
                'country','website','sex','phone']);
            done();
        })
        .catch((err) => {
            done(err);
        });
    });
});