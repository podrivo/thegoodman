module.exports = function(grunt) {

  // 1. All configuration goes here
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      js: {
        options: {
          separator:';'
        },
          src: ['assets/js/functions.js','assets/js/jquery.fullscreen-min.js','assets/js/rotator.js'],
          dest: 'assets/js/global.js'
      },
      css: {
          src: ['assets/css/style.css','assets/css/scenes.css'],
          dest: 'assets/css/global.css'
      }
    },

    uglify: {
      global: {
        src: 'assets/js/global.js',
        dest: 'assets/js/global.min.js'
      }
    },

    cssmin: {
      global: {
        expand: true,
        cwd: 'assets/css',
        src: ['global.css'],
        dest: 'assets/css',
        ext: '.min.css'
      }
    },

    autoprefixer: {
      global: {
        expand: true,
        flatten: true,
        src: 'assets/css/global.min.css',
        dest: 'assets/css'
      },
      tests: {
        expand: true,
        flatten: true,
        src: 'assets/css/tests.css',
        dest: 'assets/css'
      }
    },

    // imagemin: {
    //   img: {
    //     files: [{
    //       expand: true,
    //       cwd: 'assets/img/',
    //       src: ['**/*.{png,jpg,gif}'],
    //       dest: 'assets/img/'
    //     }]
    //   }
    // },

    clean: {
      noneed: {
        src: ['assets/css/global.css']
      }
    },

    watch: {
      options: {
        livereload: 12345
      },
      scripts: {
        files: ['assets/js/*.js'],
        tasks: ['concat:js', 'uglify'],
        options: {
          spawn: false
        }
      },
      css: {
        tasks: ['concat:css', 'cssmin', 'autoprefixer'],
        files: ['assets/css/*.css'],
        options: {
          spawn: false
        }
      },
      images: {
        files: ['assets/img/**/*.{png,jpg,gif}', 'assets/img/*.{png,jpg,gif}'],
        // tasks: ['imagemin'],
        tasks: [],
        options: {
          spawn: false
        }
      },
      html: {
        files: ['./**/*.html'],
        tasks: [],
        options: {
          spawn: false
        }
      }
    }
  });

  // 3. Where we tell Grunt we plan to use this plug-in.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
  // grunt.registerTask('default', ['concat', 'uglify', 'cssmin', 'autoprefixer', 'imagemin', 'clean']);
  grunt.registerTask('default', ['concat', 'uglify', 'cssmin', 'autoprefixer', 'clean']);
};
