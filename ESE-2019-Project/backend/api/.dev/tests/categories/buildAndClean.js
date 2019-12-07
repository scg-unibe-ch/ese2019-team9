const jwt = require('jsonwebtoken');
const app = 'http://localhost:8080/category'
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const request = chai.request(app);
const assert = chai.assert;
const Helper = require('../methods/methods');

/**
 * Only use after addCategory is tested
 * @returns a testcategory
 */
exports.addCategory = (formdata, token)=>{
    return new Promise((resolve, reject) => {
        request.post('/add')
        .set('authorization', 'Bearer ' + token)
        .send(formdata)
        .then((res)=>{
            if(res.status == 201){
                resolve(res.body.createdCategory);
            }else{
                reject(res.text + ': setup of category failed');
            }    
        })
        .catch((err)=>{
            reject(err);
        });
    });
}

exports.clean = (id, token) => {
    return new Promise ((resolve, reject) => {
        request.delete('/' + id)
        .set('authorization', 'Bearer ' + token)
        .then((res) =>{
            if(res.status == 200)
                resolve();
            else
                reject(res.text);
        }).catch(err=>{
            reject(err);
        });
    });
}