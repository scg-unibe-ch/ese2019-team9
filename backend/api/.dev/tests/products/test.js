const jwt = require('jsonwebtoken');
const fs = require('fs');
const app = 'http://localhost:8080/product';
const catapp = 'http://localhost:8080/category';
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const request = chai.request(app).keepOpen();
const catrequest = chai.request(catapp).keepOpen();
const assert = chai.assert;

describe.only('Test products', ()=>{
    let token;
    let id;
    let catid;
    let subcatid;
    let catslug = 'prodtestslug';
    let subcatslug = 'prodtestsubcatslug'
    before(async()=>{
        let formdata = {'slug':catslug,'name':'testname','image':'image'};
        let subform = {'name':'subtestname','parentId': catid, 'image':'subtestimage','parentSlug':catslug,'slug':subcatslug};
        //make admintoken
        token = jwt.sign({admin:true, userId:'5dbaf977cfc8dc0017c0041b',_flag:1},"7YpBnfZnS1r0CcxrIRbfA4Jp2zwrdUhd82JBZAEluYip3GA76Fsz8ng/VUNgVCT/");
        //make category
        await catrequest.post('/add')
        .set('Authorization','Bearer ' + token)
        .send(formdata)
        .then((res)=>{
            assert.equal(res.status, 201, 'should make category');
            catid = res.body.createdCategory._id;

             //make subcategory
            catrequest.post('/add')
            .set('authorization', 'B ' + token)
            .send(subform)
            .then((res) => {
                assert.equal(res.status, 201, 'should make subcategory');
                subcatid = res.body.createdCategory._id;
            })
            .catch((err)=>{
                throw new Error(err);
            });
        })
        .catch((err)=>{
            throw new Error(err);
        });
    });
    after(()=>{
        //delete category
        catrequest.delete('/' + catid)
        .set('authorization', 'Bearer ' + token)
        .then((res) =>{
            assert.equal(res.status, 200);
        })
        .catch((err) => {
            throw new Error(err);
        })
        //delete subacategory
        catrequest.delete('/' + subcatid)
        .set('authorization', 'Bearer ' + token)
        .then((res) =>{
            assert.equal(res.status, 200);
        })
        .catch((err) =>{
            throw new Error(err);
        })
    });
    it('get product', (done) => {
        request.get('/')
        .then((res)=>{
            assert.equal(res.status, 200);
            assert.isArray(res.body);
            assert.hasAllKeys(res.body[0], 
                ['name','_id','category'
                ,'price', 'description', 'location','image',
            'verified','seller','toRevise', 'rating']);
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
    it('add product',(done)=>{
        request.post('/add')
        .type('form')
        .set('Authorization','Bearer ' + token)
        .set('Accept', 'multipart/form-data')
        .attach('image',fs.readFileSync('./api/.dev/tests/products/bug.png'), 'bug.png')
        .field('name','testproduct')
        .field('categorySlug', subcatslug)
        .field('price','999')
        .field('description', 'if you see this someone is about to get fired')
        .field('location', 'neverland')
        .then((res) => {
            try{
                assert.equal(res.status, 200);
                assert.isObject(res.body);
                assert.isObject(res.body.createdProduct);
                assert.isDefined(res.body.createdProduct._id);
                id=res.body.createdProduct._id;
                done();
            }catch(err){
                done(new Error(res.text));
            }
        })
        .catch((err) => {
            done(err)
        })
    });
    it.skip('uploaded pic', (done)=>{

    })
    it('update product',(done)=>{
        request.patch('/' + id)
        .set('authorization', 'B ' + token)
        .send({name: 'newTestProdName'})
        .then((res) => {
            try{
                assert.equal(res.status, 200, 'should update product');
                request.get('/' + id)
                .set('authorization', 'B ' + token)
                .then((res) => {
                    assert.equal(res.status,200, 'should return updated product');
                    assert.equal(res.body.name, 'newTestProdName');
                    assert.isFalse(res.body.verified);
                    done();
                }).catch((err) =>{
                    done(err);
                });
            }catch(err){
                done(new Error(res.text));
            }
        })
        .catch((err)=>{
            done(err);
        });
    });
    it('update verified flag (true)', (done) => {
        request.patch('/' + id)
        .set('authorization', 'B ' + token)
        .send({verified: true})
        .then((res) => {
            try{
                assert.equal(res.status, 200, 'should update product');
                request.get('/' + id)
                .set('authorization', 'B ' + token)
                .then((res) => {
                    assert.equal(res.status,200, 'should return updated product');
                    assert.equal(res.body.name, 'newTestProdName');
                    assert.isTrue(res.body.verified);
                    done();
                }).catch((err) =>{
                    done(err);
                });
            }catch(err){
                done(new Error(res.text));
            }
        })
        .catch((err)=>{
            done(err);
        });
    });
    it('update revise flag', (done) => {
        request.patch('/' + id)
        .set('authorization', 'B ' + token)
        .send({toRevise: true})
        .then((res) => {
            try{
                assert.equal(res.status, 200, 'should update product');
                request.get('/' + id)
                .set('authorization', 'B ' + token)
                .then((res) => {
                    assert.equal(res.status,200, 'should return updated product');
                    assert.equal(res.body.name, 'newTestProdName');
                    assert.isFalse(res.body.verified);
                    assert.isTrue(res.body.toRevise);
                    done();
                }).catch((err) =>{
                    done(err);
                });
            }catch(err){
                done(new Error(res.text));
            }
        })
        .catch((err)=>{
            done(err);
        });
    })
    it('set revise flag, verified false', (done)=>{
        request.patch('/' + id)
        .set('authorization', 'B ' + token)
        .send({toRevise: true})
        .then((res) => {
            try{
                assert.equal(res.status, 200, 'should update product');
                request.get('/' + id)
                .set('authorization', 'B ' + token)
                .then((res) => {
                    assert.equal(res.status,200, 'should return updated product');
                    assert.isTrue(res.body.toRevise);
                    assert.isFalse(res.body.verified);
                    done();
                }).catch((err) =>{
                    done(err);
                });
            }catch(err){
                done(new Error(res.text));
            }
        })
        .catch((err)=>{
            done(err);
        });
    });
    it('get prod from subcategroy', (done)=>{
        catrequest.get('/' + subcatslug)
        .then((res) => {
            assert.equal(res.status, 200);
            assert.lengthOf(res.body[0].products, 1, 'should contain at least one product')
            assert.equal(res.body[0].products[0].name, 'newTestProdName')
        }).catch((err) => {
            done(err);
        })
        
    });
    it('delete product',(done) =>{
        request.delete('/' + id)
        .set('authorization','B ' + token)
        .then((res)=>{
            assert.equal(res.status, 200);
            done();
        })
        .catch((err) =>{
            done(err);
        })
    });
    it.skip('picture of product also deleted',(done) =>{

    });
    it.skip('unsucessful product addition no picture stored', (done) =>{

    });
});