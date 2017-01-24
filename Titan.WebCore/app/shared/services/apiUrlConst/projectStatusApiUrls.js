"use strict";
var titanApiUrl_1 = require('./titanApiUrl');
var gridApiUrls_1 = require('./gridApiUrls');
var ProjectStatusApiUrl = (function () {
    function ProjectStatusApiUrl() {
    }
    ProjectStatusApiUrl.gridApiUrl = gridApiUrls_1.GridApiUrl.projectStatusGridUrl;
    ProjectStatusApiUrl.postCreatedUrl = titanApiUrl_1.titanApiUrl + 'projectStatus/post';
    ProjectStatusApiUrl.postUpdateUrl = titanApiUrl_1.titanApiUrl + 'projectStatus/put';
    ProjectStatusApiUrl.getByIdUrl = titanApiUrl_1.titanApiUrl + 'projectStatus/get';
    return ProjectStatusApiUrl;
}());
exports.ProjectStatusApiUrl = ProjectStatusApiUrl;
