/* global browser, require, console, process  */
/*global describe, it, beforeAll, beforeEach, afterAll, afterEach */
'use strict';

var SampleTest2Po = require('./SampleTest2.po.js');
var sampleTest2Po = new SampleTest2Po();
var testData = require('./TestData/TestData_SampleTest2.json');
let URL = browser.baseUrl;

describe('TestSuite2',function() {


    beforeAll(function() {
        console.log('calling before all');
        browser.get(URL);
    });

    it('Testcase1: Select the product from shop Menu and check the Cart to purchase',function() {

        sampleTest2Po.registerPage(testData.Name, testData.Email, testData.Password, testData.Gender);
        sampleTest2Po.shop(testData.productName1, testData.productName2);
        sampleTest2Po.checkoutAndPurchase(testData.country);

    });


});

