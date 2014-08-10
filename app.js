/**
 * Dependencies
 */

var express = require('express');
var path = require('path');
var dust = require('dustjs-linkedin');
var consolidate = require('consolidate');

var app = express();

/**
 * Express configuration
 */

app.engine('dust', consolidate.dust);

app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'dust');

app.use(express.static(path.join(__dirname, 'public')));

/**
 * Controllers
 */

var HomeController = require('./controllers/homeController.js');
var APIController = require('./controllers/apiController.js');

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
 * Server bootstrap
 */

app.listen(app.get('port'), function() {
	console.log('Express listening to port', app.get('port'));
});

module.exports = app;