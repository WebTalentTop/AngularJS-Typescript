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
    TorqueSheetApiUrl.postTorqueSheetUrl = titanApiUrl_1.titanApiUrl + 'TorqueSheet/Post';
    TorqueSheetApiUrl.getTorqueSheetsByTorqueBookIdUrl = titanApiUrl_1.titanApiUrl + 'TorqueSheet/GetTorqueSheetsByTorqueBook?torqueBookId=';
    return TorqueSheetApiUrl;
}());
exports.TorqueSheetApiUrl = TorqueSheetApiUrl;
