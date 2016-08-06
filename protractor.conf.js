exports.config = {
  // set to "custom" instead of cucumber.
  framework: 'custom',

  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  cucumberOpts: {
    require: 'features/steps/*.steps.js',
    format: 'pretty'
  },

  capabilities: {
    'browserName': 'chrome',
  },

  baseUrl: 'http://angular.github.io/angular-phonecat/step-12/app/#/',

  specs: [
    'features/*.feature',
  ]
}
