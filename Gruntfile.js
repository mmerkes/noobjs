'use strict';

module.exports = function( grunt ) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Cleans the build build directory
    clean: {
      build: {
        src: [ 'build' ]
      },
    },

    copy: {
      all: {
        src: ['js/**/*.js', 
              'index.html', 
              'images/**/*', 
              'css/**/*'],
        dest: 'build/'
      }
    },

    // Lint the files
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        eqnull: true,
        globals: {
          module: true,
          console: true
        }
      },
      files: ['js/controllers/*.js', 
              'js/helpers/*.js', 
              'js/models/*.js', 
              'js/routes/*.js', 
              'js/views/*.js', 
              'js/*.js']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask(
    'build', 
    'Compiles all of the assets and copies the files to the build directory.', 
    [ 'clean', 'copy' ]
  );

  grunt.registerTask('default', ['clean', 'copy', 'jshint']);
}
