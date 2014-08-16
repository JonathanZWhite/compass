/*jslint node: true */
'use strict';

module.exports = function(grunt) {

	// Project configuration
	grunt.initConfig({
		// Starts FE server
		connect: {
			server: {
				options: {
					port: 9001,
					base: ['client/dist', 'www-root']
				}
			}
		},
		// Runs jshint
		jshint: {
			all: {
				src: ['gruntfile.js', 'app.js','controllers/*.js', 'models/*.js', 'config/*.js']
			}
		},
		// Starts BE server
		nodemon: {
			dev: {
				script: 'server/app.js',
				options: {
					ext: 'js, html'
				}
			}
		}
	});

	// Load grunt tasks automatically
	require('load-grunt-tasks')(grunt);

	// Default to force
	grunt.option('force', true);

	grunt.registerTask('default', ['connect', 'jshint', 'nodemon']);

};











