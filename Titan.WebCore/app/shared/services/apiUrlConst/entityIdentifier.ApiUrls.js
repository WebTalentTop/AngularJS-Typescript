"use strict";
/**
 * Created by ZeroInfinity on 12/16/2016.
 */
var titanApiUrl_1 = require('./titanApiUrl');
//import { localizationApiUrl } from './localizationApiUrl';
//import { GridApiUrl } from './gridApiUrls';
var EntityIdentifierApiUrl = (function () {
    function EntityIdentifierApiUrl() {
    }
    //public static entityIdentifierApiUrl:string  = `${titanApiUrl}entityIdentifier`;
    EntityIdentifierApiUrl.getByIdUrl = titanApiUrl_1.titanApiUrl + "entityIdentifier/get";
    EntityIdentifierApiUrl.getByNameUrl = titanApiUrl_1.titanApiUrl + "entityIdentifier/getByName";
    EntityIdentifierApiUrl.getByNameForFormsUrl = titanApiUrl_1.titanApiUrl + "entityIdentifier/getByNameForForms";
    return EntityIdentifierApiUrl;
}());
exports.EntityIdentifierApiUrl = EntityIdentifierApiUrl;
