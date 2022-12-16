var express = require('express');
var router = express.Router();
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(`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`)

const msg = {
  to: 'rock.stone951@gmail.com', // Change to your recipient
  from: 'emailomatic99@gmail.com', // Change to your verified sender
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}




router.get('/', function(req, res, next) {
//   res.render('Email', { title: 'Express' });
console.log('request for email')  
sgMail.send(msg)
  .then((response) => {
    
    console.log(response[0].statusCode)
    console.log(response[0].headers)
  })
  .catch((error) => {
    console.error(error.message)
  })
});

module.exports = router;
