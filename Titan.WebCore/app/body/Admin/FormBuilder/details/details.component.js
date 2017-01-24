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
var DetailsComponent = (function () {
    //endregion
    function DetailsComponent(activatedRoute, router, entityEventService, formSchemaService, formSchemaCategoryService, formFieldDataTypeService) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.entityEventService = entityEventService;
        this.formSchemaService = formSchemaService;
        this.formSchemaCategoryService = formSchemaCategoryService;
        this.formFieldDataTypeService = formFieldDataTypeService;
        //region local variables for the class
        this.title = "Form Builder";
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
        this.activatedRoute.params.subscribe(function (params) {
            _this.formSchemaId = params['id'];
            console.log("FormSchemaId from Params ----------", _this.formSchemaId);
        });
    }
    DetailsComponent.prototype.ngOnInit = function () {
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
            _this.formSchemaService.getById(_this.formSchemaId)
                .subscribe(function (res) {
                console.log("formSchemaService getById result ----------", res.result);
                var result = res.result;
                var fields = result.fields.$values;
                var entityEventId = result.formSchemaEntityEvents.$values[0].entityEventId;
                _this.selectedEntityEvent = entityEventId;
                var formSchemaVersionId = result.formSchemaVersion.id;
                var formSchemaCategoriesToSelect = result.formSchemaCategories.$values[0].formSchemaCategory;
                _this.formName = result.name;
                _this.draggableList.selectedInputList = fields.map(function (m) {
                    var formSchemaField = m;
                    console.log("Data Values from the server -----", m.data.$values);
                    formSchemaField.data = m.data.$values.map(function (x) { return { name: x.name, value: x.name }; });
                    formSchemaField.formSchemaFieldDataTypeData = formSchemaField.data.map(function (d) { return d.name; });
                    if (m.fieldDataType.name === "CheckBox") {
                        formSchemaField.checkBoxData = formSchemaField.formSchemaFieldDataTypeData.join("\n");
                    }
                    if (m.fieldDataType.name === "RadioBox") {
                        formSchemaField.radioBoxData = formSchemaField.formSchemaFieldDataTypeData.join("\n");
                    }
                    if (m.fieldDataType.name === "SelectBox") {
                        formSchemaField.data = formSchemaField.formSchemaFieldDataTypeData.map(function (x) { return { label: x, value: x }; });
                        formSchemaField.selectBoxData = formSchemaField.formSchemaFieldDataTypeData.join("\n");
                    }
                    return formSchemaField;
                });
                //console.log("DraggableList.selectedInputList -----", this.draggableList.selectedInputList);
                _this.selectedFormSchemaCategory = formSchemaCategoriesToSelect.id;
                if (formSchemaCategoriesToSelect.id) {
                    _this.entityEventListDropDown(_this.selectedFormSchemaCategory);
                }
            });
        });
    };
    /*    private onDrag(args:any):void {
     let [e] = args;
     this.removeClass(e, 'ex-moved');
     }

     private onOver(args:any):void {
     let [el] = args;
     this.addClass(el, 'ex-over');
     }

     private onOut(args: any): void {
     let [e, el, container] = args;
     this.removeClass(el, 'ex-over');

     console.log("OnOut ---- e ---",e.id);
     console.log("OnOut ---- el ---",el);
     console.log("OnOut ---- container ---",container);

     /!*console.log("--------- On Out Dropped Items Vlaue", this.dropedItems);
     console.log("--------- InnerHtml -----------", e.innerHTML);
     console.log("---------- e ----------", e);
     console.log("---------- el ----------", el);
     console.log("---------- container ----------", container);*!/
     }

     private onDrop(args: any): void {
     let [el, target, sour] = args;
     console.log("OnDrop ---- el ---",el);
     console.log("OnDrop ---- target ---",target);
     console.log("OnDrop ---- sour ---",sour);


     }*/
    DetailsComponent.prototype.dragStart = function (event, item) {
        this.draggedItem = item;
    };
    DetailsComponent.prototype.dragEnd = function (event) {
    };
    DetailsComponent.prototype.drop = function (event) {
        //console.log("Drop dragged item in the -------", this.draggedItem);
        this.switchDropDialog(this.draggedItem.name);
        var innertext = event.path[0].innerText;
        this.formInputData.formSchemaFieldDataTypeId = this.draggedItem.id;
        //this.formInputData.name = this.draggedItem.name;
        console.log("inner Text is --------", innertext);
    };
    DetailsComponent.prototype.switchDropDialog = function (name) {
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
    DetailsComponent.prototype.checkFieldDataType = function (id) {
        var fieldDataType = this.formFieldDataTypeList.filter(function (x) {
            if (x.id === id) {
                return x;
            }
        })[0];
        return fieldDataType;
    };
    DetailsComponent.prototype.removeItem = function (item) {
        this.draggableList.selectedInputList = this.selectedInputList.filter(function (x) { return x != item; });
    };
    DetailsComponent.prototype.saveTextBox = function () {
        this.displayTextBox = false;
        this.saveTextBoxData();
    };
    DetailsComponent.prototype.saveTextAreaBox = function () {
        this.displayTextAreaBox = false;
        this.saveTextBoxData();
    };
    DetailsComponent.prototype.saveCheckBox = function () {
        this.displayCheckBox = false;
        this.saveCheckBoxData();
    };
    DetailsComponent.prototype.saveRadioBox = function () {
        this.displayRadioBox = false;
        this.saveRadioBoxData();
    };
    DetailsComponent.prototype.saveSelectBox = function () {
        this.displaySelectBox = false;
        this.saveSelectBoxData();
    };
    DetailsComponent.prototype.saveNumberBox = function () {
        this.displayNumberBox = false;
        this.saveTextBoxData();
    };
    DetailsComponent.prototype.saveTextBoxData = function () {
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
    DetailsComponent.prototype.saveCheckBoxData = function () {
        this.formInputData.order = this.orderNumber++;
        this.formInputData.formSchemaFieldDataTypeData = this.formInputData.checkBoxData.split("\n");
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
    DetailsComponent.prototype.saveSelectBoxData = function () {
        this.formInputData.order = this.orderNumber++;
        this.sampleSelectBoxItems = this.formInputData.selectBoxData.split("\n").map(function (item) {
            return { label: item, value: item };
        });
        this.formInputData.formSchemaFieldDataTypeData = this.formInputData.selectBoxData.split("\n");
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
    DetailsComponent.prototype.saveRadioBoxData = function () {
        this.formInputData.order = this.orderNumber++;
        this.formInputData.formSchemaFieldDataTypeData = this.formInputData.radioBoxData.split("\n");
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
    DetailsComponent.prototype.onFormSchemaCategoryChange = function (event) {
        this.entityEventListDropDown(event.value);
    };
    DetailsComponent.prototype.entityEventListDropDown = function (item) {
        var _this = this;
        var entityIdentifierId = this.formSchemaCategoryList.filter(function (category) { return category.value === item; })[0].entityIdentifierId;
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
    DetailsComponent.prototype.saveForm = function () {
        var formSchemaData = new IFormSchema_1.FormSchema('', false, []);
        formSchemaData.id = this.formSchemaId;
        formSchemaData.name = this.formName;
        formSchemaData.fields = this.draggableList.selectedInputList;
        formSchemaData.formSchemaCategoryIds.push(this.selectedFormSchemaCategory);
        formSchemaData.formSchemaEntityEvents.push({
            entityEventId: this.selectedEntityEvent
        });
        console.log("Form to sent ---------", formSchemaData);
        this.formSchemaService.postUpdate(formSchemaData)
            .subscribe(function (res) {
            console.log("Form Schema Create post return Res--------", res);
        });
        console.log('formschema Create called');
    };
    /* dragEl:HTMLElement;
     rootEl:HTMLDivElement;
     onDragOver(evt) {
     evt.preventDefault();
     evt.dataTransfer.dropEffect = 'move';

     var target = evt.target;
     if( target && target !== this.dragEl && target.nodeName == 'LI' ){
     // Сортируем
     this.rootEl.insertBefore(this.dragEl, target.nextSibling || target);
     }
     }

     // Окончание сортировки
     onDragEnd(evt){
     evt.preventDefault();

     this.dragEl.classList.remove('ghost');

     // Сообщаем об окончании сортировки
     this.onUpdate(this.dragEl);
     }

     // Начало сортировки
     dragstart(evt) {
     this.dragEl = evt.target; // Запоминаем элемент который будет перемещать

     // Ограничиваем тип перетаскивания
     evt.dataTransfer.effectAllowed = 'move';
     evt.dataTransfer.setData('Text', this.dragEl.textContent);

     }
     onUpdate(item){
     console.log(item);
     }
     */
    /*    private onDropModel(args: any) {
     let [el, target, source] = args;
     let inHtml = el.id;
     console.log("OnDropModel ----",el[1]);
     console.log("OnDropModel ----",target);
     console.log("OnDropModel ----",source);

     let item = this.formFieldDataTypeList.filter(filter => filter.id === el.id)[0];
     console.log("---- Filter Item ----", item[0]);

     switch (item.name){
     case 'CheckBox':
     this.displayCheckBox = true;
     break;
     case 'TextBox':
     this.displayTextBox = true;
     break;
     case 'NumberBox':
     this.displayNumberBox = true;
     break;
     case 'RadioBox':
     this.displayRadioBox = true;
     break;
     case 'SelectBox':
     this.displaySelectBox = true;
     break;
     case 'TextAreaBox':
     this.displayTextAreaBox = true;
     break;
     }

     this.formInputData.formSchemaFieldDataTypeId = item.id;
     this.formInputData.name = item.name;

     /!*let it = this.dropedItems.filter(x=> x.id === inHtml ? x : '');


     let duplicateObject = this.utils.clone(it[0]);
     let anotherDO = this.utils.clone(it[0]);

     this.items.push(duplicateObject);

     this.sourceSelection = '';
     anotherDO.id = this.generateGUID();
     this.lastItem = anotherDO;
     /!*
     this.lastItem.name = it[0].name;
     this.lastItem.labelName = it[0].labelName;
     this.lastItem.helpText = it[0].helpText;
     this.lastItem.source = it[0].source;
     this.lastItem.sourceData = it[0].sourceData;
     this.lastItem.isRequired = it[0].isRequired;
     this.lastItem.id = this.generateGUID();
     *!/
     let ind = this.dropedItems.map((obj, index) => {
     if (obj.id === inHtml) {
     return index;
     }
     });
     console.log("-------LastItem on Drop Model---------",this.lastItem);//.sourceData({sourceItem:''});
     this.dropedItems.splice(ind, 1);
     this.dropedItems.push(this.lastItem);
     //this.addClass(el, 'ex-moved');
     this.showDialog();*!/
     }

     private hasClass(el:any, name:string):any {
     return new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)').test(el.className);
     }

     private addClass(el:any, name:string):void {
     if (!this.hasClass(el, name)) {
     el.className = el.className ? [el.className, name].join(' ') : name;
     }
     }

     private removeClass(el:any, name:string):void {
     if (this.hasClass(el, name)) {
     el.className = el.className.replace(new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)', 'g'), '');
     }
     }*/
    // Popup Windows for editing form
    DetailsComponent.prototype.showOverlayPopInfo = function ($event, item, i) {
        console.log("Event In ShowOverlayPopInfo -----", $event);
        console.log("ShowOverlayInfo ------", item);
        console.log("ShowOverlay Index-------", i);
        var name = this.checkFieldDataType(item.formSchemaFieldDataTypeId).name;
        this.showModBox(name, true);
        this.selectedFormInputData = item;
        this.selectedFormInputDataIndex = i;
    };
    DetailsComponent.prototype.updateCheckBoxData = function () {
        var items = this.selectedFormInputData.checkBoxData.split("\n");
        this.selectedFormInputData.formSchemaFieldDataTypeData = items.filter(function (x) { return x != ''; });
    };
    DetailsComponent.prototype.updateRadioBoxData = function () {
        var items = this.selectedFormInputData.radioBoxData.split("\n");
        this.selectedFormInputData.formSchemaFieldDataTypeData = items.filter(function (x) { return x != ''; });
    };
    DetailsComponent.prototype.updateSelectBoxData = function () {
        this.sampleSelectBoxItems = this.selectedFormInputData.selectBoxData.split("\n").map(function (res) {
            return { label: res, value: res };
        });
        var items = this.selectedFormInputData.selectBoxData.split("\n");
        this.selectedFormInputData.formSchemaFieldDataTypeData = items.filter(function (x) { return x != ''; });
    };
    DetailsComponent.prototype.saveCheckBoxMod = function () {
        var name = this.checkFieldDataType(this.selectedFormInputData.formSchemaFieldDataTypeId).name;
        if (this.formInputData.formSchemaFieldDataTypeData.length > 0) {
            this.selectedFormInputData.data = this.formInputData.formSchemaFieldDataTypeData.map(function (x) {
                return { name: x, value: x };
            });
        }
        else {
            this.selectedFormInputData.data = this.selectedFormInputData.radioBoxData.split("\n").map(function (x) {
                return { name: x, value: x };
            });
        }
        this.formInputData.data = this.selectedFormInputData.data;
        this.showModBox(name, false);
        if (name === 'CheckBox') {
            this.updateCheckBoxData();
        }
        console.log("SelectedFormInputData ----------", this.selectedFormInputData);
    };
    DetailsComponent.prototype.saveTextBoxMod = function () {
        var name = this.checkFieldDataType(this.selectedFormInputData.formSchemaFieldDataTypeId).name;
        this.showModBox(name, false);
        console.log("TextBox?AreaFormInputData ----------", this.selectedFormInputData);
    };
    DetailsComponent.prototype.saveRadioBoxMod = function () {
        var name = this.checkFieldDataType(this.selectedFormInputData.formSchemaFieldDataTypeId).name;
        if (this.formInputData.formSchemaFieldDataTypeData.length > 0) {
            this.selectedFormInputData.data = this.formInputData.formSchemaFieldDataTypeData.map(function (x) {
                return { name: x, value: x };
            });
        }
        else {
            this.selectedFormInputData.data = this.selectedFormInputData.radioBoxData.split("\n").map(function (x) {
                return { name: x, value: x };
            });
        }
        this.formInputData.data = this.selectedFormInputData.data;
        this.showModBox(name, false);
        if (name === 'RadioBox') {
            this.updateRadioBoxData();
        }
        console.log("SelectedFormInputData ----------", this.selectedFormInputData);
    };
    DetailsComponent.prototype.saveSelectBoxMod = function () {
        var name = this.checkFieldDataType(this.selectedFormInputData.formSchemaFieldDataTypeId).name;
        if (this.formInputData.formSchemaFieldDataTypeData.length > 0) {
            this.selectedFormInputData.data = this.formInputData.formSchemaFieldDataTypeData.map(function (x) {
                return { label: x, value: x };
            });
        }
        else {
            this.selectedFormInputData.data = this.selectedFormInputData.selectBoxData.split("\n").map(function (x) {
                return { label: x, value: x };
            });
        }
        this.formInputData.data = this.selectedFormInputData.data;
        this.showModBox(name, false);
        if (name === 'SelectBox') {
            this.updateSelectBoxData();
        }
        console.log("SelectedFormInputData ----------", this.selectedFormInputData);
    };
    DetailsComponent.prototype.removeItemTextBoxMod = function () {
        this.displayTextBoxMod = false;
        var item = this.selectedFormInputData;
        console.log("RadioBoxModRemoveItem ----------", item);
        var itemOutList = this.draggableList.selectedInputList.filter(function (x) {
            console.log("Filter x value ----------", x);
            console.log("Item passed to removeItemRadioBoxMod ----------", item);
            return x != item;
        });
        console.log("Item Out List ----------", itemOutList);
        this.draggableList.selectedInputList = itemOutList;
    };
    DetailsComponent.prototype.removeItemTextAreaBoxMod = function () {
        this.displayTextAreaBoxMod = false;
        var item = this.selectedFormInputData;
        console.log("RadioBoxModRemoveItem ----------", item);
        var itemOutList = this.draggableList.selectedInputList.filter(function (x) {
            console.log("Filter x value ----------", x);
            console.log("Item passed to removeItemRadioBoxMod ----------", item);
            return x != item;
        });
        console.log("Item Out List ----------", itemOutList);
        this.draggableList.selectedInputList = itemOutList;
    };
    DetailsComponent.prototype.removeItemCheckBoxMod = function () {
        this.displayCheckBoxMod = false;
        var item = this.selectedFormInputData;
        console.log("RadioBoxModRemoveItem ----------", item);
        var itemOutList = this.draggableList.selectedInputList.filter(function (x) {
            console.log("Filter x value ----------", x);
            console.log("Item passed to removeItemRadioBoxMod ----------", item);
            return x != item;
        });
        console.log("Item Out List ----------", itemOutList);
        this.draggableList.selectedInputList = itemOutList;
    };
    DetailsComponent.prototype.removeItemRadioBoxMod = function () {
        this.displayRadioBoxMod = false;
        var item = this.selectedFormInputData;
        console.log("RadioBoxModRemoveItem ----------", item);
        var itemOutList = this.draggableList.selectedInputList.filter(function (x) {
            console.log("Filter x value ----------", x);
            console.log("Item passed to removeItemRadioBoxMod ----------", item);
            return x != item;
        });
        console.log("Item Out List ----------", itemOutList);
        this.draggableList.selectedInputList = itemOutList;
    };
    DetailsComponent.prototype.removeItemSelectBoxMod = function () {
        this.displaySelectBoxMod = false;
        var item = this.selectedFormInputData;
        console.log("RadioBoxModRemoveItem ----------", item);
        var itemOutList = this.draggableList.selectedInputList.filter(function (x) {
            console.log("Filter x value ----------", x);
            console.log("Item passed to removeItemRadioBoxMod ----------", item);
            return x != item;
        });
        console.log("Item Out List ----------", itemOutList);
        this.draggableList.selectedInputList = itemOutList;
    };
    DetailsComponent.prototype.showModBox = function (name, show) {
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
    DetailsComponent = __decorate([
        core_1.Component({
            selector: 'addform',
            templateUrl: 'app/body/Admin/FormBuilder/details/details.component.html'
        })
    ], DetailsComponent);
    return DetailsComponent;
}());
exports.DetailsComponent = DetailsComponent;
