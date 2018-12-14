//Requiring Dependencies

// const nodemailer = require('nodemailer');

//Export routes to serves.js
module.exports = function(app) {
  app.get('/', (req, res) => {
    res.render('main');
  });

  // If no matching route is found default to home
  app.get('*', (req, res) => {
    res.render('main');
  });
  // POST route from contact form
  app.post('/send', (req, res) => {
    console.log(req.body);
  });
};
