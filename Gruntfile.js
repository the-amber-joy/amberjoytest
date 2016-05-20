module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            build: {
                files: {
                    'server/public/assets/scripts/client.min.js':
                        'client/client.js',
                    'server/public/assets/scripts/controllers.min.js':
                        'client/controllers/*.js',
                    'server/public/assets/scripts/directives.min.js':
                        'client/directives/*.js',
                    'server/public/assets/scripts/factories.min.js':
                        'client/factories/*.js'
                }
            }
        },
        watch: {
            scripts: {
                files: ['client/client.js', 'client/**/*.*'],
                tasks: ['uglify'],
                options: {
                    spawn: false
                }
            }
        },
        copy: {
            main: {
                expand: true,
                cwd: "node_modules/",
                src: [
                    "angular/angular.min.js",
                    "angular/angular.min.js.map",
                    "angular/angular-csp.css",
                    "angular-route/angular-route.min.js",
                    "angular-route/angular-route.min.js.map",
                    "bootstrap/*.*",
                    "bootstrap/**/*.*",
                    "font-awesome/css/font-awesome.css",
                    "jquery/dist/jquery.min.js"
                ],
                "dest": "server/public/vendors/"
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['copy', 'uglify']);

};
