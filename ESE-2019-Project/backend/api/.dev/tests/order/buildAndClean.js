const app = 'http://localhost:8080/order'
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const request = chai.request(app);
const Helper = require('../methods/methods');

exports.placeOrder = (buyer, product) => {
    return new Promise((resolve, reject)=>{
        let start = new Date(2022,12,1);
        let end = new Date(2022,12,7);
        request.post('/place')
        .set('authorization', 'B ' + buyer.token)
        .send({productId: product._id, startDate:start, endDate:end})
        .then((res)=>{
            if(res.status == 200)
                resolve(res.body.order);
            else
                reject('OrderPlacingError: ' + res.text);
        })
        .catch((err) => {
            reject(err);
        });
    });
}