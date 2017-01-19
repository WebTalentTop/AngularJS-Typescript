"use strict";
var titanApiUrl_1 = require('./titanApiUrl');
var gridApiUrls_1 = require('./gridApiUrls');
var AccessApiUrl = (function () {
    function AccessApiUrl() {
    }
    AccessApiUrl.gridApiUrl = gridApiUrls_1.GridApiUrl.accessGridUrl;
    AccessApiUrl.postCreatedUrl = titanApiUrl_1.titanApiUrl + 'access/post';
    AccessApiUrl.postUpdateUrl = titanApiUrl_1.titanApiUrl + 'access/put';
    AccessApiUrl.getByIdUrl = titanApiUrl_1.titanApiUrl + 'access/get';
    return AccessApiUrl;
}());
exports.AccessApiUrl = AccessApiUrl;
