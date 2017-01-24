"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var IDraggableList_1 = require('../../../shared/services/definitions/IDraggableList');
var FormBuildersComponent = (function () {
    //endregion
    function FormBuildersComponent(router, entityEventService, formSchemaService, formSchemaCategoryService, formFieldDataTypeService) {
        this.router = router;
        this.entityEventService = entityEventService;
        this.formSchemaService = formSchemaService;
        this.formSchemaCategoryService = formSchemaCategoryService;
        this.formFieldDataTypeService = formFieldDataTypeService;
        //region local variables
        this.title = "Form Builder";
        // Grid Variables
        this.gridData = [];
        this.orderNumber = 0;
        this.draggableList = new IDraggableList_1.DraggableList([], []);
        this.formFieldDataTypeList = [];
        this.droppedFormFieldDataTypeList = [];
        this.displayTextBox = false;
        this.displayNumberBox = false;
        this.displayCheckBox = false;
        this.displayRadioBox = false;
        this.displayTextAreaBox = false;
        this.displaySelectBox = false;
        this.sampleTextAreaData = "The Accord Hybrid is both technologically sophisticated and uniquely stylish. Why settle when you can have the best of both worlds?";
        this.sampleSelectBoxItems = [
            { label: 'Aisin Seiki Co', value: 'Aisin Seiki Co' },
            { label: 'Yazaki Corp.', value: 'Yazaki Corp.' },
            { label: 'Sumitomo Electric Industries', value: 'Sumitomo Electric Industries' },
            { label: 'Toyoda Gosei Co.', value: 'Toyoda Gosei Co.' },
            { label: '', value: '' }
        ];
        this.selectedInputList = [];
        this.formInputData = {
            id: '',
            formSchemaVersionId: 0,
            name: '',
            label: '',
            isRequired: false,
            maxLength: 0,
            order: 0,
            checkBoxData: '',
            radioBoxData: '',
            selectBoxData: '',
            formSchemaFieldDataTypeData: [],
            formSchemaFieldDataTypeId: ''
        };
        // selected Form Modification variables
        this.selectedFormInputData = {
            id: '',
            formSchemaVersionId: 0,
            name: '',
            label: '',
            isRequired: false,
            maxLength: 0,
            order: 0,
            checkBoxData: '',
            formSchemaFieldDataTypeData: [],
            formSchemaFieldDataTypeId: ''
        };
        this.displayCheckBoxMod = false;
        this.displayTextBoxMod = false;
        this.displayRadioBoxMod = false;
        this.displaySelectBoxMod = false;
        this.displayNumberBoxMod = false;
        this.displayTextAreaBoxMod = false;
    }
    FormBuildersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.formSchemaCategoryService.getAll()
            .subscribe(function (res) {
            console.log("Form Schema Category List-------------", res);
            _this.formSchemaCategories = res.result;
            var listFormSchemaCaterory = res.result.map(function (newRes) {
                return { label: newRes.name, value: newRes.id, entityIdentifierId: newRes.entityIdentifierId };
            });
            _this.formSchemaCategoryList = [];
            _this.formSchemaCategoryList.push({ label: 'Select Category', value: null });
            _this.formSchemaCategoryList = _this.formSchemaCategoryList.concat(listFormSchemaCaterory);
            console.log("FormSchemaCategoryList ---------", _this.formSchemaCategoryList);
            console.log("ListFormSchemaCategory -----------", listFormSchemaCaterory);
            //listFormSchemaCaterory.forEach(x=> this.formSchemaCategoryList.push(x))
        });
        // Getting FormFieldDataType List
        this.formFieldDataTypeService.getAll()
            .subscribe(function (res) {
            console.log("FormFieldDataType List  ----------", res);
            if (res.isSuccess) {
                _this.formFieldDataTypeList = res.result;
                console.log("FormFieldDataTypeList itself -----------", _this.formFieldDataTypeList);
                _this.draggableList.formFieldDataTypeList = _this.formFieldDataTypeList;
            }
        });
    };
    FormBuildersComponent.prototype.onFormSchemaCategoryChange = function (event) {
        var _this = this;
        console.log("OnFormSchemaCategoryChange ----------", event);
        console.log("SelectedFormSchemaCategory ----------", this.selectedFormSchemaCategory);
        this.formSchemaService.getFormSchemaGrid(this.selectedFormSchemaCategory)
            .subscribe(function (res) {
            console.log("FormSChemaService call ----------", res);
            _this.gridData = res.result;
        });
    };
    FormBuildersComponent.prototype.handleRowSelect = function (event) {
        console.log("HandleRowSelect Event ----------", event);
        console.log("HandleRowSelect FormInstance Selected ----------", this.selectedFormInstance);
        this.router.navigate(['admin/formBuilders/details', this.selectedFormInstance.id]);
    };
    FormBuildersComponent = __decorate([
        core_1.Component({
            selector: 'formBuilders',
            templateUrl: 'app/body/Admin/FormBuilder/formbuilder.component.html'
        })
    ], FormBuildersComponent);
    return FormBuildersComponent;
}());
exports.FormBuildersComponent = FormBuildersComponent;
