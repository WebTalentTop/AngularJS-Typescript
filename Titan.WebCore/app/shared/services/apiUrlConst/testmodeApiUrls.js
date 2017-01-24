"use strict";
var titanApiUrl_1 = require('./titanApiUrl');
var gridApiUrls_1 = require('./gridApiUrls');
var TestModeApiUrl = (function () {
    function TestModeApiUrl() {
    }
    TestModeApiUrl.gridApiUrl = gridApiUrls_1.GridApiUrl.testModeGridUrl;
    TestModeApiUrl.postCreatedUrl = titanApiUrl_1.titanApiUrl + 'testMode/post';
    TestModeApiUrl.postUpdateUrl = titanApiUrl_1.titanApiUrl + 'testMode/put';
    TestModeApiUrl.getByIdUrl = titanApiUrl_1.titanApiUrl + 'testMode/GetByIdAndLocale';
    TestModeApiUrl.getAllUrl = titanApiUrl_1.titanApiUrl + 'testMode/GetAll';
    TestModeApiUrl.getAllTestModes = titanApiUrl_1.titanApiUrl + 'testMode/GetByTenantId';
    TestModeApiUrl.getAllTestTypesUrl = titanApiUrl_1.titanApiUrl + 'TestType';
    TestModeApiUrl.getAllByTestTypeIdUrl = titanApiUrl_1.titanApiUrl + 'TestMode/GetAllByTestType?testTypeId=';
    return TestModeApiUrl;
}());
exports.TestModeApiUrl = TestModeApiUrl;
