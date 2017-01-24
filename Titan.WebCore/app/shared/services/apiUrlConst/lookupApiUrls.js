"use strict";
var titanApiUrl_1 = require('./titanApiUrl');
var gridApiUrls_1 = require('./gridApiUrls');
var LookupApiUrl = (function () {
    function LookupApiUrl() {
    }
    LookupApiUrl.gridApiUrl = gridApiUrls_1.GridApiUrl.lookupGridUrl;
    LookupApiUrl.postCreatedUrl = titanApiUrl_1.titanApiUrl + 'lookup';
    LookupApiUrl.postUpdateUrl = titanApiUrl_1.titanApiUrl + 'lookup';
    LookupApiUrl.getByIdUrl = titanApiUrl_1.titanApiUrl + 'lookup';
    return LookupApiUrl;
}());
exports.LookupApiUrl = LookupApiUrl;
