"use strict";
var titanApiUrl_1 = require('./titanApiUrl');
var gridApiUrls_1 = require('./gridApiUrls');
var OperatingHoursApiUrl = (function () {
    function OperatingHoursApiUrl() {
    }
    OperatingHoursApiUrl.gridApiUrl = gridApiUrls_1.GridApiUrl.operatingHoursGridUrl;
    OperatingHoursApiUrl.postCreatedUrl = titanApiUrl_1.titanApiUrl + 'operatingHours/post';
    OperatingHoursApiUrl.postUpdateUrl = titanApiUrl_1.titanApiUrl + 'operatingHours/put';
    OperatingHoursApiUrl.getByIdUrl = titanApiUrl_1.titanApiUrl + 'operatingHours/get';
    return OperatingHoursApiUrl;
}());
exports.OperatingHoursApiUrl = OperatingHoursApiUrl;
