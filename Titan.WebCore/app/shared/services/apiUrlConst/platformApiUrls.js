"use strict";
var titanApiUrl_1 = require('./titanApiUrl');
var gridApiUrls_1 = require('./gridApiUrls');
var PlatformApiUrl = (function () {
    function PlatformApiUrl() {
    }
    PlatformApiUrl.gridApiUrl = gridApiUrls_1.GridApiUrl.platformGridUrl;
    PlatformApiUrl.postCreatedUrl = titanApiUrl_1.titanApiUrl + 'platform/post';
    PlatformApiUrl.postUpdateUrl = titanApiUrl_1.titanApiUrl + 'platform/put';
    PlatformApiUrl.getByIdUrl = titanApiUrl_1.titanApiUrl + 'platform/get';
    return PlatformApiUrl;
}());
exports.PlatformApiUrl = PlatformApiUrl;
