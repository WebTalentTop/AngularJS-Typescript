"use strict";
var titanApiUrl_1 = require('./titanApiUrl');
var gridApiUrls_1 = require('./gridApiUrls');
var ProjectRoleApiUrl = (function () {
    function ProjectRoleApiUrl() {
    }
    ProjectRoleApiUrl.gridApiUrl = gridApiUrls_1.GridApiUrl.projectRoleGridUrl;
    ProjectRoleApiUrl.postCreatedUrl = titanApiUrl_1.titanApiUrl + 'projectRole/post';
    ProjectRoleApiUrl.postUpdateUrl = titanApiUrl_1.titanApiUrl + 'projectRole/put';
    ProjectRoleApiUrl.getByIdUrl = titanApiUrl_1.titanApiUrl + 'projectRole/get';
    return ProjectRoleApiUrl;
}());
exports.ProjectRoleApiUrl = ProjectRoleApiUrl;
