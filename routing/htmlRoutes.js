//Requiring Dependencies

const nodemailer = require('nodemailer');
var dotenv = require('dotenv');
dotenv.config();

const { EMAIL_USER, EMAIL_PASS, EMAIL_SEND } = process.env;

//Export routes to serves.js
module.exports = function(app) {
  app.get('/', (req, res) => {
    res.render('index');
  });

  app.get('/about', (req, res) => {
    res.render('about');
  });
  app.get('/portfolio', (req, res) => {
    res.render('portfolio');
  });
  app.get('/contact', (req, res) => {
    res.render('contact');
  });
  // If no matching route is found default to home
  app.get('*', (req, res) => {
    res.render('index');
  });
  // POST route from contact form
  app.post('/send', (req, res) => {
    const output = `
<p>You have a new contact request</p>
<h3>Contact details</h3>
<ul>
<li>Name: ${req.body.name}</li>
<li>Email: ${req.body.email}</li>
<li>Message: ${req.body.subject}</li>
</ul>
<h3>Message</h3>
<p>${req.body.message}</p>
`;

    // create reusable transporter object using the default SMTP transport

    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS
      }
    });

    // setup email data with unicode symbols
    let mailOptions = {
      from: EMAIL_USER, // sender address
      to: EMAIL_SEND, // list of receivers
      subject: 'New Contact Request from your website', // Subject line
      text: 'Hello world?', // plain text body
      html: output // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      const newContact = {
        name: req.body.name
      };
      console.log('Message sent: %s', info.messageId);
      // Preview only available when sending through an Ethereal account
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
      // res.render('main', { msg: `Email has been sent` });
      res.send(newContact);
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });
  });
};
