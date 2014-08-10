'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Base Schema 
 */
var BaseSchema = new Schema({
	title: String,
	body: String
});

mongoose.model('BaseModel', BaseSchema);