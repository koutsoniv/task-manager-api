const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
	sgMail.send({
		to: email,
		from: 'koutsoniv@gmail.com',
		subject: 'Welcome to the app',
		text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
	})
}

const sendDeleteAccountEmail = (email, name) => {
	sgMail.send({
		to: email,
		from: 'koutsoniv@gmail.com',
		subject: 'Account Deleted',
		text: `Goodbye ${name}, hope to see you again soon! `
	})
}

module.exports = {
	sendWelcomeEmail,
	sendDeleteAccountEmail
}
