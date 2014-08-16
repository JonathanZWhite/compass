/*jslint node: true */
'use strict';

module.exports = function(grunt) {

	// Project configuration
	grunt.initConfig({
	  jshint: {
	    all: {
	    	src: ['gruntfile.js', 'app.js','controllers/*.js', 'models/*.js', 'config/*.js']
	  	}
	  },
	  nodemon: {
	  	dev: {
	  		script: 'server/app.js',
	  		options: {
	  			ext: 'js, html'
	  		}
	  	}
	  }
	});

	// NPM tasks
	require('load-grunt-tasks')(grunt);

	// Default to force
	grunt.option('force', true);

	grunt.registerTask('default', ['jshint', 'nodemon']);
};