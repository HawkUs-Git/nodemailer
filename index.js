const nodemailer = require('nodemailer');


let mailTransporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'Your Email',
		pass: 'Your Emails password'
	}
});
let i;
for(i = 0;i < 1242;i++){
    let mailDetails = {
	from: 'Your emil',
	to: 'target Email',
	subject: 'Test',
	text: 'I LOVE NODE.JS!!!'
};

mailTransporter.sendMail(mailDetails, function(err, data) {
	if(err) {
		console.log('Error Occurs')
	} else {
		console.log('Email sent successfully');
	}
});}
