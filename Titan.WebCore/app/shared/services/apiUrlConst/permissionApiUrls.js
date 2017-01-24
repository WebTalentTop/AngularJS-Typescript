"use strict";
var titanApiUrl_1 = require('./titanApiUrl');
var gridApiUrls_1 = require('./gridApiUrls');
var PermissionApiUrl = (function () {
    function PermissionApiUrl() {
    }
    PermissionApiUrl.gridApiUrl = gridApiUrls_1.GridApiUrl.permissionGridUrl;
    PermissionApiUrl.postCreatedUrl = titanApiUrl_1.titanApiUrl + 'permission/post';
    PermissionApiUrl.postUpdateUrl = titanApiUrl_1.titanApiUrl + 'permission/put';
    PermissionApiUrl.getByIdUrl = titanApiUrl_1.titanApiUrl + 'permission/get';
    return PermissionApiUrl;
}());
exports.PermissionApiUrl = PermissionApiUrl;
