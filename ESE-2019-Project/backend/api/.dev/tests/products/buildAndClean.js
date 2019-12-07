const app = 'http://localhost:8080/product';
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const request = chai.request(app).keepOpen();

exports.addProduct = (subcatslug, token) => {
    return new Promise((resolve,reject) => {
        request.post('/add')
        .type('form')
        .set('Authorization','Bearer ' + token)
        .set('Accept', 'multipart/form-data')
        .attach('image','./api/.dev/tests/products/bug.png', 'bug.png')
        .field('name','autotestproduct')
        .field('categorySlug', subcatslug)
        .field('price','999')
        .field('description', 'if you see this someone is about to get fired')
        .field('location', 'neverland')
        .then((res) => {
           if(res.status == 200){
               resolve(res.body.createdProduct);
           }else{
               reject(res.text);
           }
        })
        .catch((err) => {
            resolve(err);
        })
    });
}

exports.clean = (id, token)=>{
    return new Promise((resolve, reject) => {
        request.delete('/' + id)
        .set('authorization','B ' + token)
        .then((res)=>{
            if(res.status == 200){
                resolve();
            }else{
                reject(res.text);
            }
        })
        .catch((err) =>{
            reject(err);
        })
    });
}