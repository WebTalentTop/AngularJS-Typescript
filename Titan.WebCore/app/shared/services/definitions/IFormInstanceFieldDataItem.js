"use strict";
var FormInstanceFieldDataItem = (function () {
    function FormInstanceFieldDataItem(formSchemaFieldId, formSchemaField, value, id, data) {
        this.formSchemaFieldId = formSchemaFieldId;
        this.formSchemaField = formSchemaField;
        this.value = value;
        this.id = id;
        this.data = data;
    }
    return FormInstanceFieldDataItem;
}());
exports.FormInstanceFieldDataItem = FormInstanceFieldDataItem;
