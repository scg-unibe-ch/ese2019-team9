const jwt = require('jsonwebtoken');
const User = require('./buildAndClean.js');
const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
chai.use(chaiHttp);
const app = 'http://localhost:8080';
const userRequest = chai.request(app + '/user');
const notifRequest = chai.request(app + '/notification');
const catRequest = chai.request(app + '/category');
const reviewRequest = chai.request(app + '/review')

describe("Test requests for admin", (done) =>{
    let formdata = {'slug':'admintestslug','name':'admintestname','image':'image'};
    let admin={id:'', token:''};
    let user;
    let other;
    let catId;
    before(async ()=>{
        //make normal user
        other = await User.loggedInAndVerified();
        user = await User.loggedInAndVerified();
        //make adminuser (we really only need the token of an adminuser)
        let temp = await jwt.decode(user.token, '7YpBnfZnS1r0CcxrIRbfA4Jp2zwrdUhd82JBZAEluYip3GA76Fsz8ng/VUNgVCT/');
        assert.isDefined(temp.admin);
        temp.admin = true;
        admin.id = user.id;
        admin.token = await jwt.sign(temp, '7YpBnfZnS1r0CcxrIRbfA4Jp2zwrdUhd82JBZAEluYip3GA76Fsz8ng/VUNgVCT/')
        //make other adminuser

    });
    after(()=>{
        User.clean(user.id);
        User.clean(other.id);
    });
    describe("admin", ()=>{
        it('admin => can get list of all users',(done)=>{
            userRequest.get('/')
            .set('Authorization', 'B ' + admin.token)
            .then((res) => {
                assert.equal(res.status, 200);
                assert.isArray(res.body);
                assert.isAtLeast(res.body.length, 1);
                done();
            })
            .catch((err)=>{
                done(err);
            });
        });
        it('admin => can get others data', (done)=>{
            userRequest.get('/' + other.id)
            .set('Authorization', 'B ' + admin.token)
            .then((res) => {
                assert.equal(res.status, 200);
                assert.isObject(res.body);
                assert.isDefined(res.body._id);
                assert.equal(res.body._id, other.id);
                done();
            })
            .catch((err)=>{
                done(err);
            });
        });
        it('admin => cant delete other admin', async ()=>{
            let res = await userRequest.delete('/' + '5de7625f4e6c4300176df79e').set('authorization', admin.token);
            assert.equal(res.status, 401);
        });
        it('admin => can get list of all notifications', (done)=>{
            notifRequest.get('/')
            .set('authorization', 'B ' + admin.token)
            .then((res)=>{
                assert.equal(res.status, 200);
                assert.isArray(res.body);
                assert.isAtLeast(res.body.length, 1);
                done();
            })
            .catch((err) => {
                done(err);
            })
        });
        it('admin => can get list of all reviews', (done)=>{
            reviewRequest.get('/')
            .set('authorization', 'B ' + admin.token)
            .then((res)=>{
                assert.equal(res.status, 200);
                assert.isArray(res.body);
                assert.isAtLeast(res.body.length, 1);
                done();
            })
            .catch((err) => {
                done(err);
            })
        });
        it('admin => can add category', (done)=>{
            catRequest.post('/add')
            .set('authorization' , 'B ' + admin.token)
            .send(formdata)
            .then((res)=>{
                catId = res.body.createdCategory._id;
                assert.equal(res.status, 201);
                done();
            })
            .catch((err) => {
                done(err);
            })
        });
        
        it('admin => can delete category', (done)=>{
            catRequest.delete('/' + catId)
            .set('authorization', 'B ' + admin.token)
            .then((res) => {
                assert.equal(res.status, 200);
                done();
            })
            .catch((err)=> {
                done(err);
            })
        });
    })
    describe("not admin", ()=>{
        it('not admin => cant make himself admin',(done) => {
        userRequest.patch('/' + other.id)
        .set('Authorization', 'B '+ user.token)
        .send({'admin': true})
        .then((res) => {
                assert.equal(res.status, 501);
                done()
        })
        .catch((err)=>{
            done(err);
        })
        })
        it('not admin => cant get list of all users',(done)=>{
            userRequest.get('/')
            .set('Authorization', 'B ' + user.token)
            .then((res) => {
                assert.equal(res.status, 401);
                assert.isObject(res.body);
                assert.isDefined(res.body.message);
                done();
            })
            .catch((err)=>{
                done(err);
            });
        });
        it('not admin => cant get list of all reviews',(done)=>{
            reviewRequest.get('/')
            .set('authorization', 'B ' + user.token)
            .then((res)=>{
                assert.equal(res.status, 401);
                assert.isObject(res.body);
                assert.isDefined(res.body.message);
                done();
            })
            .catch((err) => {
                done(err);
            })
        }); 
    
        it('not admin => cant get list of all notifications', (done)=>{
            notifRequest.get('/')
            .set('authorization', 'B ' + user.token)
            .then((res)=>{
                assert.equal(res.status, 401);
                assert.isObject(res.body);
                assert.isDefined(res.body.message);
                done();
            })
            .catch((err) => {
                done(err);
            })
        });
        
        it('not admin => cant add category', (done)=>{
            catRequest.post('/add')
            .set('authorization' , 'B ' + user.token)
            .send(formdata)
            .then((res)=>{
                assert.equal(res.status, 401);
                done();
            })
            .catch((err) => {
                done(err);
            })
        });
        
        it('not admin => cant update category', async ()=>{
            //make category with admintoken
            let adminres = await catRequest.post('/add').set('authorization', 'B ' + admin.token).send(formdata);
            catId = adminres.body.createdCategory._id;
            assert.equal(adminres.status, 201);

            //test patching with user token
            let newname = 'admintestcat3';
            let userres = await catRequest.patch('/' + catId).set('Authorization', 'B ' + user.token).send({'name': newname});
            assert.equal(userres.status, 401);

            let userres2 = await catRequest.get('/' + formdata.slug).set('authorization', 'B ' + admin.token);
            assert.equal(userres2.status, 500, userres.text);
        });

        it('not admin => cant delete category', async()=>{
            //test deleting with user token
            let userres = await catRequest.delete('/' + catId).set('authorization', 'B ' + user.token);
            assert.equal(userres.status, 401);
            assert.isDefined(userres.body.message);

            // delete with admintoken
            let adminres = await catRequest.delete('/' + catId).set('authorization', 'B ' + admin.token);
            assert.equal(adminres.status, 200);
        });
    })
})