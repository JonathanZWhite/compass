'use strict';

/**
 * Dependencies
 */

var bodyParser = require('body-parser'),
	express = require('express'),
	mongoose = require('mongoose'),
	path = require('path');

var app = express();

/**
 * Express configuration
 */

app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

/**
 * Controllers
 */

var ArticleController = require('./controllers/ArticleController');

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
 * API routes
 */

 app.get('/api/article-create', ArticleController.create);
 app.get('/api/article-read', ArticleController.read);

 /**
  * Start server 
  */

app.listen(app.get('port'), function() {
	console.log('Express listening to port', app.get('port'));
});

module.exports = app;
