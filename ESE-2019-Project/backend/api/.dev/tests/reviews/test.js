const jwt = require('jsonwebtoken');
const fs = require('fs');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = 'http://localhost:8080';
chai.use(chaiHttp);
const Category = require('../categories/buildAndClean');
const Product = require('../products/buildAndClean');
const User = require('../user/buildAndClean');
const Helper = require('../methods/methods');

const assert = chai.assert;

describe('Test Reviews', ()=> {
    let catslug = 'reviewcatslug';
    let subcatslug = 'reviewsubcatslug';
    let cat;
    let subcat;
    let user;
    let token;

    before(async()=>{
        let formdata = {'slug':catslug,'name':'testname','image':'bug.png'};
        try{
            //make user
            user = await User.loggedInAndVerified();
            //make admin admintoken with user
            token = await Helper.getToken({admin: true, userId: user.id ,_flag:1});
            //add category and subcategory
            cat = await Category.addCategory(formdata, token);

            let subform = {'name':'subtestname','parentId': cat._id, 'image':'subtestimage','parentSlug':catslug,'slug':subcatslug};
            subcat = await Category.addCategory(subform, token);
            assert.isDefined(cat._id);
            assert.isDefined(subcat._id);
            //add product 
            product = await Product.addProduct(subcatslug, token);
            assert.isDefined(product._id);
            //add order(with status paid)
            //order product for user
        }catch(err){
            throw new Error(err + ': setup failed' );
        }
    })
    after(async ()=>{
        try{
            //delete cat and subcat
            await Category.clean(cat._id, token);
            await Category.clean(subcat._id, token);
            //delete product
            await Product.clean(product._id, token)
            //delete user
            await User.clean(user.id);
            //delete order
            //delete reviews
        }catch(err){}
    })
    it('test adding', (done)=>{
        done();
    });
    it.skip('test updating', (done)=>{

    });
    it.skip('test deleteing', (done)=>{

    });
    it.skip('test get all reviews', (done)=>{
        
    });
});