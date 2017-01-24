"use strict";
var titanApiUrl_1 = require('./titanApiUrl');
var gridApiUrls_1 = require('./gridApiUrls');
var RequirementItemTypeApiUrl = (function () {
    function RequirementItemTypeApiUrl() {
    }
    RequirementItemTypeApiUrl.gridApiUrl = gridApiUrls_1.GridApiUrl.requirementItemTypeGridUrl;
    RequirementItemTypeApiUrl.postCreatedUrl = titanApiUrl_1.titanApiUrl + 'requirementItemType/post';
    RequirementItemTypeApiUrl.postUpdateUrl = titanApiUrl_1.titanApiUrl + 'requirementItemType/put';
    RequirementItemTypeApiUrl.getByIdUrl = titanApiUrl_1.titanApiUrl + 'requirementItemType/get';
    return RequirementItemTypeApiUrl;
}());
exports.RequirementItemTypeApiUrl = RequirementItemTypeApiUrl;
