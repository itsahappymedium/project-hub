module.exports = function(grunt) {
	'use strict';

	grunt.initConfig({

        // Deploy static HTML via rsync
		deploy: {
			options: {
				src: "./",
				args: ["--verbose"],
				exclude: ['.git*', 'node_modules', '.sass-cache', 'Gruntfile.js', 'package.json', '.DS_Store', 'README.md', 'config.rb', '.jshintrc'],
				recursive: true,
				syncDestIgnoreExcl: true
			},
			staging: {
				options: {
					dest: "~/path/to/dest",
					host: "user@server",
					port: 2222
				}
			}
		},

	});

	require('load-grunt-tasks')(grunt);

	grunt.renameTask('rsync', 'deploy');
};
