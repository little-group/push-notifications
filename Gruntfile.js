/**
 * Created by Дмитрий on 21.06.2017.
 */

module.exports = function(grunt) {

    grunt.initConfig({
        uncss: {
            dist: {
                files: [
                    {
                        src: [
                            'src/index.html',
                        ],
                        dest: 'src/assets/css/uncss.css'
                    }
                ]
            }
        },
        cssmin: {
            dist: {
                files: [
                    { src: 'src/assets/css/uncss.css', dest: 'dist/assets/css/style.css' }
                ]
            }
        },
        uglify: {
            my_target: {
                files: {
                    'dist/assets/js/script.js': [
                        "node_modules/jquery/dist/jquery.min.js",
                        "src/assets/js/script.js",
                    ]
                }
            }
        },
        copy: {
            main: {
                files: [
                    // includes files within path
                    {expand: true, flatten: true, src: ['src/index.html'], dest: 'dist/', filter: 'isFile'},
                    // {expand: true, src: ['src/'], dest: 'dist/', filter: 'isFile'},

                    // // includes files within path and its sub-directories
                    // {expand: true, src: ['src/**'], dest: 'dist/'},
                    //
                    // // makes all src relative to cwd
                    // {expand: true, cwd: 'src/', src: ['**'], dest: 'dist/'},
                    //
                    // // flattens results to a single level
                    // {expand: true, flatten: true, src: ['src/**'], dest: 'dist/', filter: 'isFile'},
                ],
            },
        },
    });

    grunt.loadNpmTasks('grunt-uncss');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');


    grunt.registerTask('default', ['uncss', 'cssmin', 'uglify', 'copy']);

};