"use strict";
var titanApiUrl_1 = require('./titanApiUrl');
var TestReqestApiUrl = (function () {
    function TestReqestApiUrl() {
    }
    TestReqestApiUrl.getFacilityScheduleByTestRequestIdUrl = titanApiUrl_1.titanApiUrl + 'testRequest/GetFacilityScheduleByTestRequestId/';
    TestReqestApiUrl.getUserScheduleByIdUrl = titanApiUrl_1.titanApiUrl + 'testRequest/GetUserScheduleById/';
    TestReqestApiUrl.getUserScheduleByTestFacilityScheduleIdUrl = titanApiUrl_1.titanApiUrl + 'testRequest/GetUserScheduleByTestFacilityScheduleId/';
    TestReqestApiUrl.postDeleteUserScheduleInstanceUrl = titanApiUrl_1.titanApiUrl + 'testRequest/DeleteUserScheduleInstance/';
    TestReqestApiUrl.postMoveTestRequestUrl = titanApiUrl_1.titanApiUrl + 'testRequest/Move/';
    TestReqestApiUrl.postAssignUserUrl = titanApiUrl_1.titanApiUrl + 'testRequest/AssignUsers/';
    return TestReqestApiUrl;
}());
exports.TestReqestApiUrl = TestReqestApiUrl;
