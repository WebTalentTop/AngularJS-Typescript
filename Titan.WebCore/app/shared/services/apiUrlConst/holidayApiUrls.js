"use strict";
var titanApiUrl_1 = require('./titanApiUrl');
var gridApiUrls_1 = require('./gridApiUrls');
var HolidayApiUrl = (function () {
    function HolidayApiUrl() {
    }
    HolidayApiUrl.gridApiUrl = gridApiUrls_1.GridApiUrl.holidayGridUrl;
    HolidayApiUrl.postCreatedUrl = titanApiUrl_1.titanApiUrl + 'holiday/post';
    HolidayApiUrl.postUpdateUrl = titanApiUrl_1.titanApiUrl + 'holiday/put';
    HolidayApiUrl.getByIdUrl = titanApiUrl_1.titanApiUrl + 'holiday/get';
    HolidayApiUrl.getAllUrl = titanApiUrl_1.titanApiUrl + 'holiday';
    return HolidayApiUrl;
}());
exports.HolidayApiUrl = HolidayApiUrl;
