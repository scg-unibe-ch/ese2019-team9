const BuildAndClean = require('./buildAndClean.js');
const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const expect =chai.expect;
chai.use(chaiHttp);
const app = 'http://localhost:8080/dev';
const request = chai.request(app);

describe('Test login', ()=>{
    
    it('login not verified', (done) =>{
        request.get('/').then((res) =>{
            expect(res).to.have.status(200);
            done();
        }
        ).catch((err) => {
            throw new Error(err);
        });
    });
})