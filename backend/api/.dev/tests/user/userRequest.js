const User = require('./buildAndClean.js');
const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
chai.use(chaiHttp);
const app = 'http://localhost:8080/user';
const request = chai.request(app);

describe("Test requests for userId", () =>{
    let user;
    before(async()=>{
        try{
            user = await User.loggedInAndVerified();
            
        }catch(err){
            throw new Error('dini mer: ' + err);
        }
    });

    after(()=>{
       User.clean(user.id);
    });

   it.only('getting own data', (done) =>{
      assert.isDefined(user);
      done();
   });
   it('getting others data', (done)=>{

   });
   it('resending email', (done)=>{

   });
   it('forgot password', (done)=>{

   });
   it('reset password', (done)=>{

   });
   it('change fields', (done)=>{

   });
   it('delete account', (done)=>{

   });
   it('delete others account', (done) => {

   });
});