const request = require('request');
const dev = 'http://localhost:8080/dev/'
const app = 'http://localhost:8080/user'
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const requestUser = chai.request(app).keepOpen();
const requestDev = chai.request(dev).keepOpen();

exports.clean = (id) => {
    let del = dev + id;
    request.delete(del, (err,res,body) => {
        return res.statusCode;
    });
};

exports.cleanWithChai = (id) => {
    let del = dev + id;
    req
}

exports.signupAndVerify = async function (){
    return new Promise((resolve, reject) => {
        //make a user
        let pw = 'unsicher';
        let email = Math.floor(Math.random() * 100000) + '@fs.ch';
        let signup = {'email': email, 'pw': pw};
        let id;
        let loginData;
        requestUser.post('signup')
        .set('Content-Type','application/json')
        .send(signup)
        .then((res)=>{
            //verify user
            //and resolve
        }).catch((err) => {
            reject(err);
        });
    });
};