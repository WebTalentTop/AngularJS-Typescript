"use strict";
var titanApiUrl_1 = require('./titanApiUrl');
var gridApiUrls_1 = require('./gridApiUrls');
var MarketApiUrl = (function () {
    function MarketApiUrl() {
    }
    MarketApiUrl.gridApiUrl = gridApiUrls_1.GridApiUrl.marketGridUrl;
    MarketApiUrl.postCreatedUrl = titanApiUrl_1.titanApiUrl + 'market/post';
    MarketApiUrl.postUpdateUrl = titanApiUrl_1.titanApiUrl + 'market/put';
    MarketApiUrl.getByIdUrl = titanApiUrl_1.titanApiUrl + 'market/get';
    return MarketApiUrl;
}());
exports.MarketApiUrl = MarketApiUrl;
