const request = require('request');
const dev = 'http://localhost:8080/dev'
const app = 'http://localhost:8080/user'
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const reqUser = chai.request(app).keepOpen();
const reqDev = chai.request(dev).keepOpen();

exports.clean = (id) => {
    return new Promise((resolve, reject) => {
        reqDev.del('/' + id)
        .then((res) =>{
            resolve(res);
        })
        .catch((err) =>{
            reject(err);
        });
    });
}

exports.signup= () => {
    return new Promise((resolve, reject) => {
        //make a user
        let pw = 'unsicher';
        let email = Math.floor(Math.random() * 100000) + '@fs.ch';
        let signup = {'email': email, 'password': pw};
        let id;
        let loginData;
        reqUser.post('/signup')
        .set('Content-Type','application/json')
        .send(signup)
        .then((res)=>{
            let user = {'email':res.body.createdUser.email, 'id': res.body.createdUser._id, 'pw':pw};
            resolve(user);
        }).catch((err) => {
            reject(err);
        });
    });
};

exports.addAdditionalInformation = (user) => {
    return new Promise((resolve,reject) => {
        reqUser.patch('/' + user.id)
       .set('Content-Type','application/json')
       .set('Authorization','Bearer ' + user.token)
       .send({ 'name': 'testname', 'address':'testaddress','country':'testcountry', 'sex':'female'})
       .then((res)=>{
           if(res.status == 200)
                resolve();
            else
                reject(res.text);
       })
       .catch((err) =>{
           reject(err);
       });
    })
}

exports.verify = (id) => {
    return new Promise((resolve, reject) => {
        reqDev.patch('/verify')
        .set('Content-Type', 'application/json')
        .send({'id':id, })
        .then((res) => {
            resolve(res);
        }).catch((err) =>{
            reject(err);
        });

    });
};
/**
 * automatically logs the user in, to preform tests on userrequests.
 */
exports.login = (user)=>{
    return new Promise((resolve, reject) =>{
        reqUser.post('/login')
        .set('Content-Type', 'application/json')
        .send(user)
        .then((res)=>{
            resolve(res.body.token);
        })
        .catch((err)=>{
            reject(err);
        })
    });
};
/**
 * should only be used after a login is tested
 * @param user is a Json containing email and password
 * @example{email:usermail, password:pw, token:usertoken}
 */
exports.loggedInAndVerified = () => {
    return new Promise(async (resolve, reject)=>{
        let user = {'token': ''};
        let id;
        let login;
        let token;
        try{
            user = await this.signup();
            id = user.id;
            login = {'email':user.email, 'password': user.pw};
            await this.verify(id);
            token = await this.login(login);
            user.token = token;
            await this.addAdditionalInformation(user);
            resolve(user);
        }catch(err){
            reject(new Error('User setup failed ' + err));
        }
    });
};