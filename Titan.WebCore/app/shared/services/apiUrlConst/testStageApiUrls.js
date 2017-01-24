"use strict";
var titanApiUrl_1 = require('./titanApiUrl');
var gridApiUrls_1 = require('./gridApiUrls');
var TestStageApiUrl = (function () {
    function TestStageApiUrl() {
    }
    TestStageApiUrl.gridApiUrl = gridApiUrls_1.GridApiUrl.testStageGridUrl;
    TestStageApiUrl.postCreatedUrl = titanApiUrl_1.titanApiUrl + 'testStage/post';
    TestStageApiUrl.postUpdateUrl = titanApiUrl_1.titanApiUrl + 'testStage/put';
    TestStageApiUrl.getByIdUrl = titanApiUrl_1.titanApiUrl + 'testStage/get';
    return TestStageApiUrl;
}());
exports.TestStageApiUrl = TestStageApiUrl;
