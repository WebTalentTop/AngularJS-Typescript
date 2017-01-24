"use strict";
var titanApiUrl_1 = require('./titanApiUrl');
var gridApiUrls_1 = require('./gridApiUrls');
var TestActivityApiUrl = (function () {
    function TestActivityApiUrl() {
    }
    TestActivityApiUrl.gridApiUrl = gridApiUrls_1.GridApiUrl.testActivityGridUrl;
    TestActivityApiUrl.postCreatedUrl = titanApiUrl_1.titanApiUrl + 'testActivity/post';
    TestActivityApiUrl.postUpdateUrl = titanApiUrl_1.titanApiUrl + 'testActivity/put';
    TestActivityApiUrl.getByIdUrl = titanApiUrl_1.titanApiUrl + 'testActivity/get';
    return TestActivityApiUrl;
}());
exports.TestActivityApiUrl = TestActivityApiUrl;
