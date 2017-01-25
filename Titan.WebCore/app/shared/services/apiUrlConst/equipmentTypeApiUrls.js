"use strict";
var titanApiUrl_1 = require('./titanApiUrl');
var gridApiUrls_1 = require('./gridApiUrls');
var EquipmentTypeApiUrl = (function () {
    function EquipmentTypeApiUrl() {
    }
    EquipmentTypeApiUrl.gridApiUrl = gridApiUrls_1.GridApiUrl.equipmentTypeGridUrl;
    EquipmentTypeApiUrl.postCreatedUrl = titanApiUrl_1.titanApiUrl + 'equipmentType/AddEquipmentSubTypes';
    EquipmentTypeApiUrl.postUpdateUrl = titanApiUrl_1.titanApiUrl + 'equipmentType/update';
    EquipmentTypeApiUrl.postdeleteUrl = titanApiUrl_1.titanApiUrl + 'equipmentType/DeleteEquipments';
    EquipmentTypeApiUrl.getByIdUrl = titanApiUrl_1.titanApiUrl + 'equipmentType';
    EquipmentTypeApiUrl.getSubTypesByIdUrl = titanApiUrl_1.titanApiUrl + 'equipmentType/GetEquipmentSubTypes';
    EquipmentTypeApiUrl.getSensorListUrl = titanApiUrl_1.titanApiUrl + 'equipmentType/GetAllEquipmentTypes';
    return EquipmentTypeApiUrl;
}());
exports.EquipmentTypeApiUrl = EquipmentTypeApiUrl;
