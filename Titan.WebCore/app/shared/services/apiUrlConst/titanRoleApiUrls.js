"use strict";
var titanApiUrl_1 = require('./titanApiUrl');
var gridApiUrls_1 = require('./gridApiUrls');
var TitanRoleApiUrl = (function () {
    function TitanRoleApiUrl() {
    }
    TitanRoleApiUrl.gridApiUrl = gridApiUrls_1.GridApiUrl.titanRoleGridUrl;
    TitanRoleApiUrl.postCreatedUrl = titanApiUrl_1.titanApiUrl + 'titanRole/post';
    TitanRoleApiUrl.postUpdateUrl = titanApiUrl_1.titanApiUrl + 'titanRole/put';
    TitanRoleApiUrl.getByIdUrl = titanApiUrl_1.titanApiUrl + 'titanRole/get';
    return TitanRoleApiUrl;
}());
exports.TitanRoleApiUrl = TitanRoleApiUrl;
