"use strict";
var titanApiUrl_1 = require('./titanApiUrl');
var gridApiUrls_1 = require('./gridApiUrls');
var TestRoleApiUrl = (function () {
    function TestRoleApiUrl() {
    }
    TestRoleApiUrl.gridApiUrl = gridApiUrls_1.GridApiUrl.testRoleGridUrl;
    TestRoleApiUrl.postCreatedUrl = titanApiUrl_1.titanApiUrl + 'testRole/post';
    TestRoleApiUrl.postUpdateUrl = titanApiUrl_1.titanApiUrl + 'testRole/put';
    TestRoleApiUrl.getByIdUrl = titanApiUrl_1.titanApiUrl + 'testRole/get';
    TestRoleApiUrl.getAllUrl = titanApiUrl_1.titanApiUrl + 'testuserRole';
    return TestRoleApiUrl;
}());
exports.TestRoleApiUrl = TestRoleApiUrl;
