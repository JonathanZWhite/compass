/*jslint node: true */
'use strict';

module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-compress');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-html2js');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-bower-task');

	// Project configuration
	grunt.initConfig({
		bower: {
			install: {
				options: {
					install: true,
					copy: false,
					targetDir: 'dist',
					cleanTargetDir: true
				}
			}
		},
		// Concats all js files into one
		concat: {
			options: {
				seperator: ';'
			},
			dist: {
				src: ['client/*.js', 'client/tmp/*.js', 'client/home/*.js'],
				dest: 'client/dist/app.js'
			}
		},
		// Fresh build folder
		clean: {
			temp: {
				src: ['client/tmp']
			}
		},
		// Starts FE server
		connect: {
			server: {
				options: {
					hostname: 'localhost',
					port: 9001,
					base: ['client/dist']
				}
			}
		},
		copy: {
			main: {
				src: 'client/index.html',
				dest: 'client/dist/index.html',
			}
		},
		// Converts templates to js
		html2js: {
			dist: {
				src: [ 'client/**/*.tpl.html' ],
				dest: 'client/tmp/templates.js'
			}
		},
		// Runs jshint TODO: add all files
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
		},
		// Minifies js
		uglify: {
			dist: {
				files: {
					'client/dist/app.js': ['client/dist/app.js']
				},
				options: {
					mangle: false
				}
			}
		},
		// Watches changes in files
		watch: {
			dev: {
				files: ['Grunfile.js', 'client/components/**/*.js', 'client/home/*.js','*.html'],
				tasks: ['jshint', 'html2js:dist', 'copy:main','concat:dist', 'clean:temp', 'uglify:dist'],
				options: {
					atBegin: true
				}
			},
			min: {
				files: ['Gruntfile.js', 'client/**/*.js', '*.html'],
				tasks: ['jshint', 'html2js:dist', 'concat:dist', 'clean:temp', 'uglify:dist'],
				options: {
					atBegin: true
				}
			}
		}
	});

	// Load grunt tasks automatically
	require('load-grunt-tasks')(grunt);

	// Default to force
	grunt.option('force', true);

	// Grunt dev
	grunt.registerTask('dev', function() {
		var nodemon = grunt.util.spawn({
	        cmd: 'grunt',
	        grunt: true,
	        args: 'nodemon'
	    });

	    nodemon.stdout.pipe(process.stdout);
    	nodemon.stderr.pipe(process.stderr);

		grunt.task.run(['bower', 'connect:server', 'watch:dev']);
	});

	grunt.registerTask('dev', function() {
		var nodemon = grunt.util.spans({
	        cmd: 'grunt',
	        grunt: true,
	        args: 'nodemon'
		});

		grunt.task.run([ 'bower', 'connect:server', 'watch:dev' ]);
	});
	// grunt.registerTask('minified', [ 'bower', 'connect:server', 'watch:min' ]);
	// grunt.registerTask('package', [ 'bower', 'jshint', 'karma:unit', 'html2js:dist', 'concat:dist', 'uglify:dist','clean:temp', 'compress:dist' ]);

};











