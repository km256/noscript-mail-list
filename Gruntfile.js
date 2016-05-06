module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: ''
            },
            css: {
                src: [
                    'node_modules/noscript/css/noscript.css',
                    'src/views/**/*.css'
                ],
                dest: 'dist/app.css'
            },
            js: {
                src: [
                    'node_modules/noscript/dist/noscript.js',
                    'src/util/**/*.js',
                    'src/layouts/**/*.js',
                    'src/models/**/*.js',
                    'src/views/**/*.js',
                    'src/app.js'
                ],
                dest: 'dist/bundle.js'
            }
        },
        yate: {
            options: {
                runtime: true
            },
            dist: {
                files: {
                    'dist/templates.yate.js': [
                        'node_modules/noscript/yate/noscript.yate',
                        'src/views/*/*.yate'
                    ]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-yate');

    grunt.registerTask('default', ['concat', 'yate']);
};
