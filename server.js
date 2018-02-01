var express = require('express'),
  	app = express(),
  	port = process.env.PORT || 3001,
  	mongoose = require('mongoose'),
 	Dates = require('./api/models/dateModel'),
  	bodyParser = require('body-parser'),
  	session = require('express-session'),
	cors = require('cors');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/mess-up-timer'); 


app.use(bodyParser.json());
app.use(session({
  secret: 'work hard',
  resave: true,
  saveUninitialized: false
}));
app.use(cors());

var dateRoutes = require('./api/routes/dateRoutes.js');
dateRoutes(app);


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);