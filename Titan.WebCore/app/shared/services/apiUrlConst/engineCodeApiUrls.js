"use strict";
var titanApiUrl_1 = require('./titanApiUrl');
var gridApiUrls_1 = require('./gridApiUrls');
var EngineCodeApiUrl = (function () {
    function EngineCodeApiUrl() {
    }
    EngineCodeApiUrl.gridApiUrl = gridApiUrls_1.GridApiUrl.engineCodeGridUrl;
    EngineCodeApiUrl.postCreatedUrl = titanApiUrl_1.titanApiUrl + 'engineCode/post';
    EngineCodeApiUrl.postUpdateUrl = titanApiUrl_1.titanApiUrl + 'engineCode/put';
    EngineCodeApiUrl.getByIdUrl = titanApiUrl_1.titanApiUrl + 'engineCode/get';
    return EngineCodeApiUrl;
}());
exports.EngineCodeApiUrl = EngineCodeApiUrl;
