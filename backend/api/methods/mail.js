const nodemailer = require('nodemailer');
const ejs = require('ejs');
const fs = require('fs');

const transport = nodemailer.createTransport({
	service: process.env.MAIL_SERVICE,
	auth: {
		user: process.env.SUPPORT_MAIL,
		pass: process.env.SUPPORT_MAIL_PW
	}
});

/**
 * Send an email with instructions to verify user email address
 */
exports.sendVerification = (token, userEmail) => {
	return new Promise((resolve, reject) => {
		const url = process.env.PUBLIC_DOMAIN + "/verify?token=" + token;
		const placeholders = {
			actionURL: url
		};
		const templateName = 'email_verification.html';
		const title = 'MOLN account email verification';
		const text = "Thanks for signing up for MOLN! We're excited to have you as an user. " +
					 "Before you can start using our service, we need you to follow the link below " + 
					 "to verify your email address: " + url + " Thanks, the MOLN team";

		try {
			sendEmail(userEmail, placeholders, templateName, title, text);
			resolve("Email sent");
		} catch(err) {
			reject(err);
		}
	});
}

/**
 * Send an email containing a link to reset password
 */
exports.sendResetLink = (token, userEmail, browser, operatingSystem) => {
	return new Promise((resolve, reject) => {
		const url = process.env.PUBLIC_DOMAIN + '/reset?token=' + token;
		const placeholders = {
			actionURL: url,
			supportURL: process.env.SUPPORT_MAIL,
			emailAddress: userEmail,
			browserName: browser,
			operatingSystem: operatingSystem
		};
		const templateName = 'email_resetLink.html';
		const title = 'MOLN password reset';
		const text = "Hello there. You recently requested to reset your password for your MOLN account. " +
			"Use the link below to reset it. This password reset is only valid for the next " +
			"24 hours: " + url + " Thanks, the MOLN team";

		try {
			sendEmail(userEmail, placeholders, templateName, title, text)
			.then((res) => {
				resolve("Email sent");
			})
			.catch((err) => {
				reject(err);
			});
		} catch (err) {
			reject(err);
		}
	});
}

/**
 * Send an email in case the provided email address isn't registered 
 */
exports.sendEmailNotRegistered = (userEmail, browser, operatingSystem) => {
	return new Promise((resolve, reject) => {
		const placeholders = {
			actionURL: process.env.PUBLIC_DOMAIN,
			supportURL: "mailto:" + process.env.SUPPORT_MAIL,
			emailAddress: userEmail,
			browserName: browser,
			operatingSystem: operatingSystem
		};
		const templateName = 'email_noEmailRegistered.html';
		const title = 'MOLN password reset';
		const text = "We received a request to reset the password to access MOLN with your email " +
			"address (" + userEmail + "), but we were unable to find an account associated with this " +
			"address. If you use MOLN and were expecting this email, consider trying to request " +
			"a password reset using the email address associated with your account. " + 
			"Thanks, the MOLN team";

		try {
			sendEmail(userEmail, placeholders, templateName, title, text);
			resolve("Email sent");
		} catch (err) {
			reject(err);
		}
	});
}

/**
 * Fill given template with placeholders and send email to given address
 */
async function sendEmail(userEmail, placeholders, templateName, subject, text){

	const template = fs.readFileSync('api/templates/' + templateName, { encoding: 'utf-8' });
	const body = ejs.render(template, placeholders);

	const mail = {
		from: 'support@moln.ch',
		to: userEmail,
		subject: subject,
		text: text,
		html: body
	};
	await transport.sendMail(mail);
}