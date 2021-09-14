//jshint strict: false

exports.config = {

    allScriptsTimeout: 11000,

    directConnect: true,
    capabilities: {
        browserName: 'chrome',

        chromeOptions: {
            args: [ "--headless", "--disable-gpu", "--window-size=1920,1080" ]
        }
    },

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
