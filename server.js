var express    = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose');
var app = express()

// Connect to DB
mongoose.connect('mongodb://malbinson:malbinson1@ds119503.mlab.com:19503/albinson');

//set up vars
app.set('view engine','ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

//link to data models
var User = require('./models/user')
var Cat = require('./models/cat')

//save current user here
var currentUser

//import routes from routes/routes.js passing along app
require('./routes/routes')(app);

app.listen(3000, () => {
    console.log('meow')
})
