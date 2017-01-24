"use strict";
var titanApiUrl_1 = require('./titanApiUrl');
var gridApiUrls_1 = require('./gridApiUrls');
var EquipmentApiUrl = (function () {
    function EquipmentApiUrl() {
    }
    EquipmentApiUrl.gridApiUrl = gridApiUrls_1.GridApiUrl.equipmentGridUrl;
    EquipmentApiUrl.postCreatedUrl = titanApiUrl_1.titanApiUrl + 'equipment';
    EquipmentApiUrl.getLogComments = titanApiUrl_1.titanApiUrl + 'equipment/GetEquipmentLogCommentByEquipmentId';
    EquipmentApiUrl.PostLogCommentsUrl = titanApiUrl_1.titanApiUrl + 'equipment/PostLogComments';
    EquipmentApiUrl.postManufacturerCreatedUrl = titanApiUrl_1.titanApiUrl + 'equipmentManufacturer';
    EquipmentApiUrl.postUpdateUrl = titanApiUrl_1.titanApiUrl + 'equipment/put';
    EquipmentApiUrl.getByIdUrl = titanApiUrl_1.titanApiUrl + 'equipment';
    EquipmentApiUrl.getManufacturerDetailsByIdUrl = titanApiUrl_1.titanApiUrl + 'equipmentManufacturer';
    EquipmentApiUrl.getAllUrl = titanApiUrl_1.titanApiUrl + 'equipmentManufacturer';
    EquipmentApiUrl.getAllEquipmentTypesUrl = titanApiUrl_1.titanApiUrl + 'Equipmenttype/GetAllEquipmentTypes';
    return EquipmentApiUrl;
}());
exports.EquipmentApiUrl = EquipmentApiUrl;
