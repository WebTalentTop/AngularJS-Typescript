"use strict";
var titanApiUrl_1 = require('./titanApiUrl');
var gridApiUrls_1 = require('./gridApiUrls');
var CalendarApiUrl = (function () {
    function CalendarApiUrl() {
    }
    CalendarApiUrl.gridApiUrl = gridApiUrls_1.GridApiUrl.calendarGridUrl;
    CalendarApiUrl.postCreatedUrl = titanApiUrl_1.titanApiUrl + 'calendar';
    CalendarApiUrl.postUpdateUrl = titanApiUrl_1.titanApiUrl + 'calendar';
    CalendarApiUrl.getByIdUrl = titanApiUrl_1.titanApiUrl + 'calendar';
    CalendarApiUrl.getCalendarSettingsByTenantIdUrl = titanApiUrl_1.titanApiUrl + 'calendar/calendarSettings/';
    return CalendarApiUrl;
}());
exports.CalendarApiUrl = CalendarApiUrl;
