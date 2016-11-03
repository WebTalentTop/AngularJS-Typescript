"use strict";
var titanApiUrl_1 = require('./titanApiUrl');
var PlatformApiUrl = (function () {
    function PlatformApiUrl() {
    }
    PlatformApiUrl.platformPostCreatedUrl = titanApiUrl_1.titanApiUrl + 'platform';
    PlatformApiUrl.platformPostUpdateUrl = titanApiUrl_1.titanApiUrl + 'platform';
    PlatformApiUrl.platformGetByIdUrl = titanApiUrl_1.titanApiUrl + 'platform';
    return PlatformApiUrl;
}());
exports.PlatformApiUrl = PlatformApiUrl;
//# sourceMappingURL=platformApiUrls.js.map