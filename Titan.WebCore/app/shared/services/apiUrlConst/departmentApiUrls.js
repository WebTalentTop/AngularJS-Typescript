"use strict";
var titanApiUrl_1 = require('./titanApiUrl');
var gridApiUrls_1 = require('./gridApiUrls');
var DepartmentApiUrl = (function () {
    function DepartmentApiUrl() {
    }
    DepartmentApiUrl.gridApiUrl = gridApiUrls_1.GridApiUrl.departmentGridUrl;
    DepartmentApiUrl.postCreatedUrl = titanApiUrl_1.titanApiUrl + 'department';
    DepartmentApiUrl.postUpdateUrl = titanApiUrl_1.titanApiUrl + 'department';
    DepartmentApiUrl.getByIdUrl = titanApiUrl_1.titanApiUrl + 'platform';
    DepartmentApiUrl.getAllUrl = titanApiUrl_1.titanApiUrl + 'department/GetAllDepartments';
    return DepartmentApiUrl;
}());
exports.DepartmentApiUrl = DepartmentApiUrl;
