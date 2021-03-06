// Karma configuration
// Generated on Sun Apr 01 2018 20:57:37 GMT-0300 (Hora estándar de Argentina)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      '../www/lib/ionic/js/ionic.bundle.min.js', // Dependencia
      '../www/lib/angular-mocks/angular-mocks.js', // Auxiliar. dejar si o si sino no anda
      '../node_modules/jasmine-promises/dist/jasmine-promises.js',
      //'../www/lib/angular-local-storage/dist/angular-local-storage.min.js', // Auxiliar
      //'../www/js/app.js', // Aut aplicacion bajo test
      //'../www/js/services/LocalService.js', // Aut
      '../www/js/prueba.js',
      '../www/js/moduloPrueba.js',
      '../test/**/*.js', // tests de jasmine

    ],


    // list of files / patterns to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['ChromeHeadless'],
    //'PhantomJS'
    //'ChromeHeadless'


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
