/**
 * Created by ZeroInfinity on 12/16/2016.
 */
"use strict";
var FormSchemaCategory = (function () {
    function FormSchemaCategory(id, name, entityIdentifierId, entitySubTypeIdentifierId, entitySubTypeId, entityIdentifierSubTypeColumnName, userCreatedById, createdOn, userModifiedById, modifiedOn, isDeleted) {
        this.id = id;
        this.name = name;
        this.entityIdentifierId = entityIdentifierId;
        this.entitySubTypeIdentifierId = entitySubTypeIdentifierId;
        this.entitySubTypeId = entitySubTypeId;
        this.entityIdentifierSubTypeColumnName = entityIdentifierSubTypeColumnName;
        this.userCreatedById = userCreatedById;
        this.createdOn = createdOn;
        this.userModifiedById = userModifiedById;
        this.modifiedOn = modifiedOn;
        this.isDeleted = isDeleted;
    }
    return FormSchemaCategory;
}());
exports.FormSchemaCategory = FormSchemaCategory;
