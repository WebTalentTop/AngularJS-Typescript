"use strict";
var titanApiUrl_1 = require('./titanApiUrl');
var gridApiUrls_1 = require('./gridApiUrls');
var ModelNameApiUrl = (function () {
    function ModelNameApiUrl() {
    }
    ModelNameApiUrl.gridApiUrl = gridApiUrls_1.GridApiUrl.modelNameGridUrl;
    ModelNameApiUrl.postCreatedUrl = titanApiUrl_1.titanApiUrl + 'modelName/post';
    ModelNameApiUrl.postUpdateUrl = titanApiUrl_1.titanApiUrl + 'modelName/put';
    ModelNameApiUrl.getByIdUrl = titanApiUrl_1.titanApiUrl + 'modelName/get';
    return ModelNameApiUrl;
}());
exports.ModelNameApiUrl = ModelNameApiUrl;
