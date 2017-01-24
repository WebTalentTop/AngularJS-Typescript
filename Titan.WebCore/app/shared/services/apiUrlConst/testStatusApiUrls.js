"use strict";
var titanApiUrl_1 = require('./titanApiUrl');
var gridApiUrls_1 = require('./gridApiUrls');
var TestStatusApiUrl = (function () {
    function TestStatusApiUrl() {
    }
    TestStatusApiUrl.gridApiUrl = gridApiUrls_1.GridApiUrl.testStatusGridUrl;
    TestStatusApiUrl.postCreatedUrl = titanApiUrl_1.titanApiUrl + 'testStatus/post';
    TestStatusApiUrl.postUpdateUrl = titanApiUrl_1.titanApiUrl + 'testStatus/put';
    TestStatusApiUrl.getByIdUrl = titanApiUrl_1.titanApiUrl + 'testStatus/get';
    TestStatusApiUrl.getAllUrl = titanApiUrl_1.titanApiUrl + 'testStatus';
    return TestStatusApiUrl;
}());
exports.TestStatusApiUrl = TestStatusApiUrl;
