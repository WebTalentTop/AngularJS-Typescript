"use strict";
var titanApiUrl_1 = require('./titanApiUrl');
var gridApiUrls_1 = require('./gridApiUrls');
var AccessGroupApiUrl = (function () {
    function AccessGroupApiUrl() {
    }
    AccessGroupApiUrl.gridApiUrl = gridApiUrls_1.GridApiUrl.accessGroupGridUrl;
    AccessGroupApiUrl.postCreatedUrl = titanApiUrl_1.titanApiUrl + 'accessGroup/post';
    AccessGroupApiUrl.postUpdateUrl = titanApiUrl_1.titanApiUrl + 'accessGroup/put';
    AccessGroupApiUrl.getByIdUrl = titanApiUrl_1.titanApiUrl + 'accessGroup/get';
    return AccessGroupApiUrl;
}());
exports.AccessGroupApiUrl = AccessGroupApiUrl;
