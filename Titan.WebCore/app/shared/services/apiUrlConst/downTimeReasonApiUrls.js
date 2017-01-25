"use strict";
var titanApiUrl_1 = require('./titanApiUrl');
var gridApiUrls_1 = require('./gridApiUrls');
var DownTimeReasonApiUrl = (function () {
    function DownTimeReasonApiUrl() {
    }
    DownTimeReasonApiUrl.gridApiUrl = gridApiUrls_1.GridApiUrl.downTimeReasonGridUrl;
    DownTimeReasonApiUrl.postCreatedUrl = titanApiUrl_1.titanApiUrl + 'downTimeReason/post';
    DownTimeReasonApiUrl.postUpdateUrl = titanApiUrl_1.titanApiUrl + 'downTimeReason/put';
    DownTimeReasonApiUrl.getByIdUrl = titanApiUrl_1.titanApiUrl + 'downTimeReason/get';
    return DownTimeReasonApiUrl;
}());
exports.DownTimeReasonApiUrl = DownTimeReasonApiUrl;
