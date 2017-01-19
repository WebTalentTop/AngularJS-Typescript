"use strict";
var titanApiUrl_1 = require('./titanApiUrl');
var gridApiUrls_1 = require('./gridApiUrls');
var DetailsApiUrl = (function () {
    function DetailsApiUrl() {
    }
    DetailsApiUrl.gridApiUrl = gridApiUrls_1.GridApiUrl.detailsGridUrl;
    DetailsApiUrl.postCreatedUrl = titanApiUrl_1.titanApiUrl + 'details';
    DetailsApiUrl.postUpdateUrl = titanApiUrl_1.titanApiUrl + 'details';
    DetailsApiUrl.getByIdUrl = titanApiUrl_1.titanApiUrl + 'details';
    return DetailsApiUrl;
}());
exports.DetailsApiUrl = DetailsApiUrl;
