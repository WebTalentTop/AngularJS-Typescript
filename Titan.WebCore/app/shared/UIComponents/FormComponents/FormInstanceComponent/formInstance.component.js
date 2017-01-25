"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by ZeroInfinity on 12/19/2016.
 */
var core_1 = require('@angular/core');
var IFormInstance_1 = require('../../../services/definitions/IFormInstance');
var IFormInstanceFieldDataItem_1 = require('../../../services/definitions/IFormInstanceFieldDataItem');
var FormInstanceComponent = (function () {
    function FormInstanceComponent(ls, formInstanceService, formFieldDataTypeService) {
        this.ls = ls;
        this.formInstanceService = formInstanceService;
        this.formFieldDataTypeService = formFieldDataTypeService;
        this.selectedInputList = [];
        this.closeFormInstanceDialog = new core_1.EventEmitter();
        this.formFieldDataTypeList = [];
        this.formFieldDataItemList = [];
        this.formInstance = new IFormInstance_1.FormInstance('', '', '', [], '');
        this.displayNotesDialog = false;
        this.ls.setShow(true);
    }
    FormInstanceComponent.prototype.ngOnInit = function () {
        //this.ls.logConsole("Input selectedInputList ---------", this.selectedInputList);
        //this.ls.logConsole("Input entityIdentifierId ----------", this.entityIdentifierId);
        //this.ls.logConsole("Input EntityId --------------------", this.entityId);
        //this.ls.logConsole("Input formName --------------------", this.formName);
        //this.ls.logConsole("Input formSchemaVersionId: --------", this.formSchemaVersionId);
        var _this = this;
        //this.ls.logConsole("formInstanceUpdateView----", this.formInstanceUpdateView);
        //this.ls.logConsole("FormInstanceUpdateData----", this.formInstanceUpdateData);
        var formInstanceFieldDatas = this.formInstanceUpdateData.fieldData.$values;
        //this.ls.logConsole("FormInstanceFieldDatas ---------", formInstanceFieldDatas);
        if (this.formInstanceUpdateView) {
            console.log("FormInstanceUpdateData -------", this.formInstanceUpdateData.fieldData.$values);
            console.log("FormInstance selectedInputList ----", this.selectedInputList);
        }
        if (this.selectedInputList.length > 0) {
            this.selectedInputList.map(function (inputList) {
                //this.ls.logConsole("InputList in formInstance ngOnInit ----------", inputList);
                var newFormFieldItem = {
                    value: '',
                    label: '',
                    name: '',
                    id: '',
                    data: [],
                    checkBoxValue: [],
                    selectBoxValue: [],
                    radioBoxValue: '',
                    formSchemaFieldId: '',
                    formSchemaFieldDataTypeId: '',
                    formSchemaFieldDataTypeData: [],
                    formSchemaFieldDataTypeName: ''
                };
                newFormFieldItem.formSchemaFieldId = inputList.id;
                newFormFieldItem.name = inputList.name;
                newFormFieldItem.label = inputList.label;
                newFormFieldItem.formSchemaFieldDataTypeId = inputList.formSchemaFieldDataTypeId;
                newFormFieldItem.formSchemaFieldDataTypeName = inputList.fieldDataType.name;
                var fieldTypeName = inputList.fieldDataType.name;
                var values = inputList.data.$values;
                if (fieldTypeName === "CheckBox" || fieldTypeName === "RadioBox") {
                    newFormFieldItem.checkBoxValue = [];
                    newFormFieldItem.data = [];
                    newFormFieldItem.data = values;
                    newFormFieldItem.formSchemaFieldDataTypeData = values.map(function (x) { return x.name; });
                }
                if (fieldTypeName === "SelectBox") {
                    newFormFieldItem.selectBoxValue = [];
                    newFormFieldItem.data = [];
                    newFormFieldItem.data = values;
                    newFormFieldItem.formSchemaFieldDataTypeData = values.map(function (x) { return { label: x, value: x }; });
                }
                _this.formFieldDataItemList.push(newFormFieldItem);
                return newFormFieldItem;
            });
            if (this.formInstanceUpdateView) {
                formInstanceFieldDatas.map(function (fiData) {
                    var item = _this.formFieldDataItemList
                        .filter(function (filter) { return filter.formSchemaFieldId === fiData.formSchemaFieldId; })[0];
                    if (item.formSchemaFieldDataTypeName === "TextBox") {
                        item.value = fiData.value;
                    }
                    if (item.formSchemaFieldDataTypeName === "RadioBox") {
                        item.data.map(function (i) {
                            if (i.id = fiData.data.$values[0].formSchemaFieldDataTypeDataId) {
                                item.radioBoxValue = i.name;
                            }
                        });
                    }
                    if (item.formSchemaFieldDataTypeName === "CheckBox") {
                        fiData.data.$values.map(function (fi) {
                            var fil = item.data.filter(function (filter) { return filter.id === fi.formSchemaFieldDataTypeDataId; })[0];
                            item.checkBoxValue.push(fil.name);
                        });
                    }
                    //this.ls.logConsole("FormInstance Field data ----", fiData);
                    //this.ls.logConsole("Matching Item -----", item);
                });
            }
        }
        this.formInstance.entityId = this.entityId;
        this.formInstance.entityIdentifierId = this.entityIdentifierId;
        this.formInstance.formSchemaVersionId = this.formSchemaVersionId;
        this.formInstance.notes = this.formInstanceUpdateNotes;
        this.formFieldDataTypeService.getAll()
            .subscribe(function (res) {
            //this.ls.logConsole("FormFieldDataType List  ----------", res);
            if (res.isSuccess) {
                _this.formFieldDataTypeList = res.result;
            }
        });
    };
    FormInstanceComponent.prototype.checkFieldDataType = function (id) {
        var fieldDataType = this.formFieldDataTypeList.filter(function (x) {
            if (x.id === id) {
                return x;
            }
        })[0];
        return fieldDataType;
    };
    FormInstanceComponent.prototype.collectForm = function (formValues) {
        //this.displayNotesDialog = true;
        if (this.formInstanceUpdateView) {
            this.updateForm();
        }
        else {
            this.saveForm();
        }
    };
    FormInstanceComponent.prototype.updateForm = function () {
        var _this = this;
        this.ls.logConsole("FormSubmit formFieldDataItemList values -------------", this.formFieldDataItemList);
        this.formFieldDataItemList.map(function (itemList) {
            var formInstanceItem = _this.formInstanceUpdateData
                .fieldData.$values
                .filter(function (filter) { return filter.formSchemaFieldId === itemList.formSchemaFieldId; })[0];
            itemList.id = formInstanceItem.id;
        });
        this.formInstance.fieldData = this.formFieldDataItemList.map(function (res) {
            var item = new IFormInstanceFieldDataItem_1.FormInstanceFieldDataItem('', '', '', '', []);
            if (res.formSchemaFieldDataTypeName === "CheckBox") {
                item.data = res.checkBoxValue.map(function (x) {
                    return { id: res.data.filter(function (f) { return f.name === x; })[0].id };
                });
            }
            if (res.formSchemaFieldDataTypeName === "SelectBox") {
                item.data = res.selectBoxValue.map(function (x) {
                    return { id: res.data.filter(function (f) { return f.name === x.value; })[0].id };
                });
            }
            if (res.formSchemaFieldDataTypeName === "RadioBox") {
                item.data.push({ id: res.data.filter(function (f) { return f.name === res.radioBoxValue; })[0].id });
            }
            item.value = res.value;
            item.formSchemaFieldId = res.formSchemaFieldId;
            item.formSchemaField = { id: res.formSchemaFieldId };
            item.id = res.id;
            return item;
        });
        this.formInstance.formInstanceStateId = 'BF798F6C-B846-403A-9A8E-29F008978754';
        this.ls.logConsole("FormInstance Values ----------", this.formInstance);
        var postResult = this.formInstanceService.postUpdate(this.formInstance)
            .subscribe(function (dataResult) {
            _this.ls.logConsole("DataResult From Post ----------", dataResult);
            _this.ls.logConsole("Post Result Data -----------", postResult);
            if (dataResult.isSuccess) {
                _this.formInstance = new IFormInstance_1.FormInstance('', '', '', []);
                _this.formFieldDataTypeList = [];
                _this.closeForm();
            }
            return dataResult;
        });
    };
    FormInstanceComponent.prototype.saveForm = function () {
        //this.formInstance.notes = this.notes;
        //this.displayNotesDialog = false;
        this.ls.logConsole("FormSubmit formFieldDataItemList values -------------", this.formFieldDataItemList);
        this.formInstance.fieldData = this.formFieldDataItemList.map(function (res) {
            var item = new IFormInstanceFieldDataItem_1.FormInstanceFieldDataItem('', '', '', '', []);
            if (res.formSchemaFieldDataTypeName === "CheckBox") {
                item.data = res.checkBoxValue.map(function (x) {
                    return { id: res.data.filter(function (f) { return f.name === x; })[0].id };
                });
            }
            if (res.formSchemaFieldDataTypeName === "SelectBox") {
                item.data = res.selectBoxValue.map(function (x) {
                    return { id: res.data.filter(function (f) { return f.name === x.value; })[0].id };
                });
            }
            if (res.formSchemaFieldDataTypeName === "RadioBox") {
                item.data.push({ id: res.data.filter(function (f) { return f.name === res.radioBoxValue; })[0].id });
            }
            item.value = res.value;
            item.formSchemaFieldId = res.formSchemaFieldId;
            item.formSchemaField = { id: res.formSchemaFieldId };
            return item;
        });
        this.formInstance.formInstanceStateId = 'BF798F6C-B846-403A-9A8E-29F008978754';
        this.ls.logConsole("FormInstance Values ----------", this.formInstance);
        /*var postResult = this.formInstanceService.postAdd(this.formInstance)
            .subscribe(dataResult => {
                this.ls.logConsole("DataResult From Post ----------", dataResult);
                this.ls.logConsole("Post Result Data -----------", postResult);
                if (dataResult.isSuccess) {
                    this.formInstance = new FormInstance('', '', '', []);
                    this.formFieldDataTypeList = [];
                    this.closeForm();
                }
                return dataResult;
            });*/
    };
    FormInstanceComponent.prototype.closeForm = function () {
        this.closeFormInstanceDialog.emit();
    };
    __decorate([
        core_1.Input()
    ], FormInstanceComponent.prototype, "formSchemaVersionId", void 0);
    __decorate([
        core_1.Input()
    ], FormInstanceComponent.prototype, "selectedInputList", void 0);
    __decorate([
        core_1.Input()
    ], FormInstanceComponent.prototype, "entityIdentifierId", void 0);
    __decorate([
        core_1.Input()
    ], FormInstanceComponent.prototype, "entityId", void 0);
    __decorate([
        core_1.Input()
    ], FormInstanceComponent.prototype, "formInstanceUpdateNotes", void 0);
    __decorate([
        core_1.Input()
    ], FormInstanceComponent.prototype, "formName", void 0);
    __decorate([
        core_1.Input()
    ], FormInstanceComponent.prototype, "formInstanceId", void 0);
    __decorate([
        core_1.Input()
    ], FormInstanceComponent.prototype, "formInstanceUpdateData", void 0);
    __decorate([
        core_1.Input()
    ], FormInstanceComponent.prototype, "formInstanceUpdateView", void 0);
    __decorate([
        core_1.Output()
    ], FormInstanceComponent.prototype, "closeFormInstanceDialog", void 0);
    FormInstanceComponent = __decorate([
        core_1.Component({
            selector: 'form-instance',
            templateUrl: 'app/shared/UIComponents/FormComponents/FormInstanceComponent/formInstance.component.html'
        })
    ], FormInstanceComponent);
    return FormInstanceComponent;
}());
exports.FormInstanceComponent = FormInstanceComponent;
