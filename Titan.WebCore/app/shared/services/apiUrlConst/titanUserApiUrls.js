"use strict";
var titanApiUrl_1 = require('./titanApiUrl');
var gridApiUrls_1 = require('./gridApiUrls');
var TitanUserApiUrl = (function () {
    function TitanUserApiUrl() {
    }
    TitanUserApiUrl.gridApiUrl = gridApiUrls_1.GridApiUrl.titanUserGridUrl;
    TitanUserApiUrl.postCreatedUrl = titanApiUrl_1.titanApiUrl + 'titanUser/post';
    TitanUserApiUrl.postUpdateUrl = titanApiUrl_1.titanApiUrl + 'titanUser/put';
    TitanUserApiUrl.getByIdUrl = titanApiUrl_1.titanApiUrl + 'titanUser/get';
    TitanUserApiUrl.getProfileByIdUrl = titanApiUrl_1.titanApiUrl + 'titanUser/Profile';
    TitanUserApiUrl.getAllowedTenantsListUrl = titanApiUrl_1.titanApiUrl + 'titanUser/allowedTenantsList/';
    TitanUserApiUrl.putSetDefaultTenantIdUrl = titanApiUrl_1.titanApiUrl + 'titanUser/setDefaultTenant/';
    return TitanUserApiUrl;
}());
exports.TitanUserApiUrl = TitanUserApiUrl;
