"use strict";
var titanApiUrl_1 = require('./titanApiUrl');
var gridApiUrls_1 = require('./gridApiUrls');
var RoleApiUrl = (function () {
    function RoleApiUrl() {
    }
    RoleApiUrl.gridApiUrl = gridApiUrls_1.GridApiUrl.roleGridUrl;
    RoleApiUrl.postCreatedUrl = titanApiUrl_1.titanApiUrl + 'role/post';
    RoleApiUrl.postUpdateUrl = titanApiUrl_1.titanApiUrl + 'role/put';
    RoleApiUrl.getByIdUrl = titanApiUrl_1.titanApiUrl + 'role/get';
    return RoleApiUrl;
}());
exports.RoleApiUrl = RoleApiUrl;
