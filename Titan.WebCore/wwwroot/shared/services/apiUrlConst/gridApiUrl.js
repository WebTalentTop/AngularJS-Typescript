"use strict";
var titanApiUrl_1 = require('./titanApiUrl');
var GridApiUrl = (function () {
    function GridApiUrl() {
    }
    GridApiUrl.projectGridUrl = titanApiUrl_1.titanApiUrl + 'projectGrid/GetGridData';
    GridApiUrl.platformGridUrl = titanApiUrl_1.titanApiUrl + 'platformGrid/GetGridData';
    GridApiUrl.departmentGridUrl = titanApiUrl_1.titanApiUrl + 'departmentGrid/GetGridData';
    GridApiUrl.equipmentGridUrl = titanApiUrl_1.titanApiUrl + 'equipmentgrid/GetGridData';
    return GridApiUrl;
}());
exports.GridApiUrl = GridApiUrl;
//# sourceMappingURL=gridApiUrl.js.map