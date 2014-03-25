'use strict';

module.exports = function( grunt ) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ["js/libs/jquery.js",
              "js/libs/bootstrap.js",
              "js/libs/handlebars.js",
              "js/libs/ember.js",
              "js/libs/ember-data.js",
              "js/libs/moment.js",
              "js/libs/showdown.js",
              "js/libs/prettify.js",
              "js/app.js",
              "js/store.js",
              "js/models/post.js",
              "js/helpers/helpers.js",
              "js/router.js",
              "js/routes/*.js",
              "js/controllers/*.js",
              "js/templates.js",
              "js/views/*.js"],
        dest: 'dist/built.js'
      }
    },

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },

    jshint: {
      files: ['Gruntfile.js', 'server.js', 'js/**/*/.js'],

      options: {
        globals: {
          jQuery: true,
          console: true,
          module: true
        }
      }
    },

    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['build']
    },

    clean: {
      build: {
        src: ['dist', 'dist']
      }
    },

    emberTemplates: {
      compile: {
        options: {
          templateBasePath: /js\/templates\//
        },
        files: {
          'js/templates.js': 'js/templates/**/*.hbs'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-ember-templates');

  grunt.registerTask('build', ['clean', 'emberTemplates', 'concat', 'uglify']);
};





