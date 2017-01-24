"use strict";
var titanApiUrl_1 = require('./titanApiUrl');
var gridApiUrls_1 = require('./gridApiUrls');
var SensorTypeApiUrl = (function () {
    function SensorTypeApiUrl() {
    }
    SensorTypeApiUrl.gridApiUrl = gridApiUrls_1.GridApiUrl.sensorTypeGridUrl;
    SensorTypeApiUrl.postCreatedUrl = titanApiUrl_1.titanApiUrl + 'sensorType/post';
    SensorTypeApiUrl.postUpdateUrl = titanApiUrl_1.titanApiUrl + 'sensorType/put';
    SensorTypeApiUrl.getByIdUrl = titanApiUrl_1.titanApiUrl + 'sensorType/get';
    return SensorTypeApiUrl;
}());
exports.SensorTypeApiUrl = SensorTypeApiUrl;
