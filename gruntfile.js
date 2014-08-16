/*jslint node: true */
'use strict';

module.exports = function(grunt) {

	// Project configuration
	grunt.initConfig({
		// Fresh build folder
		clean: ['client/dist'],
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

	grunt.registerTask('bower', 'install bower dependencies', function() {
        var exec = require('child_process').exec;
        var cb = this.async();
        exec('bower install', {cwd: './client'}, function(err, stdout, stderr) {
            console.log(stdout);
            cb();
        });
    });

	// Load grunt tasks automatically
	require('load-grunt-tasks')(grunt);

	// Default to force
	grunt.option('force', true);

	grunt.registerTask('default', ['bower', 'connect', 'jshint', 'nodemon']);

};











