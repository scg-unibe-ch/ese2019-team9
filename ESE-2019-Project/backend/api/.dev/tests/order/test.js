const jwt = require('jsonwebtoken');
const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
chai.use(chaiHttp);
const app = 'http://localhost:8080/order';
const request = chai.request(app);
const Category = require('../categories/buildAndClean');
const Product = require('../products/buildAndClean');
const User = require('../user/buildAndClean');
const Helper = require('../methods/methods');

describe("Test order", (done) =>{
    let seller;
    let buyer;
    let admintoken;
    let cat;
    let subcat;
    let product;
    let catslug = 'ordertestcatslug';
    let subcatslug = 'ordertestsubcatslug';
    before(async ()=>{
        let formdata = {'slug':catslug,'name':'ordertestname','image':'bug.png'};
        let subform = {'name':'subtestname','parentId': '', 'image':'subtestimage','parentSlug':catslug,'slug':subcatslug};
        try{
            //make seller and buyer
            seller = await User.loggedInAndVerified();
            buyer = await User.loggedInAndVerified();
            //make admintoken for category
            admintoken = await Helper.getToken({admin: true, userId: seller.id ,_flag:1});
            //add category and subcategory
            cat = await Category.addCategory(formdata, admintoken);
            subform.parentId = cat._id;
            subcat = await Category.addCategory(subform, admintoken);
            //add product in testsubcategory
            product = await Product.addProduct(subcatslug, seller.token);
            
        }catch(err){
            throw new Error("Setup failed: " + err);
        }
        assert.isDefined(seller, 'Setup failed');
        assert.isDefined(buyer, 'Setup failed');
        assert.isDefined(cat, 'category should be added');
        assert.isDefined(subcat, 'subcategory should be added');
        assert.isDefined(product._id, 'product should be added');
        
    });

    after(async ()=>{
        try{
            await Product.clean(product._id, admintoken);
            await Category.clean(cat._id, admintoken);
            await Category.clean(subcat._id, admintoken);
            await User.clean(seller.id);
            await User.clean(buyer.id);
        }catch(err){
            console.log('CleanupError: ' + err)
        }
    });

    it.skip('place order', async ()=>{
        let start = new Date(2022,12,1);
        let end = new Date(2022,12,7);
        let res = await request.post('/place')
                        .set('authorization', 'B ' + buyer.token)
                        .send({productId: product._id, startDate:start, endDate:end});
        assert.equal(res.status, 200, res.text);
        done();
    }); 
    
    it.skip('get order by id', (done)=>{
        
    });
    
    it.skip('get order by user', (done)=>{

    });
    
    it.skip('get order by buyer', (done) =>{

    });
    
    it.skip('accept order', (done)=>{

    });
    
    it.skip('reject order', (done) =>{

    });

    it.skip('send message on order', (done)=>{

    });
    it.skip('user deleted => order deleted',()=>{

    });
    it.skip('insufficient userdata', ()=>{

    });
    it.skip('test notification both users', ()=>{

    });
    it.skip('product delete => order deleted', ()=> {

    });
});