"use strict";
var titanApiUrl_1 = require('./titanApiUrl');
var gridApiUrls_1 = require('./gridApiUrls');
var UnitsApiUrl = (function () {
    function UnitsApiUrl() {
    }
    UnitsApiUrl.gridApiUrl = gridApiUrls_1.GridApiUrl.unitsGridUrl;
    UnitsApiUrl.postCreatedUrl = titanApiUrl_1.titanApiUrl + 'units/post';
    UnitsApiUrl.postUpdateUrl = titanApiUrl_1.titanApiUrl + 'units/put';
    UnitsApiUrl.getByIdUrl = titanApiUrl_1.titanApiUrl + 'units/get';
    return UnitsApiUrl;
}());
exports.UnitsApiUrl = UnitsApiUrl;
