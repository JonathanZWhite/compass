'use strict';

/**
 * Dependencies
 */

var bodyParser = require('body-parser'),
	consolidate = require('consolidate'),
	dust = require('dustjs-linkedin'),
	express = require('express'),
	mongoose = require('mongoose'),
	path = require('path');

var app = express();

/**
 * Express configuration
 */

app.engine('dust', consolidate.dust);

app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'dust');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

/**
 * Controllers
 */

var HomeController = require('./controllers/homeController.js');
var APIController = require('./controllers/apiController.js');

/**
 * Establishes MongoDB connection
 */ 

// TODO create a secrets in config 
var db = mongoose.connect('mongodb://localhost:27017/compass', function(err) {
	if (err) {
		console.error('Could not establish connection with MongoDB');
		console.log(err);
	}
});

/**
 * Main routes
 */

app.get('/', HomeController.index);

/**
 * API routes
 */

 app.get('/api/route1', APIController.route1);
 app.get('/api/route2', APIController.route2);

 /**
 * Starts server 
 */

app.listen(app.get('port'), function() {
	console.log('Express listening to port', app.get('port'));
});

module.exports = app;
