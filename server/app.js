/*jslint node: true */
'use strict';

/**
 * Dependencies
 */

var bodyParser = require('body-parser'),
	express = require('express'),
	mongoose = require('mongoose'),
	path = require('path');

var app = express();


var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
};

var allowCrossDomain = function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    next();
};

/**
 * Express configuration
 */

app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));

app.use(allowCrossDomain);
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
 * Secrets and API keys
 */

var secrets = require('./config/secrets');

/**
 * Establishes MongoDB connection
 */

var db = mongoose.connect(secrets.db, function(err) {
	if (err) {
		console.error('Could not establish connection with MongoDB');
		console.log(err);
	}
});


app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  next();
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
