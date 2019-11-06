const BuildAndClean = require('./buildAndClean.js');
const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
chai.use(chaiHttp);
const app = 'http://localhost:8080/user';
const request = chai.request(app);

describe('Test login', ()=>{

    let id;
    let user;
    let login;
    before(async()=>{
        try{
            const userJson = await BuildAndClean.signup();
            user = userJson;
            id = userJson.id;
            login = {'email':userJson.email, 'password': userJson.pw};
        }catch(err){
            throw new Error('setup failed: ' + err);
        }
    });

    after(()=>{
       BuildAndClean.clean(id);
    });
    
    it('login unverified', (done) =>{
        request.post('/login')
        .set('Content-Type', 'application/json')
        .send(login)
        .then((res) =>{
            try{
                assert.equal(res.status, 307);
                done();
            }catch(err){
                done(err);
            }
        }
        ).catch((err) => {
            throw new Error(err);
        });
    });

    it('login verified', (done) => {
        BuildAndClean.verify(id);
        
        request.post('/login')
        .set('Content-Type', 'application/json')
        .send(login)
        .then((res)=>{
            try{
                assert.equal(res.status, 200);
                assert.containsAllKeys(res.body, ['message','token', 'id']);
                assert.isDefined(res.body.token, 'response has session token');
                assert.isDefined(res.body.id, 'id is defined');
                assert.isString(res.body.id, 'id has to be a String');
                done();
            }catch(err){
                done(err);
            }
        })
        .catch((err)=>{
            done(err);
        })
    });
})