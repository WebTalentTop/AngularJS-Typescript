"use strict";
var titanApiUrl_1 = require('./titanApiUrl');
var gridApiUrls_1 = require('./gridApiUrls');
var TimeEntryApiUrl = (function () {
    function TimeEntryApiUrl() {
    }
    TimeEntryApiUrl.gridApiUrl = gridApiUrls_1.GridApiUrl.testStatusGridUrl;
    TimeEntryApiUrl.getTestStages = titanApiUrl_1.titanApiUrl + 'testStage/GetTestStages';
    TimeEntryApiUrl.getHourEntryByEntityIdentifierId = titanApiUrl_1.titanApiUrl + 'timeEntryType/GetHourlyEntries';
    TimeEntryApiUrl.postCreatedUrl = titanApiUrl_1.titanApiUrl + 'timeEntry/post';
    TimeEntryApiUrl.postUpdateUrl = titanApiUrl_1.titanApiUrl + 'timeEntry/put';
    TimeEntryApiUrl.getByIdUrl = titanApiUrl_1.titanApiUrl + 'timeEntry/get';
    TimeEntryApiUrl.GetTrackingListByEntityId = titanApiUrl_1.titanApiUrl + 'timeEntry/GetTrackingListByEntityId';
    TimeEntryApiUrl.GetAllDownTimeReasons = titanApiUrl_1.titanApiUrl + 'downTimeReason/GetAllDownTimeReasons';
    TimeEntryApiUrl.GetProjectId = titanApiUrl_1.titanApiUrl + 'testRequest/GetProjectId';
    return TimeEntryApiUrl;
}());
exports.TimeEntryApiUrl = TimeEntryApiUrl;
