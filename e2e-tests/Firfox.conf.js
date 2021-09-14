//jshint strict: false

exports.config = {

    allScriptsTimeout: 11000,

    directConnect: true,
    multiCapabilities: [
        {
            'browserName': 'firefox',
            'moz:firefoxOptions': {
                'args': ['--safe-mode']
            }
        }
    ],

    onPrepare: function () {

        browser.manage().window().maximize();
        browser.manage().timeouts().implicitlyWait(5000);
        browser.waitForAngularEnabled(false);
    },

    specs: [
        'SampleTest1.js',
        'SampleTest2.js'

    ],

    baseUrl: 'https://qaclickacademy.github.io/protocommerce/',

    framework: 'jasmine',

    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    }

};
