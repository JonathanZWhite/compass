/*jslint node: true */
'use strict';

module.exports = function(grunt) {

	// Project configuration
	grunt.initConfig({
		bower: {
			install: {
				options: {
					targetDir: './client/lib',
					install: true,
					verbose: false,
					cleanTargetDir: false,
					cleanBowerDir: false,
					bowerOptions: {}
				}
			}
		},
		// Fresh build folder
		clean: ['client/dist'],
		// Starts FE server
		connect: {
			server: {
				options: {
					port: 9001,
					keepalive: true,
					base: ['client']
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

	// Loads bower task
	grunt.loadNpmTasks('grunt-bower-task');

	// Default to force
	grunt.option('force', true);

	// grunt.registerTask('default', ['clean', 'bower', 'nodemon', 'jshint', 'connect']);
	grunt.registerTask('default', function() {
		var nodemon = grunt.util.spawn({
	        cmd: 'grunt',
	        grunt: true,
	        args: 'nodemon'
	    });

	    nodemon.stdout.pipe(process.stdout);
    	nodemon.stderr.pipe(process.stderr);

		grunt.task.run([
			'clean',
			'bower',
			'jshint',
			'connect'
		]);
	});

};











