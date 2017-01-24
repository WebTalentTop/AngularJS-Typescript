"use strict";
var titanApiUrl_1 = require('./titanApiUrl');
var gridApiUrls_1 = require('./gridApiUrls');
var VehicleTypeApiUrl = (function () {
    function VehicleTypeApiUrl() {
    }
    VehicleTypeApiUrl.gridApiUrl = gridApiUrls_1.GridApiUrl.vehicleTypeGridUrl;
    VehicleTypeApiUrl.postCreatedUrl = titanApiUrl_1.titanApiUrl + 'vehicleType/post';
    VehicleTypeApiUrl.postUpdateUrl = titanApiUrl_1.titanApiUrl + 'vehicleType/put';
    VehicleTypeApiUrl.getByIdUrl = titanApiUrl_1.titanApiUrl + 'vehicleType/get';
    return VehicleTypeApiUrl;
}());
exports.VehicleTypeApiUrl = VehicleTypeApiUrl;
