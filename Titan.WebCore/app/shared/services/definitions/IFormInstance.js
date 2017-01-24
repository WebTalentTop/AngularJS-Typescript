"use strict";
var FormInstance = (function () {
    function FormInstance(entityId, entityIdentifierId, formSchemaVersionId, fieldData, formInstanceStateId, id, notes) {
        this.entityId = entityId;
        this.entityIdentifierId = entityIdentifierId;
        this.formSchemaVersionId = formSchemaVersionId;
        this.fieldData = fieldData;
        this.formInstanceStateId = formInstanceStateId;
        this.id = id;
        this.notes = notes;
    }
    return FormInstance;
}());
exports.FormInstance = FormInstance;
