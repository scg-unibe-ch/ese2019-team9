const jwt = require('jsonwebtoken');
const fs = require('fs');
const app = 'http://localhost:8080/product';
const catapp = 'http://localhost:8080/category';
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const request = chai.request(app).keepOpen();
const picRequest = chai.request('http://d3t3rm1n4nt3.bplaced.net/fileStorage');
const catrequest = chai.request(catapp).keepOpen();
const Category = require('../categories/buildAndClean');
const Helper = require('../methods/methods');
const assert = chai.assert;

describe('Test products', ()=>{
    let token;
    let id;
    let catid;
    let subcatid;
    let catslug = 'prodslug';
    let subcatslug = 'prodsubcatslug';
    let product;

    before(async()=>{
        let formdata = {'slug':catslug,'name':'testname','image':'bug.png'};
        let subform = {'name':'subtestname','parentId': catid, 'image':'subtestimage','parentSlug':catslug,'slug':subcatslug};
        //make admintoken
        token = await Helper.getToken({admin: true, userId:'5ddeac29e616240017d309b2',_flag:1});
        try{
            //make category
            let cat = await Category.addCategory(formdata, token);
            assert.isDefined(cat);
            catid = cat._id;
            //make subcategory
            let subcat= await Category.addCategory(subform, token);
            subcatid = subcat._id;
        }catch(err){
            throw new Error(err);
        }
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
            assert.equal(res.status, 200, res.text);
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
                ['name','_id','category', 'date'
                ,'price', 'description', 'location','image',
            'verified','seller','toRevise', 'rating']);
            assert.isDefined(res.body[0].seller);
            assert.hasAnyKeys(res.body[0].seller,[
                '_id','name','email','address',
                'country','image','website','sex','phone']);
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
        .attach('image','./api/.dev/tests/products/bug.png', 'bug.png')
        .field('name','testproduct')
        .field('categorySlug', subcatslug)
        .field('price','999')
        .field('description', 'if you see this someone is about to get fired')
        .field('location', 'neverland')
        .then((res) => {
            product = res.body.createdProduct;
            assert.equal(res.status, 200, res.text);
            assert.isObject(res.body);
            assert.isObject(res.body.createdProduct);
            assert.isDefined(res.body.createdProduct._id);
            id=res.body.createdProduct._id;
            done();
        })
        .catch((err) => {
            done(err)
        })
    });
    it('uploaded pic', async ()=>{
        let picreq = await picRequest.get('/' + product.image);
        assert.equal(picreq.status, 200);
    })
    it('update product',(done)=>{
        request.patch('/' + id)
        .set('authorization', 'B ' + token)
        .send({name: 'newTestProdName'})
        .then((res) => {
            assert.equal(res.status, 200, res.text);
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
            assert.equal(res.status, 200, res.text);
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
            assert.equal(res.status, 200, res.text);
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
            assert.equal(res.status, 200, res.text);
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
        })
        .catch((err)=>{
            done(err);
        });
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
});