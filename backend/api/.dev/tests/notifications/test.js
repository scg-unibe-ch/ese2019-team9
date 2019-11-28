const jwt = require('jsonwebtoken');
const app = 'http://localhost:8080/notification'
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const request = chai.request(app).keepOpen();
const assert = chai.assert;
const userAction = require('../user/buildAndClean');

describe('Test Notifications', () => {
    let adminToken;
    let notifId;
    let user;
    before(async()=>{
       try{
           user = await userAction.loggedInAndVerified();
           adminToken = jwt.sign({admin: true, userId: '5dbaf977cfc8dc0017c0041b'},"7YpBnfZnS1r0CcxrIRbfA4Jp2zwrdUhd82JBZAEluYip3GA76Fsz8ng/VUNgVCT/");
           assert.isDefined(user);
       }catch(err){
           throw new Error('setup failed: ' + err);
       }
    });
    after(()=>{
        userAction.clean(user.id);
    });
    it('send notification', (done)=> {
        const body = {'link': 'test.ch', message: 'test aber itz outomatisch'};
        request.post('/' + user.id)
        .set('Authorization', 'B ' + user.token)
        .send(body)
        .then((res) =>{
            assert.equal(res.status, 201);
            assert.exists(res.body);
            assert.exists(res.body.notification);
            notifId = res.body.notification._id;
            done();
        })
        .catch((err) => {
            done(err);
        })
    });
    it('get added notification by user', (done) => {
        request.get('/user/')
        .set('Authorization', 'b ' + user.token)
        .then((res) => {
            assert.equal(res.status, 200);
            assert.isArray(res.body);
            assert.equal(res.body[0].text, 'test aber itz outomatisch');
            done();
        })
        .catch((err) => {
            done(err);
        })
    });
    it('read notification', (done)=>{
        request.patch('/user')
        .set('authorization' , 'b ' + user.token)
        .then((res) => {
            assert.equal(res.status, 200);
            request.get('/user')
            .set('authorization', 'b ' + user.token)
            .then((res) => {
                assert.equal(res.status, 200);
                assert.isTrue(res.body[0].read);
                done();
            })
            .catch((err) => {
                done(err);
            });
        })
        .catch((err) => {
            done(err);
        });
    });
    it('get all notifications', (done) => {
        request.get('/')
        .set('authorization', 'b ' + adminToken)
        .then((res) => {
            assert.equal(res.status, 200),
            assert.isArray(res.body);
            done();
        })
        .catch((err) => {
            done(err);
        });
    });
    it('delete notification', (done) => {
        request.delete('/' + notifId)
        .set('authorization', 'b ' + user.token)
        .then((res) => {
            assert.equal(res.status, 200);
            request.get('/user')
            .set('Authorization', 'b ' + user.token)
            .then((res1)=>{
                assert.equal(res1.status, 200, 'should not get empty array');
                assert.isArray(res1.body);
                assert.isAtMost(res1.body.length, 0);
                done();
            })
            .catch((err)=>{
                done(err);
            });
        })
        .catch((err) => {
            done(err);
        });
    });
    it('add notifications and delete by uId',(done)=>{
        let requests = [];
        for(let i =0; i < 5; i++){
            requests.push(
                request.post('/' + user.id)
                .set('authorization', 'b ' + user.token)
                .send({'link':'test.ch','message':'hoi hoi'})
            );
        }
        Promise.all(requests)
        .then((res) => {
            request.delete('/user')
            .set('authorization', 'b ' + user.token)
            .then((res1)=>{
                assert.equal(res1.status,200);
                request.get('/user')
                .set('authorization', 'b ' + token)
                .then((res2)=>{
                    assert.equal(res2.status, 200);
                    assert.isAtMost(res2.body.length, 0);
                })
                .catch((err) => {
                    done(err);
                });
            })
            .catch((err) => {
                done();
            });
        })
        .catch((err)=>{
            done(err);
        });
    });
});