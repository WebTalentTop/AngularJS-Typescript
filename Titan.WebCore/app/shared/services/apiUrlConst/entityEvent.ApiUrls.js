"use strict";
/**
 * Created by ZeroInfinity on 12/8/2016.
 */
var titanApiUrl_1 = require('./titanApiUrl');
var EntityEventApiUrl = (function () {
    function EntityEventApiUrl() {
    }
    //public static gridApiUrl:string  = GridApiUrl.formSchemaCategoryGridUrl;
    EntityEventApiUrl.postCreatedUrl = titanApiUrl_1.titanApiUrl + 'entityEvent';
    EntityEventApiUrl.postUpdateUrl = titanApiUrl_1.titanApiUrl + 'entityEvent';
    EntityEventApiUrl.getByIdUrl = titanApiUrl_1.titanApiUrl + 'entityEvent';
    EntityEventApiUrl.getAllUrl = titanApiUrl_1.titanApiUrl + 'entityEvent';
    EntityEventApiUrl.getFindByEntityIdentifierId = titanApiUrl_1.titanApiUrl + 'entityEvent/getFindByEntityIdentifierId';
    return EntityEventApiUrl;
}());
exports.EntityEventApiUrl = EntityEventApiUrl;
