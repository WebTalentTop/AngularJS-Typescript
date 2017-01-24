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
var FormPreviewComponent = (function () {
    function FormPreviewComponent(formFieldDataTypeService, ls) {
        this.formFieldDataTypeService = formFieldDataTypeService;
        this.ls = ls;
        this.fields = [];
        this.selectedInputList = [];
        this.formFieldDataTypeList = [];
    }
    FormPreviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.selectedInputList = this.formSchema.fields;
        this.ls.logConsole("Form Schema Passed on -----------", this.formSchema);
        this.ls.logConsole("FormSchemaCategoryList --------", this.formSchemaCategoryList);
        this.ls.logConsole("SelectedInputList passed -------", this.selectedInputList);
        this.ls.logConsole("FormName passed ----", this.formName);
        var items = this.fields.map(function (x) {
            var item = x;
            item.data = x.data.$values;
            item.formSchemaFieldDataTypeData = item.data.map(function (t) { return t.value; });
            _this.ls.logConsole("Field Item info ----", item);
        });
        this.selectedInputList = this.fields;
        this.ls.logConsole("Fields Extracted -----", this.fields);
        this.formFieldDataTypeService.getAll()
            .subscribe(function (res) {
            console.log("FormFieldDataType List  ----------", res);
            if (res.isSuccess) {
                _this.formFieldDataTypeList = res.result;
                console.log("FormFieldDataTypeList itself -----------", _this.formFieldDataTypeList);
            }
        });
    };
    FormPreviewComponent.prototype.checkFieldDataType = function (id) {
        var fieldDataType = this.formFieldDataTypeList.filter(function (x) {
            if (x.id === id) {
                return x;
            }
        })[0];
        return fieldDataType;
    };
    __decorate([
        core_1.Input()
    ], FormPreviewComponent.prototype, "formName", void 0);
    __decorate([
        core_1.Input()
    ], FormPreviewComponent.prototype, "formSchema", void 0);
    __decorate([
        core_1.Input()
    ], FormPreviewComponent.prototype, "fields", void 0);
    __decorate([
        core_1.Input()
    ], FormPreviewComponent.prototype, "selectedInputList", void 0);
    __decorate([
        core_1.Input()
    ], FormPreviewComponent.prototype, "entityEventsList", void 0);
    __decorate([
        core_1.Input()
    ], FormPreviewComponent.prototype, "formSchemaCategoryList", void 0);
    FormPreviewComponent = __decorate([
        core_1.Component({
            selector: 'form-preview',
            templateUrl: 'app/shared/UIComponents/FormComponents/FormPreviewComponent/formPreview.component.html'
        })
    ], FormPreviewComponent);
    return FormPreviewComponent;
}());
exports.FormPreviewComponent = FormPreviewComponent;
