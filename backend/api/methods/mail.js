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

    const url = process.env.PUBLIC_DOMAIN + "/verify?token=" + token;
    const placeholders = { tokenPlaceholder:url };
    const template = fs.readFileSync('api/templates/email_verification.html', { encoding:'utf-8' });
    const body = ejs.render(template, placeholders);
    
    const mail = {
        from:"no-reply@moln.ch",
        to: userEmail,
        subject:"MOLN account email verification",
        text:"Please follow this link to verify your email address: " + token,
        html:body
    };
  
    transport.sendMail(mail, (error, info) => {
        resolve();
    });
  });
}