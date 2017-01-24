"use strict";
var titanApiUrl_1 = require('./titanApiUrl');
var gridApiUrls_1 = require('./gridApiUrls');
var MilestoneCategoryApiUrl = (function () {
    function MilestoneCategoryApiUrl() {
    }
    MilestoneCategoryApiUrl.gridApiUrl = gridApiUrls_1.GridApiUrl.milestoneCategoryGridUrl;
    MilestoneCategoryApiUrl.postCreatedUrl = titanApiUrl_1.titanApiUrl + 'milestoneCategory/post';
    MilestoneCategoryApiUrl.postUpdateUrl = titanApiUrl_1.titanApiUrl + 'milestoneCategory/put';
    MilestoneCategoryApiUrl.getByIdUrl = titanApiUrl_1.titanApiUrl + 'milestoneCategory/get';
    return MilestoneCategoryApiUrl;
}());
exports.MilestoneCategoryApiUrl = MilestoneCategoryApiUrl;
