"use strict";
var titanApiUrl_1 = require('./titanApiUrl');
var gridApiUrls_1 = require('./gridApiUrls');
var BuildLevelApiUrl = (function () {
    function BuildLevelApiUrl() {
    }
    BuildLevelApiUrl.gridApiUrl = gridApiUrls_1.GridApiUrl.buildLevelGridUrl;
    BuildLevelApiUrl.postCreatedUrl = titanApiUrl_1.titanApiUrl + 'buildLevel/post';
    BuildLevelApiUrl.postUpdateUrl = titanApiUrl_1.titanApiUrl + 'buildLevel/put';
    BuildLevelApiUrl.getByIdUrl = titanApiUrl_1.titanApiUrl + 'buildLevel/get';
    BuildLevelApiUrl.getAllUrl = titanApiUrl_1.titanApiUrl + 'buildLevel';
    return BuildLevelApiUrl;
}());
exports.BuildLevelApiUrl = BuildLevelApiUrl;
