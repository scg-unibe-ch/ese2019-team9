const nodemailer = require('nodemailer');
const ejs = require('ejs');
const fs = require('fs');

const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "noah.schmid@gym.spiritus.ch", 
      pass: "molnunibe19" 
    }
});

exports.sendVerification = function(token, userEmail){
  return new Promise((resolve, reject)=>{
    const subject = 'MOLN account verification';
    const url = process.env.PUBLIC_DOMAIN + "/verify?token=" + token;
    const placeholders = { tokenPlaceholder:url };
    const template = fs.readFileSync('api/templates/email_verification.html', { encoding:'utf-8' });
    const body = ejs.render(template, placeholders);
    send(body,subject ,userEmail, url).then(()=>{resolve()}).catch(err=>{reject(err);});
  });
}

exports.sendResetLink = function(token, userEmail){
  return new Promise((resolve,reject) => {
    const subject = 'MOLN password reset'
    const url = process.env.PUBLIC_DOMAIN + '/reset?token=' + token;
    const placeholders = {tokenPlaceholder:url };
    const template = fs.readFileSync('api/templates/email_resetLink.html', {encoding: 'utf-8'});
    const body = ejs.render(template, placeholders);
    
    send(body,subject ,userEmail, url).then(()=>{resolve()}).catch(err=>{reject(err);});
  });
}

exports.sendEmailNotRegistered = function(userEmail){
  return new Promise((resolve,reject) => {
    const subject = 'MOLN password reset';
    const url = process.env.PUBLIC_DOMAIN + '/signup'
    const placeholders = {tokenPlaceholder:url };
    const template = fs.readFileSync('api/templates/email_noEmailRegistered.html', {encoding: 'utf-8'});
    const body = ejs.render(template, placeholders);
    
    send(body,subject ,userEmail, url).then(()=>{resolve()}).catch(err=>{reject(err);});
  });
}


function send(body, subject, userEmail, url){
  return new Promise((resolve,reject) =>{
    const mail = {
      from:'no-reply@moln.ch',
      to: userEmail,
      subject: subject,
      text: 'You are not registered. To regisered yet follow this link:' + url,
      html: body
    };
    transport.sendMail(mail).then(()=>{resolve();}).catch((err)=>{reject(err);});
  });
}