"use strict";
var titanApiUrl_1 = require('./titanApiUrl');
var gridApiUrls_1 = require('./gridApiUrls');
var TestVerificationMethodApiUrl = (function () {
    function TestVerificationMethodApiUrl() {
    }
    TestVerificationMethodApiUrl.gridApiUrl = gridApiUrls_1.GridApiUrl.testVerificationMethodGridUrl;
    TestVerificationMethodApiUrl.postCreatedUrl = titanApiUrl_1.titanApiUrl + 'testVerificationMethod/post';
    TestVerificationMethodApiUrl.postUpdateUrl = titanApiUrl_1.titanApiUrl + 'testVerificationMethod/put';
    TestVerificationMethodApiUrl.getByIdUrl = titanApiUrl_1.titanApiUrl + 'testVerificationMethod/get';
    TestVerificationMethodApiUrl.getAllUrl = titanApiUrl_1.titanApiUrl + 'testVerificationMethod/GetAllVerificationMethods';
    return TestVerificationMethodApiUrl;
}());
exports.TestVerificationMethodApiUrl = TestVerificationMethodApiUrl;
