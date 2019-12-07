const jwt = require('jsonwebtoken');
const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
chai.use(chaiHttp);
const app = 'http://localhost:8080/user';
const notification = 'http://localhost:8080/notification'
const request = chai.request(app);
const notifRequest = chai.request(notification);

describe("Test requests for admin", (done) =>{
    before(()=>{

    });
    after(()=>{

    });
    it.skip('create payment',(done)=>{

    });
    it.skip('execute payment',(done)=>{

    });
});