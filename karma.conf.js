'use strict';

const webpackConfig = require('./webpack.config.js');
webpackConfig.entry = {};

module.exports = function(config) {
  config.set({
    webpack: webpackConfig,
    basePath: '',
    frameworks: ['jasmine'],
    files: ['app/test/**/*-test.js'],
    exclude: [],
    preprocessors: {'app/test/**/*-test.js':['webpack']},
    // reporters: ['progress'],
    reporters: ['mocha'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false,
    concurrency: Infinity
  });
};
