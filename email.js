var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'anilkumaratb@gmail.com',
    pass: 'anil26453'
  }
});

var mailOptions = {
  from: 'anilkumaratb@gmail.com',
  to: 'anil.d26453@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});