"use strict";
var titanApiUrl_1 = require('./titanApiUrl');
var gridApiUrls_1 = require('./gridApiUrls');
var TestTypeApiUrl = (function () {
    function TestTypeApiUrl() {
    }
    TestTypeApiUrl.gridApiUrl = gridApiUrls_1.GridApiUrl.testTypeGridUrl;
    TestTypeApiUrl.postCreatedUrl = titanApiUrl_1.titanApiUrl + 'testType';
    TestTypeApiUrl.postUpdateUrl = titanApiUrl_1.titanApiUrl + 'testType';
    TestTypeApiUrl.getByIdUrl = titanApiUrl_1.titanApiUrl + 'testType/GetByIdAndLocale';
    TestTypeApiUrl.getAllUrl = titanApiUrl_1.titanApiUrl + 'testType/GetByTenantId';
    TestTypeApiUrl.getAllTestTypes = titanApiUrl_1.titanApiUrl + 'testType/GetByTenantId';
    return TestTypeApiUrl;
}());
exports.TestTypeApiUrl = TestTypeApiUrl;
