const jwt = require('jsonwebtoken');
const app = 'http://localhost:8080/category'
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const request = chai.request(app).keepOpen();
const assert = chai.assert;
const Helper = require('../methods/methods');

describe('Test categories', ()=>{
    let token;
    let id;
    let subid;

    before(async ()=>{
        //make admin token
        token = await Helper.getToken();
    });
    it('add category', (done)=>{
        let formdata = {'slug':'testslug','name':'testname','image':'image'};
        request.post('/add')
        .set('Authorization','Bearer ' + token)
        .send(formdata)
        .then((res)=>{
            id = res.body.createdCategory._id;
            assert.equal(res.status, 201);
            assert.isObject(res.body);
            assert.isDefined(res.body.createdCategory._id);
            request.get('/' + 'testslug')
            .then((res) => {
                assert.isDefined(res.body);
                assert.isArray(res.body);
                assert.lengthOf(res.body,1);
                assert.hasAllKeys(res.body[0], ['subcategories','image','parent','_id','name','products']);
                done();
            }).catch((err) =>{
                done(err);
            });
        })
        .catch((err)=>{
            done(err);
        });
    });
    /**
     * this test depends on 'add category' test since, we will need this category to add a subcategory to it. 
     */
    it('add subcategory', (done)=>{
        let subform = {'name':'subtestname','parentId': id, 'image':'subtestimage','parentSlug':'testslug','slug':'subtestslug'};
        request.post('/add')
        .set('authorization', 'B ' + token)
        .send(subform)
        .then((res) => {
            subid = res.body.createdCategory._id;
            assert.equal(res.status, 201, res.body.error);
            assert.isDefined(res.body.createdCategory);
            assert.hasAllKeys(res.body.createdCategory, ['slug','_id','name','parent']);//should probably be parentId or similar
            assert.isDefined(res.body.createdCategory._id);
            assert.equal(res.body.createdCategory.slug, 'subtestslug');

            request.get('/' + 'testslug')
            .then((res) => {
                assert.equal(res.status, 200, 'should get new subcategory');
                assert.isArray(res.body[0].subcategories);
                assert.lengthOf(res.body[0].subcategories, 1);
                let subcat = res.body[0].subcategories[0];
                assert.hasAllKeys(subcat, ['slug','id','_id','name','parent']);
                assert.equal(subcat.name, 'subtestname');
                done();
            }).catch((err) => {
                done(err);
            });
        })
        .catch((err)=>{
            done(err);
        });
    });
    it('get all categories', (done)=>{
        request.get('/')
        .then((res) =>{
            assert.equal(res.status, 200,'should work');
            assert.isArray(res.body);
            done();
        })
        .catch((err) => {
            done(err);
        });
    });
    it('get single category', (done)=>{
        const cat = 'testslug';
        request.get('/' + cat)
        .then((res) =>{
            assert.equal(res.status, 200, res.body.error);
            assert.isArray(res.body);
            assert.hasAllKeys(res.body[0], [
                'name','subcategories','_id','products','parent','image']);
            assert.isArray(res.body[0].subcategories);
            assert.isAbove(res.body.length, 0, 'should contain more than zero categories');
            for(let i = 0; i < res.body.length; i++){
                assert.isObject(res.body[0].subcategories[i]);
            }
            done();
        })
        .catch((err) => {
            done(err);
        });
    });
    it('change category', (done)=>{
        request.patch('/' + id)
        .set('authorization', 'b ' + token)
        .send({
            'name':'newtestslug'
        })
        .then((res) =>{ 
            assert.equal(res.status, 200);

            request.get('/' + 'testslug')
            .then((res)=>{
                assert.equal(res.status, 200);
                assert.equal(res.body[0].name, 'newtestslug');
                done();
            }).catch((err) =>{
                done(err);
            })
        })
        .catch((err) => {
            done(err);
        });
    });
    it('delete subcategory', (done) =>{
        request.delete('/' + subid)
        .set('authorization', 'Bearer ' + token)
        .then((res) =>{
            assert.equal(res.status, 200);
            request.get('/' + 'subtestslug')
            .then((res) =>{
                assert.equal(res.status, 500);
                done();
            }).catch((err) =>{
                done(err);
            })
        }).catch(err=>{
            done(err);
        });
    }); 
    it('delete category', (done)=>{
        request.delete('/' + id)
        .set('authorization', 'Bearer ' + token)
        .then((res) =>{
            assert.equal(res.status, 200);
            done();
        }).catch(err=>{
            done(err);
        });
    });
})