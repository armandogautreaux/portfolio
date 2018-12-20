//Requiring Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
var path = require('path');

// ---- Ussing Express ---- //
const app = express();

//PORT
var PORT = process.env.PORT || 8080;

//Setting Static Folder to use other local resources
app.use('/public', express.static(path.join(__dirname, 'public')));

//Calling bodyParser to handle incomming data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// --- Using Handlebars ----//
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//Requiring routes:
require('./routing/htmlRoutes')(app);

//Start Server
app.listen(PORT, () => {
  console.log('App listening on PORT: ' + PORT);
});
