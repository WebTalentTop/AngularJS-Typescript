"use strict";
var titanApiUrl_1 = require('./titanApiUrl');
var gridApiUrls_1 = require('./gridApiUrls');
var MaintenanceFrequencyApiUrl = (function () {
    function MaintenanceFrequencyApiUrl() {
    }
    MaintenanceFrequencyApiUrl.gridApiUrl = gridApiUrls_1.GridApiUrl.maintenanceFrequencyGridUrl;
    MaintenanceFrequencyApiUrl.postCreatedUrl = titanApiUrl_1.titanApiUrl + 'maintenanceFrequency/post';
    MaintenanceFrequencyApiUrl.postUpdateUrl = titanApiUrl_1.titanApiUrl + 'maintenanceFrequency/put';
    MaintenanceFrequencyApiUrl.getByIdUrl = titanApiUrl_1.titanApiUrl + 'maintenanceFrequency/get';
    return MaintenanceFrequencyApiUrl;
}());
exports.MaintenanceFrequencyApiUrl = MaintenanceFrequencyApiUrl;
