"use strict";
var titanApiUrl_1 = require('./titanApiUrl');
var DepartmentpiUrl = (function () {
    function DepartmentpiUrl() {
    }
    DepartmentpiUrl.platformPostCreatedUrl = titanApiUrl_1.titanApiUrl + 'department';
    DepartmentpiUrl.platformPostUpdateUrl = titanApiUrl_1.titanApiUrl + 'department';
    DepartmentpiUrl.platformGetByIdUrl = titanApiUrl_1.titanApiUrl + 'platform';
    return DepartmentpiUrl;
}());
exports.DepartmentpiUrl = DepartmentpiUrl;
//# sourceMappingURL=departmentApiUrls.js.map