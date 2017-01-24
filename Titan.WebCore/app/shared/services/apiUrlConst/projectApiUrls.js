"use strict";
var titanApiUrl_1 = require('./titanApiUrl');
var gridApiUrls_1 = require('./gridApiUrls');
var ProjectApiUrl = (function () {
    function ProjectApiUrl() {
    }
    ProjectApiUrl.gridApiUrl = gridApiUrls_1.GridApiUrl.projectGridUrl;
    ProjectApiUrl.getProjectDetailsUrl = titanApiUrl_1.titanApiUrl + 'project/Get?id=';
    ProjectApiUrl.postCreatedUrl = titanApiUrl_1.titanApiUrl + 'project';
    ProjectApiUrl.postUpdateUrl = titanApiUrl_1.titanApiUrl + 'project';
    ProjectApiUrl.getAllUrl = titanApiUrl_1.titanApiUrl + 'project/GetAllProjects';
    ProjectApiUrl.getByIdUrl = titanApiUrl_1.titanApiUrl + 'project';
    ProjectApiUrl.putProjectDetailsUrl = titanApiUrl_1.titanApiUrl + 'project/Put';
    ProjectApiUrl.getBuildLevelsUrl = titanApiUrl_1.titanApiUrl + 'project/GetProjectBuildLevels?projectId=';
    ProjectApiUrl.postTorqueBookUrl = titanApiUrl_1.titanApiUrl + 'TorqueBook/Post';
    ProjectApiUrl.getTorqueBooksByBuildLevelIdUrl = titanApiUrl_1.titanApiUrl + 'TorqueBook/GetTorqueBooksByBuildLevel?projectId=';
    return ProjectApiUrl;
}());
exports.ProjectApiUrl = ProjectApiUrl;
