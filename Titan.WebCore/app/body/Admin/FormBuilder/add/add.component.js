"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by ZeroInfinity on 12/26/2016.
 */
var core_1 = require("@angular/core");
var IFormSchema_1 = require("../../../../shared/services/definitions/IFormSchema");
var IDraggableList_1 = require('../../../../shared/services/definitions/IDraggableList');
var AddFormComponent = (function () {
    function AddFormComponent(router, entityEventService, formSchemaService, formSchemaCategoryService, formFieldDataTypeService) {
        this.router = router;
        this.entityEventService = entityEventService;
        this.formSchemaService = formSchemaService;
        this.formSchemaCategoryService = formSchemaCategoryService;
        this.formFieldDataTypeService = formFieldDataTypeService;
        this.title = "Form Builder";
        this.orderNumber = 0;
        this.draggableList = new IDraggableList_1.DraggableList([], []);
        this.formFieldDataTypeList = [];
        this.droppedFormFieldDataTypeList = [];
        //region Adding Fields Dialog Display Variables
        this.displayTextBox = false;
        this.displayNumberBox = false;
        this.displayCheckBox = false;
        this.displayRadioBox = false;
        this.displayTextAreaBox = false;
        this.displaySelectBox = false;
        //endregion
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
        //region selected Form Modification variables
        this.selectedFormInputData = {
            id: '',
            formSchemaVersionId: 0,
            name: '',
            label: '',
            isRequired: false,
            maxLength: 0,
            order: 0,
            data: [],
            checkBoxData: '',
            formSchemaFieldDataTypeData: [],
            formSchemaFieldDataTypeId: ''
        };
        //endregion
        //region Popup Dialog Display Variables
        this.displayCheckBoxMod = false;
        this.displayTextBoxMod = false;
        this.displayRadioBoxMod = false;
        this.displaySelectBoxMod = false;
        this.displayNumberBoxMod = false;
        this.displayTextAreaBoxMod = false;
        this.displaySaveFormMessage = false;
        //endregion
        this.msgs = [];
    }
    AddFormComponent.prototype.ngOnInit = function () {
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
    //region Drag Events
    AddFormComponent.prototype.dragStart = function (event, item) {
        this.draggedItem = item;
    };
    AddFormComponent.prototype.dragEnd = function (event) {
    };
    AddFormComponent.prototype.drop = function (event) {
        console.log("Drop dragged item in the -------", this.draggedItem);
        this.switchDropDialog(this.draggedItem.name);
        var innertext = event.path[0].innerText;
        this.formInputData.formSchemaFieldDataTypeId = this.draggedItem.id;
        //this.formInputData.name = this.draggedItem.name;
        console.log("inner Text is --------", innertext);
    };
    //endregion
    AddFormComponent.prototype.switchDropDialog = function (name) {
        switch (name) {
            case "TextBox":
                console.log("Dragged is Input");
                this.displayTextBox = true;
                break;
            case "NumberBox":
                console.log("Dragged is Number");
                this.displayNumberBox = true;
                break;
            case "RadioBox":
                console.log("Dragged is Radio");
                this.displayRadioBox = true;
                break;
            case "CheckBox":
                console.log("Dragged is Check");
                this.displayCheckBox = true;
                break;
            case "SelectBox":
                console.log("Dragged is Select");
                this.displaySelectBox = true;
                break;
            case "TextAreaBox":
                console.log("Dragged is Radio");
                this.displayTextAreaBox = true;
                break;
        }
    };
    AddFormComponent.prototype.checkFieldDataType = function (id) {
        var fieldDataType = this.formFieldDataTypeList.filter(function (x) {
            if (x.id === id) {
                return x;
            }
        })[0];
        return fieldDataType;
    };
    AddFormComponent.prototype.removeItem = function (item) {
        this.draggableList.selectedInputList = this.selectedInputList.filter(function (x) { return x != item; });
    };
    //region Adding Field Dialog Saves
    AddFormComponent.prototype.saveTextBox = function () {
        this.displayTextBox = false;
        this.saveTextBoxData();
    };
    AddFormComponent.prototype.saveTextAreaBox = function () {
        this.displayTextAreaBox = false;
        this.saveTextBoxData();
    };
    AddFormComponent.prototype.saveSelectBox = function () {
        this.displaySelectBox = false;
        this.saveSelectBoxData();
    };
    AddFormComponent.prototype.saveCheckBox = function () {
        this.displayCheckBox = false;
        this.saveCheckBoxData();
    };
    AddFormComponent.prototype.saveRadioBox = function () {
        this.displayRadioBox = false;
        this.saveRadioBoxData();
    };
    AddFormComponent.prototype.saveNumberBox = function () {
        this.displayNumberBox = false;
        this.saveTextBoxData();
    };
    AddFormComponent.prototype.saveTextBoxData = function () {
        this.formInputData.order = this.orderNumber++;
        var copyData = Object.assign({}, this.formInputData);
        this.draggableList.selectedInputList.push(copyData);
        this.formInputData.name = '';
        this.formInputData.label = '';
        this.formInputData.maxLength = 0;
        this.formInputData.isRequired = false;
        this.formInputData.order = 0;
        console.log('FormInputData ---------', this.formInputData);
        console.log("copyData ---------", copyData);
        console.log("SelectedInputList ----------", this.selectedInputList);
    };
    AddFormComponent.prototype.saveCheckBoxData = function () {
        this.formInputData.order = this.orderNumber++;
        this.formInputData.formSchemaFieldDataTypeData = this.formInputData.checkBoxData.split("\n");
        this.selectedFormInputData.data = this.formInputData.formSchemaFieldDataTypeData.map(function (x) { return { name: x, value: x }; });
        this.formInputData.data = this.selectedFormInputData.data;
        var copyData = Object.assign({}, this.formInputData);
        this.draggableList.selectedInputList.push(copyData);
        this.formInputData.name = '';
        this.formInputData.label = '';
        this.formInputData.maxLength = 0;
        this.formInputData.isRequired = false;
        this.formInputData.order = 0;
        this.formInputData.checkBoxData = '';
        console.log('FormInputData in CheckBoxData ---------', this.formInputData);
        console.log("copyData ---------", copyData);
        console.log("SelectedInputList ----------", this.selectedInputList);
    };
    AddFormComponent.prototype.saveSelectBoxData = function () {
        this.formInputData.order = this.orderNumber++;
        this.sampleSelectBoxItems = this.formInputData.selectBoxData.split("\n").map(function (item) {
            return { label: item, value: item };
        });
        this.formInputData.formSchemaFieldDataTypeData = this.formInputData.selectBoxData.split("\n");
        this.selectedFormInputData.data = this.formInputData.formSchemaFieldDataTypeData.map(function (x) { return { name: x, value: x }; });
        this.formInputData.data = this.selectedFormInputData.data;
        var copyData = Object.assign({}, this.formInputData);
        this.draggableList.selectedInputList.push(copyData);
        this.formInputData.name = '';
        this.formInputData.label = '';
        this.formInputData.maxLength = 0;
        this.formInputData.isRequired = false;
        this.formInputData.order = 0;
        this.formInputData.selectBoxData = '';
        console.log('FormInputData in CheckBoxData ---------', this.formInputData);
        console.log("copyData ---------", copyData);
        console.log("SelectedInputList ----------", this.selectedInputList);
    };
    AddFormComponent.prototype.saveRadioBoxData = function () {
        this.formInputData.order = this.orderNumber++;
        this.formInputData.formSchemaFieldDataTypeData = this.formInputData.radioBoxData.split("\n");
        this.selectedFormInputData.data = this.formInputData.formSchemaFieldDataTypeData.map(function (x) { return { name: x, value: x }; });
        this.formInputData.data = this.selectedFormInputData.data;
        var copyData = Object.assign({}, this.formInputData);
        this.draggableList.selectedInputList.push(copyData);
        this.formInputData.name = '';
        this.formInputData.label = '';
        this.formInputData.maxLength = 0;
        this.formInputData.isRequired = false;
        this.formInputData.order = 0;
        this.formInputData.radioBoxData = '';
        console.log('FormInputData in CheckBoxData ---------', this.formInputData);
        console.log("copyData ---------", copyData);
        console.log("SelectedInputList ----------", this.selectedInputList);
    };
    //endregion
    AddFormComponent.prototype.onFormSchemaCategoryChange = function (event) {
        var _this = this;
        var entityIdentifierId = this.formSchemaCategoryList.filter(function (category) { return category.value === event.value; })[0].entityIdentifierId;
        console.log("EntityIdentifier --------", entityIdentifierId);
        this.entityEventService.getFindByEntityIdentifierId(entityIdentifierId)
            .subscribe(function (res) {
            _this.entityEvents = res.result.map(function (item) {
                return { label: item.name, value: item.id, entityIdentifierId: entityIdentifierId };
            });
            _this.entityEventsList = [];
            _this.entityEventsList.push({ label: 'Select Entity Event', value: null });
            _this.entityEvents.forEach(function (item) { return _this.entityEventsList.push(item); });
            console.log("EntityEventsList -----", _this.entityEventsList);
        });
    };
    // Popup Windows for editing form
    AddFormComponent.prototype.showOverlayPopInfo = function ($event, item, i) {
        console.log("Event In ShowOverlayPopInfo -----", $event);
        console.log("ShowOverlayInfo ------", item);
        console.log("ShowOverlay Index-------", i);
        var name = this.checkFieldDataType(item.formSchemaFieldDataTypeId).name;
        this.showModBox(name, true);
        this.selectedFormInputData = item;
        this.selectedFormInputDataIndex = i;
    };
    AddFormComponent.prototype.updateCheckBoxData = function () {
        var items = this.selectedFormInputData.checkBoxData.split("\n");
        this.selectedFormInputData.formSchemaFieldDataTypeData = items.filter(function (x) { return x != ''; });
        this.selectedFormInputData.data = this.formInputData.formSchemaFieldDataTypeData.map(function (x) { return { name: x, value: x }; });
    };
    AddFormComponent.prototype.updateRadioBoxData = function () {
        var items = this.selectedFormInputData.radioBoxData.split("\n");
        this.selectedFormInputData.formSchemaFieldDataTypeData = items.filter(function (x) { return x != ''; });
        this.selectedFormInputData.data = this.formInputData.formSchemaFieldDataTypeData.map(function (x) { return { name: x, value: x }; });
    };
    AddFormComponent.prototype.updateSelectBoxData = function () {
        this.sampleSelectBoxItems = this.selectedFormInputData.selectBoxData.split("\n").map(function (res) {
            return { label: res, value: res };
        });
        var items = this.selectedFormInputData.selectBoxData.split("\n");
        this.selectedFormInputData.formSchemaFieldDataTypeData = items.filter(function (x) { return x != ''; });
        this.selectedFormInputData.data = this.formInputData.formSchemaFieldDataTypeData.map(function (x) { return { name: x, value: x }; });
    };
    AddFormComponent.prototype.saveCheckBoxMod = function () {
        var name = this.checkFieldDataType(this.selectedFormInputData.formSchemaFieldDataTypeId).name;
        this.selectedFormInputData.data = this.formInputData.formSchemaFieldDataTypeData.map(function (x) { return { name: x, value: x }; });
        this.formInputData.data = this.selectedFormInputData.data;
        this.showModBox(name, false);
        if (name === 'CheckBox') {
            this.updateCheckBoxData();
        }
        console.log("SelectedFormInputData ----------", this.selectedFormInputData);
    };
    AddFormComponent.prototype.saveTextBoxMod = function () {
        var name = this.checkFieldDataType(this.selectedFormInputData.formSchemaFieldDataTypeId).name;
        this.showModBox(name, false);
        console.log("TextBox?AreaFormInputData ----------", this.selectedFormInputData);
    };
    AddFormComponent.prototype.saveRadioBoxMod = function () {
        var name = this.checkFieldDataType(this.selectedFormInputData.formSchemaFieldDataTypeId).name;
        this.selectedFormInputData.data = this.formInputData.formSchemaFieldDataTypeData.map(function (x) { return { name: x, value: x }; });
        this.formInputData.data = this.selectedFormInputData.data;
        this.showModBox(name, false);
        if (name === 'RadioBox') {
            this.updateRadioBoxData();
        }
        console.log("SelectedFormInputData ----------", this.selectedFormInputData);
    };
    AddFormComponent.prototype.saveSelectBoxMod = function () {
        var name = this.checkFieldDataType(this.selectedFormInputData.formSchemaFieldDataTypeId).name;
        this.selectedFormInputData.data = this.formInputData.formSchemaFieldDataTypeData.map(function (x) { return { name: x, value: x }; });
        this.formInputData.data = this.selectedFormInputData.data;
        this.showModBox(name, false);
        if (name === 'SelectBox') {
            this.updateSelectBoxData();
        }
        console.log("SelectedFormInputData ----------", this.selectedFormInputData);
    };
    AddFormComponent.prototype.removeItemCheckBoxMod = function (item) {
        this.displayCheckBoxMod = false;
        console.log("CheckBoxModRemoveItem ----------", item);
        this.draggableList.selectedInputList = this.selectedInputList.filter(function (x) { return x != item; });
    };
    AddFormComponent.prototype.removeItemRadioBoxMod = function (item) {
        this.displayRadioBoxMod = false;
        console.log("RadioBoxModRemoveItem ----------", item);
        this.draggableList.selectedInputList = this.selectedInputList.filter(function (x) { return x != item; });
    };
    AddFormComponent.prototype.removeItemSelectBoxMod = function (item) {
        this.displaySelectBoxMod = false;
        console.log("SelectBoxModRemoveItem ----------", item);
        this.draggableList.selectedInputList = this.selectedInputList.filter(function (x) { return x != item; });
    };
    AddFormComponent.prototype.showModBox = function (name, show) {
        switch (name) {
            case 'CheckBox':
                this.displayCheckBoxMod = show;
                break;
            case 'TextBox':
                this.displayTextBoxMod = show;
                break;
            case 'NumberBox':
                this.displayNumberBoxMod = show;
                break;
            case 'RadioBox':
                this.displayRadioBoxMod = show;
                break;
            case 'SelectBox':
                this.displaySelectBoxMod = show;
                break;
            case 'TextAreaBox':
                this.displayTextAreaBoxMod = show;
                break;
        }
    };
    AddFormComponent.prototype.saveForm = function () {
        var _this = this;
        var formSchemaData = new IFormSchema_1.FormSchema('', false, []);
        formSchemaData.name = this.formName;
        formSchemaData.fields = this.draggableList.selectedInputList;
        formSchemaData.formSchemaCategoryIds.push(this.selectedFormSchemaCategory);
        formSchemaData.entityEventIds.push(this.selectedEntityEvent);
        formSchemaData.formSchemaEntityEvents.push({
            entityEventId: this.selectedEntityEvent
        });
        console.log("Form to sent ---------", formSchemaData);
        this.formSchemaService.postAdd(formSchemaData)
            .subscribe(function (res) {
            console.log("Form Schema Create post return Res--------", res);
            if (res.isSuccess) {
                _this.msgs.push({ severity: 'success', summary: 'Form has been saved. ', detail: 'We are redirecting you to Form Builders home page to look at the forms list.' });
                _this.displaySaveFormMessage = true;
                setTimeout(function () {
                    _this.displaySaveFormMessage = false;
                    _this.router.navigate(['/admin/formBuilders']);
                }, 5000);
            }
        });
        console.log('formschema Create called');
    };
    AddFormComponent = __decorate([
        core_1.Component({
            selector: 'addform',
            templateUrl: 'app/body/Admin/FormBuilder/Add/add.component.html'
        })
    ], AddFormComponent);
    return AddFormComponent;
}());
exports.AddFormComponent = AddFormComponent;
