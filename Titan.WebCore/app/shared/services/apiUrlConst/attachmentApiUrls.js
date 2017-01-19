"use strict";
var titanApiUrl_1 = require('./titanApiUrl');
var AttachmentApiUrl = (function () {
    function AttachmentApiUrl() {
    }
    AttachmentApiUrl.getCategories = titanApiUrl_1.titanApiUrl + 'category';
    AttachmentApiUrl.getDocumentsByEntityIdentifierIdUrl = titanApiUrl_1.titanApiUrl + 'document/GetDocumentsByEntityIdentifiedId';
    AttachmentApiUrl.DeleteAttachmentByIdUrl = titanApiUrl_1.titanApiUrl + 'document/delete';
    return AttachmentApiUrl;
}());
exports.AttachmentApiUrl = AttachmentApiUrl;
