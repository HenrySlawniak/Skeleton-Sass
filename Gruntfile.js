module.exports = function(grunt) {
    grunt.initConfig({
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    "css/skeleton.css": "scss/skeleton.scss"
                }
            }
        },

        watch: {
            options: {
                livereload: false,
            },
            styles: {
                files: ['scss/**/*.scss'], // which files to watch
                tasks: ['sass', 'copy'],
                options: {
                    nospawn: true
                }
            }
        },

        copy: {
          main: {
            files: [
              {
                expand: true,
                src: ['css/*.css'],
                dest: '/Users/meggawatts/go/src/github.com/HenrySlawniak/fortkickass.co/static',
                filter: 'isFile'
              }
            ]
          }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['sass', 'copy', 'watch']);
};
