module.exports = function(grunt) {
  grunt.initConfig({
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['jlider.js', 'js/*.js'],
        dest: 'dist/js/production.js',
      },
    },
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['css/*.css'],
        dest: 'dist/css/production.css',
      },
    },
    uglify: {
      build: {
          src: 'dist/js/production.js',
          dest: 'dist/js/production.min.js'
      }
    },
    sass: {
        dist: {
            options: {
                style: 'compressed'
            },
            files: {
                'dist/css/global.css': 'css/*.css'
            }
        }
    },
    imagemin: {
      dynamic: {
          files: [{
              expand: true,
              cwd: 'images/',
              src: ['img/*.{png,jpg,gif}'],
              dest: 'dist/img/'
          }]
      }
    },
    watch: {
      scripts: {
          files: ['jlider.js', 'js/*.js'],
          tasks: ['concat', 'uglify', 'imagemin', 'sass'],
          options: {
              spawn: false,
          },
      },
      css: {
          files: ['css/*.scss'],
          tasks: ['sass'],
          options: {
              spawn: false,
          }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.registerTask('default', ['concat', 'uglify', 'imagemin', 'sass']);
};
