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
const Order = require('./buildAndClean');
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
    let orderId;

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
            after();
            throw new Error("Setup failed: " + err);
        }
        assert.isDefined(seller, 'Setup failed');
        assert.isDefined(buyer, 'Setup failed');
        assert.isDefined(cat._id, 'category should be added');
        assert.isDefined(subcat._id, 'subcategory should be added');
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

    it('place order', async ()=>{
        let start = new Date(2022,12,1);
        let end = new Date(2022,12,7);
        let res = await request.post('/place')
                        .set('authorization', 'B ' + buyer.token)
                        .send({productId: product._id, startDate:start, endDate:end});
        assert.equal(res.status, 200, res.text);
        assert.isDefined(res.body.order);
        assert.isDefined(res.body.order._id);
        orderId = res.body.order._id;
    }); 
    
    it('get order by id', async()=>{
        let resBuyer = await request.get('/id/' + orderId).set('authorization', 'B ' + buyer.token);
        let resSeller = await request.get('/id/' + orderId).set('authorization', 'B ' + seller.token);
        assert.equal(resBuyer.status, 200);
        assert.equal(resSeller.status, 200);
        assert.equal(resSeller.body._id, resBuyer.body._id);
    });
    
    it('get order by seller', async()=>{
        let resSeller = await request.get('/seller').set('authorization', 'B ' + seller.token);
        assert.equal(resSeller.status, 200);
    });
    
    it('get order by buyer', async () =>{
        let resBuyer = await request.get('/buyer').set('Authorization', 'B ' + buyer.token);
        assert.equal(resBuyer.status, 200);
    });

    it('seller => cant get order by buyer', async () =>{
        let resSeller = await request.get('/buyer').set('Authorization', 'B ' + seller.token);
        assert.equal(resSeller.status, 200);
        assert.isEmpty(resSeller.body);
    });

    it('buyer => cant get order by seller', async () =>{
        let resBuyer = await request.get('/buyer').set('Authorization', 'B ' + seller.token);
        assert.equal(resBuyer.status, 200);
        assert.isEmpty(resBuyer.body);
    });
    
    it('seller => accept order', async ()=>{
        //accept order
        let res = await request.patch('/accept').set('authorization', 'B ' + seller.token).send({orderId: orderId});
        assert.equal(res.status, 200);
        //check by getter
        let getter = await request.get('/id/' + orderId).set('authorization' , 'B ' + seller.token);
        assert.equal(getter.status, 200);
        assert.equal(getter.body.status, 'accepted');
    });
    
    it('seller => reject order', async () =>{
        //make new order
        let neworder = await Order.placeOrder(buyer, product);
        assert.isDefined(neworder._id);
        //reject that order
        let res = await request.patch('/reject').set('authorization', 'B ' + seller.token).send({orderId:neworder._id});
        assert.equal(res.status, 200);
        let getter = await request.get('/id/' + neworder._id).set('authorization' , 'B ' + seller.token);
        assert.equal(getter.status, 200);
        assert.equal(getter.body.status, 'rejected');
    });

    it('buyer => cant accept order', async ()=> {
        let neworder = await Order.placeOrder(buyer, product);
        let res = await request.patch('/accept').set('authorization', 'B ' + buyer.token).send({orderId: neworder._id});
        assert.equal(res.status, 500);
        //check by getter
        let getter = await request.get('/id/' + neworder._id).set('authorization' , 'B ' + seller.token);
        assert.equal(getter.status, 200);
        assert.equal(getter.body.status, 'pending');
    });

    it('buyer => cant reject order', async ()=> {
        let neworder = await Order.placeOrder(buyer, product);
        let res = await request.patch('/reject').set('authorization', 'B ' + buyer.token).send({orderId: neworder._id});
        assert.equal(res.status, 500);
        //check by getter
        let getter = await request.get('/id/' + neworder._id).set('authorization' , 'B ' + seller.token);
        assert.equal(getter.status, 200);
        assert.equal(getter.body.status, 'pending');
    });
    it('buyer => send message on order', async ()=>{
        let message = 'testbuyerrmessage';
        let res = await request.post('/message/send').set('authorization', 'B ' + buyer.token).send({orderId: orderId, message:message});
        assert.equal(res.status, 200);
        let getter = await request.get('/id/' + orderId).set('authorization' , 'B ' + buyer.token);
        assert.equal(getter.status, 200);
        assert.equal(getter.body.chat[2].message, message);
    });
    it('seller => send message on order', async()=>{
        let message = 'testsellermessage';
        let res = await request.post('/message/send').set('authorization', 'B ' + seller.token).send({orderId: orderId, message:message});
        assert.equal(res.status, 200);
        let getter = await request.get('/id/' + orderId).set('authorization' , 'B ' + seller.token);
        assert.equal(getter.status, 200);
        assert.equal(getter.body.chat[3].message, message);
    });

    it('user deleted => order deleted',async ()=>{
        //make new seller
        let newbuyer = await User.loggedInAndVerified();
        //make order
        let neworder = await Order.placeOrder(newbuyer, product);
        //delete user
        await User.clean(newbuyer._id);
        //check if order deleted
        let res = await request.get('/id/' + neworder._id).set('authorization', 'B ' + seller.token);
        assert.equal(res.status, 200);
        assert.isEmpty(res.body);
    });

    it('product delete => order deleted', async ()=> {
         //make new product
         let newproduct = await Product.addProduct(subcatslug, seller.token);
         //make order
         let neworder = await Order.placeOrder(buyer, newproduct);
         //delete user
         await Product.clean(newproduct._id, seller.token);
         //check if order deleted
         let res = await request.get('/id/' + neworder._id).set('authorization', 'B ' + seller.token);
         assert.equal(res.status, 500, res.text);
         assert.isEmpty(res.body);
    });
});