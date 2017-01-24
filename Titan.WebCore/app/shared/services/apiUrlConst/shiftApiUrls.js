"use strict";
var titanApiUrl_1 = require('./titanApiUrl');
var gridApiUrls_1 = require('./gridApiUrls');
var ShiftApiUrl = (function () {
    function ShiftApiUrl() {
    }
    ShiftApiUrl.gridApiUrl = gridApiUrls_1.GridApiUrl.shiftGridUrl;
    ShiftApiUrl.postCreatedUrl = titanApiUrl_1.titanApiUrl + 'shift/post';
    ShiftApiUrl.postUpdateUrl = titanApiUrl_1.titanApiUrl + 'shift/put';
    ShiftApiUrl.getByIdUrl = titanApiUrl_1.titanApiUrl + 'shift/get';
    return ShiftApiUrl;
}());
exports.ShiftApiUrl = ShiftApiUrl;
