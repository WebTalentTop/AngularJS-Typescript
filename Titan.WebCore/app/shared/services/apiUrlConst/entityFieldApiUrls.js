"use strict";
var titanApiUrl_1 = require('./titanApiUrl');
var gridApiUrls_1 = require('./gridApiUrls');
var EntityFieldApiUrl = (function () {
    function EntityFieldApiUrl() {
    }
    EntityFieldApiUrl.gridApiUrl = gridApiUrls_1.GridApiUrl.entityFieldGridUrl;
    EntityFieldApiUrl.postCreatedUrl = titanApiUrl_1.titanApiUrl + 'entityField/post';
    EntityFieldApiUrl.postUpdateUrl = titanApiUrl_1.titanApiUrl + 'entityField/put';
    EntityFieldApiUrl.getByIdUrl = titanApiUrl_1.titanApiUrl + 'entityField/get';
    return EntityFieldApiUrl;
}());
exports.EntityFieldApiUrl = EntityFieldApiUrl;
