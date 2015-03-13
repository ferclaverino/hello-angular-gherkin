exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    framework: 'cucumber',
    specs: [
        '../features/*.feature',
    ],
    capabilities: {
        'browserName': 'chrome',
    },
    cucumberOpts: {
        require: '../features/steps/*.steps.js',
        format: 'pretty'
    },
}
