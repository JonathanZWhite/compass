/*jslint node: true */
'use strict';

/**
 * Module dependencies.
 */

var mongoose = require('mongoose'),
	ArticleModelDep = require('../models/ArticleModel'),
	ArticleModel = mongoose.model('ArticleModel');

var ArticleController = function() {};

ArticleController.prototype.create = function(req, res) {
	var article = new ArticleModel(req.body);

	article.save(function(err) {
		if (err) {
			res.status(400).send('Error creating article');
		} else {
			res.send('Article created');
		}
	});

};

ArticleController.prototype.read = function(req, res) {
	res.header('Access-Control-Allow-Origin', 'localhost:9001');

	ArticleModel.find({}, function(err, data) {
		if (err || !data) {
			res.status(400).send('Error: ' + err);
		} else {
			res.send(data);
		}
	});
};

module.exports = new ArticleController();