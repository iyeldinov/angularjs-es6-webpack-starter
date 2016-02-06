module.exports = function (config) {
  config.set({
    // base path used to resolve all patterns
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    // list of files/patterns to load in the browser
    files: [{ pattern: 'bundle.spec.js', watched: false }],

    // files to exclude
    exclude: [],

    plugins: [
      require("karma-jasmine"),
      require("karma-chrome-launcher"),
      require("karma-sourcemap-loader"),
      require("karma-webpack"),
      require("karma-coverage")
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'bundle.spec.js': ['webpack', 'sourcemap']
    },

    webpack: {
      devtool: 'inline-source-map',
      module: {
        preLoaders: [
          { test: /\.spec\.js/, exclude: [/app\/lib/, /node_modules/],  loader: 'babel-loader', presets: ['es2015'] },
          { test: /\.js/, include: [/client\/app/], exclude: [/app\/lib/, /node_modules/, /\.spec\.js/], loader: 'isparta-loader'},
        ],
        loaders: [

          { test: /\.html/, loader: 'raw' },
          { test: /\.styl$/, loader: 'style!css!stylus' },
          { test: /\.css$/, loader: 'style!css' }
        ]
      }
    },

    webpackServer: {
      noInfo: true // prevent console spamming when running in Karma!
    },

    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],

    // web server port
    port: 9876,

    // enable colors in the output
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // toggle whether to watch files and rerun tests upon incurring changes
    autoWatch: false,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    // if true, Karma runs tests once and exits
    singleRun: true
  });
};
