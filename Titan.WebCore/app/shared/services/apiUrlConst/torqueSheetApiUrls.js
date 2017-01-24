"use strict";
var titanApiUrl_1 = require('./titanApiUrl');
var TorqueSheetApiUrl = (function () {
    function TorqueSheetApiUrl() {
    }
    TorqueSheetApiUrl.torqueSheetTemplatePostUrl = titanApiUrl_1.titanApiUrl + 'TorqueSheetTemplate/Post';
    TorqueSheetApiUrl.getAllTorqueSheetTemplatesUrl = titanApiUrl_1.titanApiUrl + 'TorqueSheetTemplate/GetAll';
    TorqueSheetApiUrl.getTorqueSheetTemplatesUrl = titanApiUrl_1.titanApiUrl + 'TorqueSheetTemplate/Get?id=';
    TorqueSheetApiUrl.getTorqueSheetUrl = titanApiUrl_1.titanApiUrl + 'TorqueSheet/Get?id=';
    TorqueSheetApiUrl.putTorqueSheetTemplateUrl = titanApiUrl_1.titanApiUrl + 'TorqueSheetTemplate/Put';
    TorqueSheetApiUrl.putTorqueSheetUrl = titanApiUrl_1.titanApiUrl + 'TorqueSheet/Put?status=';
    TorqueSheetApiUrl.postNewTorqueSheetVersionUrl = titanApiUrl_1.titanApiUrl + 'TorqueSheet/CreateNewVersion';
    TorqueSheetApiUrl.postTorqueSheetUrl = titanApiUrl_1.titanApiUrl + 'TorqueSheet/Post';
    TorqueSheetApiUrl.getTorqueSheetsByTorqueBookIdUrl = titanApiUrl_1.titanApiUrl + 'TorqueSheet/GetTorqueSheetsByTorqueBook?torqueBookId=';
    TorqueSheetApiUrl.getTorqueBooksTorqueSheetNamesUrl = titanApiUrl_1.titanApiUrl + 'TorqueSheetName/GetAll?torqueBookId=';
    return TorqueSheetApiUrl;
}());
exports.TorqueSheetApiUrl = TorqueSheetApiUrl;
