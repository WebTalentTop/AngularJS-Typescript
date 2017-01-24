"use strict";
var FormSchema = (function () {
    function FormSchema(name, isDeleted, fields, id, formSchemaCategoryIds, formSchemaEntityEvents, entityEventIds, version) {
        if (isDeleted === void 0) { isDeleted = false; }
        this.name = name;
        this.isDeleted = isDeleted;
        this.fields = fields;
        this.id = id;
        this.formSchemaCategoryIds = formSchemaCategoryIds;
        this.formSchemaEntityEvents = formSchemaEntityEvents;
        this.entityEventIds = entityEventIds;
        this.version = version;
        this.formSchemaCategoryIds = [];
        this.formSchemaEntityEvents = [];
        this.entityEventIds = [];
    }
    return FormSchema;
}());
exports.FormSchema = FormSchema;
