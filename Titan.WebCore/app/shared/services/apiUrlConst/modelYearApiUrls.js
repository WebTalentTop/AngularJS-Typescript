"use strict";
var titanApiUrl_1 = require('./titanApiUrl');
var gridApiUrls_1 = require('./gridApiUrls');
var ModelYearApiUrl = (function () {
    function ModelYearApiUrl() {
    }
    ModelYearApiUrl.gridApiUrl = gridApiUrls_1.GridApiUrl.modelYearGridUrl;
    ModelYearApiUrl.postCreatedUrl = titanApiUrl_1.titanApiUrl + 'modelYear/post';
    ModelYearApiUrl.postUpdateUrl = titanApiUrl_1.titanApiUrl + 'modelYear/put';
    ModelYearApiUrl.getByIdUrl = titanApiUrl_1.titanApiUrl + 'modelYear/get';
    return ModelYearApiUrl;
}());
exports.ModelYearApiUrl = ModelYearApiUrl;
