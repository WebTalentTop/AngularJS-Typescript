"use strict";
var titanApiUrl_1 = require('./titanApiUrl');
var gridApiUrls_1 = require('./gridApiUrls');
var TenantApiUrl = (function () {
    function TenantApiUrl() {
    }
    TenantApiUrl.gridApiUrl = gridApiUrls_1.GridApiUrl.tenantGridUrl;
    TenantApiUrl.postCreatedUrl = titanApiUrl_1.titanApiUrl + 'tenant';
    TenantApiUrl.postUpdateUrl = titanApiUrl_1.titanApiUrl + 'tenant';
    TenantApiUrl.getByIdUrl = titanApiUrl_1.titanApiUrl + 'tenant';
    return TenantApiUrl;
}());
exports.TenantApiUrl = TenantApiUrl;
