const User = require('./buildAndClean.js');
const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
chai.use(chaiHttp);
const app = 'http://localhost:8080/user';
const request = chai.request(app);

describe("Test requests for userId", () =>{
    let user;
    let other;
    before(async()=>{
        try{
            user = await User.loggedInAndVerified();
            other = await User.loggedInAndVerified();
        }catch(err){
            throw new Error('dini mer: ' + err);
        }
        assert.isDefined(user);
        assert.hasAllKeys(user, ['email','token','id','pw']);
        assert.isDefined(other);
        assert.hasAllKeys(other, ['email','token','id','pw']);
        assert.notEqual(user.id, other.id);
        assert.notEqual(user.token, other.token);
    });

    after(()=>{
       User.clean(user.id);
       User.clean(other.id);
    });

   it('getting own data', (done) =>{
       request.get('/' + user.id)
       .set('Authorization', 'Bearer ' + user.token)
       .then((res)=>{
           assert.equal(res.status, 200);
           assert.hasAnyKeys(res.body, 
            ['_v','_id','email','password','verifiedEmail',
            'admin','name','address','country','website',
            'phone','sex','image']);
            assert.isBoolean(res.body.admin);
            assert.isBoolean(res.body.verifiedEmail);
           done();
       })
       .catch((err)=>{
           done(err);
       })
   });
   //should every user be able to see all information?
   it('getting others data', (done)=>{
        request.get('/' + other.id)
        .set('Authorization', 'Bearer ' + user.token)
        .then((res)=>{
            assert.equal(res.status, 200);
            assert.hasAnyKeys(res.body, 
                ['_v','_id','email','password','verifiedEmail',
                'admin','name','address','country','website',
                'phone','sex','image']);
            done();
        })
        .catch((err)=>{
            done(err);
        })
   });
   it.skip('resending email', (done)=>{

   });
   it.skip('forgot password', (done)=>{

   });
   /**
    * can not test this with token generated from email. But should work with session token because the
    * user might want to change password while logged in.
    *    
    */
   it.skip('reset password', (done)=>{
       let newpw = {'token':user.token, 'password':'gengnounsicher'};
       request.patch('/reset')
       .set('Content-Type','application/json')
       .send(newpw)
       .then((res)=>{
           assert.equal(res.status, 200);
           done(err);
       })
       .catch((err) =>{
           done(err);
       });
   });
   it.skip('change fields', (done)=>{

   });
   it.skip('delete account', (done)=>{

   });
   it.skip('delete others account', (done) => {

   });
});