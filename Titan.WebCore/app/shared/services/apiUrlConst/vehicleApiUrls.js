"use strict";
var titanApiUrl_1 = require('./titanApiUrl');
var gridApiUrls_1 = require('./gridApiUrls');
var VehicleApiUrl = (function () {
    function VehicleApiUrl() {
    }
    VehicleApiUrl.gridApiUrl = gridApiUrls_1.GridApiUrl.vehicleGridUrl;
    VehicleApiUrl.postCreatedUrl = titanApiUrl_1.titanApiUrl + 'vehicle';
    VehicleApiUrl.postUpdateUrl = titanApiUrl_1.titanApiUrl + 'vehicle';
    VehicleApiUrl.getByIdUrl = titanApiUrl_1.titanApiUrl + 'vehicle';
    return VehicleApiUrl;
}());
exports.VehicleApiUrl = VehicleApiUrl;
