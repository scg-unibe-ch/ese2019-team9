const jwt = require('jsonwebtoken');
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
            throw new Error(err);
        }
        assert.isDefined(user);
        assert.hasAllKeys(user, ['email','token','id','pw']);
        assert.isDefined(other);
        assert.hasAllKeys(other, ['email','token','id','pw']);
        assert.notEqual(user.id, other.id);
        assert.notEqual(user.token, other.token);
    });

    after(async ()=>{
       await User.clean(user.id);
       await User.clean(other.id);
    });

   it('getting own data', (done) =>{
       request.get('/' + user.id)
       .set('Authorization', 'Bearer ' + user.token)
       .then((res)=>{
           assert.equal(res.status, 200);
           assert.hasAnyKeys(res.body, 
            ['email','name','admin','address','country','website',
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
            assert.doesNotHaveAllKeys(res.body, [
                'password','__v','admin','verifiedEmail'
            ])
            done();
        })
        .catch((err)=>{
            done(err);
        })
   });
   /**
    * we cannot test if email is sent and if the generated link works
    */
   it('resending email', (done)=>{
       request.post('/resend')
       .set('Content-Type','application/json')
       .send({'email':user.email,'id':user.id})
       .then((res)=>{
           assert.equal(res.status, 200);
           done();
       })
       .catch((err)=>{
           done(err);
       });
   });
   /**
    * we cannot test if email is sent and if the generated link works
    */
   it('forgot password', (done)=>{
       request.post('/forgot')
       .set('Content-Type','application/json')
       .set('user-agent', 'Mozilla/5.0')
       .send({'email':user.email})
       .then((res) => {
           assert.equal(res.status, 200);
           done();
       })
       .catch((err)=>{
           done(err);
       });
   });
   /**
    * can not test this with token generated from email. But should work with session token because the
    * user might want to change password while logged in.
    *    
    */
   it('reset password', (done)=>{
       let newpw = 'gengnounsicher';
       let token = jwt.sign({id: user.id},"7YpBnfZnS1r0CcxrIRbfA4Jp2zwrdUhd82JBZAEluYip3GA76Fsz8ng/VUNgVCT/", {expiresIn: "1h" });
       request.patch('/reset')
       .set('Content-Type','application/json')
       .send({'token':token, 'password':newpw})
       .then((res)=>{
           assert.equal(res.status, 200);
           request.post('/login')
           .set('Content-Type','application/json')
           .send({'email': user.email, 'password': newpw})
           .then((res)=>{
               assert.equal(res.status,200, 'new password must work');
               done();
           })
           .catch((err)=>{
               done(err)
           });
       })
       .catch((err) =>{
           done(err);
       });
   });
   
   it('change fields', (done)=>{
       request.patch('/' + user.id)
       .set('Content-Type','application/json')
       .set('Authorization','Bearer ' + user.token)
       .send({ 'sex': 'male'})
       .then((res)=>{
           assert.equal(res.status, 200);
           request.get('/' + user.id)
           .set('Authorization','Bearer ' + user.token)
           .then((res1)=>{
               assert.equal(res1.status, 200);
               assert.equal(res1.body.sex, 'male', 'should have updated field');
               done();
           })   
           .catch((err) =>{
               done(err);
           });
       })
       .catch((err) =>{
           done(err);
       });
   });
   it('delete account', (done)=>{
       request.delete('/' + user.id)
       .set('Authorization', 'B ' + user.token)
       .then((res)=>{
           assert.equal(res.status, 200, res.text);
           request.get('/' + user.id)
           .set('Authorization' , 'B ' + user.token)
           .then((res1) => {
               assert.equal(res1.status, 500, 'user should not be found');
               user = User.loggedInAndVerified().then();
               done();
           })
           .catch((err) =>{
               done(err);
           });
       })
       .catch((err)=>{
           done(err);
       });

   }); 

   it('cant patch other', (done)=> {
       request.patch('/' + other.id)
       .set('Authorization', 'B '+ user.token)
       .send({'gender': 'male'})
       .then((res) => {
            assert.equal(res.status, 401, res.text);
            done()
       })
       .catch((err)=>{
           done(err);
       })
    });

   it('delete others account', (done) => {
       request.delete('/' + other.id)
        .set('Authorization', 'Bearer ' + user.token)
        .then((res)=>{
            assert.equal(res.status, 401, 'deletion should not succeed');
            request.get('/' + other.id)
            .set('Authorization' , 'Bearer ' + other.token)
            .then((res1) => {
                assert.equal(res1.status, 200, 'user should be found');
                done();
            })
            .catch((err) =>{
                done(err);
            });
        })
        .catch((err)=>{
            done(err);
        });
   });
});