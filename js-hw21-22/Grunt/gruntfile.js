module.exports = function(grunt) {
    grunt.initConfig({
        babel: {
            options: {
                sourceMap: true,
                presets: ['es2015']
            },
            dist: {
                files: [{
                  expand: true,
                  cwd: 'src',
                  src: ["*.js"],
                  dest: 'dist',
                  ext: '.js',
                  extDot: 'first'
                }]
            }
        },
        watch: {
          babel: {
            files: 'src/*.js',
            tasks: ['babel']
          }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-babel');
    grunt.registerTask('default', ['babel', 'watch']);
};
