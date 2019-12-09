const jwt = require('jsonwebtoken');
const fs = require('fs');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = 'http://localhost:8080/review';
const request = chai.request(app);
chai.use(chaiHttp);
const Category = require('../categories/buildAndClean');
const Product = require('../products/buildAndClean');
const User = require('../user/buildAndClean');
const Helper = require('../methods/methods');
const Order = require('../order/buildAndClean');
const assert = chai.assert;

describe('Test Reviews', ()=> {
    let catslug = 'reviewcatslug';
    let subcatslug = 'reviewsubcatslug';
    let cat;
    let subcat;
    let buyer;
    let seller;
    let token;
    let order;
    let review;

    before(async()=>{
        let formdata = {'slug':catslug,'name':'testname','image':'bug.png'};
        try{
            //make user
            buyer = await User.loggedInAndVerified();
            seller = await User.loggedInAndVerified();
            //make admin admintoken with user
            token = await Helper.getToken({admin: true, userId: buyer.id ,_flag:1});
            //add category and subcategory
            cat = await Category.addCategory(formdata, token);

            let subform = {'name':'subtestname','parentId': cat._id, 'image':'subtestimage','parentSlug':catslug,'slug':subcatslug};
            subcat = await Category.addCategory(subform, token);
            assert.isDefined(cat._id);
            assert.isDefined(subcat._id);
            //add product 
            product = await Product.addProduct(subcatslug, seller.token);
            assert.isDefined(product._id);
            //add order(with status paid)

            //order product for user
        }catch(err){
            throw new Error(err + ': setup failed' );
        }
    });
    after(async ()=>{
        try{
            //delete cat and subcat
            await Category.clean(cat._id, token);
            await Category.clean(subcat._id, token);
            //delete product
            await Product.clean(product._id, token)
            //delete user
            await User.clean(buyer.id);
        }catch(err){}
    });
    it('user did not buy product => cannot add review', async () =>{
        let res = await request.post('/add')
                        .set('authorization', 'b ' + buyer.token)
                        .send({productId: product._id, rating: 5, comment:'testcomment'});
        assert.equal(res.status, 500, res.text);
    });
    it('seller => cant review own product',async ()=>{
        let neworder = await Order.placeOrder(buyer, product);
        await Order.accept(neworder, seller.token);
        await Order.paid(neworder, buyer.token);
        let res = await request.post('/add')
                        .set('authorization', 'b ' + seller.token)
                        .send({productId: product._id, rating: 5, comment:'testcomment'});
        assert.equal(res.status, 500, res.text);
    })
    it('buyer => can review bougth product', async ()=>{
        order = await Order.placeOrder(buyer, product);
        await Order.accept(order, seller.token);
        await Order.paid(order, buyer.token);
        let res = await request.post('/add')
                        .set('authorization', 'b ' + buyer.token)
                        .send({productId: product._id, rating: 5, comment:'testcomment'});
        review = res.body.review;
        assert.isDefined(review);
        assert.equal(res.status, 200, res.text);
    });
    it('test updating', async ()=>{
        let newtestcomment = 'newtestcomment';
        let res = await request.patch('/' + product._id).set('authorization', 'b ' + buyer.token).send({comment: newtestcomment});
        assert.equal(res.status, 200);
    });
    it('test deleting', async ()=>{
        let res = await request.delete('/' + review._id).set('authorization', 'B ' + buyer.token);
        assert.equal(res.status, 200, res.text);
        let res2 = await request.post('/add').set('authorization', 'b ' + buyer.token).send({productId:product._id, rating: 5, comment:'testcomment2'});
        review = res2.body.review;
    });
    it('test get all reviews', async ()=>{
        let res = await request.get('/').set('authorization', 'b ' + token);
        assert.equal(res.status, 200);
        assert.isArray(res.body);
    });
    it('user deleted => review not deleted', async ()=>{
        let notDeleted = false;
        await User.clean(buyer._id);
        let res = await request.get('/').set('authorization', 'b ' + token);
        assert.isArray(res.body);
        assert.isAtLeast(res.body.length, 1);
        assert.isDefined(review);
        for(let i = 0; i < res.body.length; i++){
            if(res.body[i]._id == review._id){
                notDeleted = true;
            }
        }
        assert.isTrue(notDeleted);
    });
    it('product deleted => review deleted', async () => {
        let notDeleted = false;
        await User.clean(buyer._id);
        let res = await request.get('/').set('authorization', 'b ' + token);
        res.body.forEach((reviewElement) => {
            if(reviewElement._id == review._id)
                notDeleted == true;
        });
        assert.isFalse(notDeleted);
    });
});