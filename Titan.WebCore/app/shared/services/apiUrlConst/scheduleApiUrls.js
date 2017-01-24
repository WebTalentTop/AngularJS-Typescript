"use strict";
var titanApiUrl_1 = require('./titanApiUrl');
var gridApiUrls_1 = require('./gridApiUrls');
var ScheduleApiUrl = (function () {
    function ScheduleApiUrl() {
    }
    ScheduleApiUrl.gridApiUrl = gridApiUrls_1.GridApiUrl.scheduleGridUrl;
    ScheduleApiUrl.postCreatedUrl = titanApiUrl_1.titanApiUrl + 'schedule/post';
    ScheduleApiUrl.postUpdateUrl = titanApiUrl_1.titanApiUrl + 'schedule/put';
    ScheduleApiUrl.getByIdUrl = titanApiUrl_1.titanApiUrl + 'schedule/get';
    return ScheduleApiUrl;
}());
exports.ScheduleApiUrl = ScheduleApiUrl;
