/**
 * Created by ZeroInfinity on 12/26/2016.
 */
import {Component} from "@angular/core";
import {EntityEventService} from '../../../../shared/services/entityEvent.service';
import {FormSchemaService} from '../../../../shared/services/formSchema.service';
import {FormSchemaCategoryService} from '../../../../shared/services/formSchemaCategory.service';
import {FormSchemaFieldDataTypeService} from '../../../../shared/services/formSchemaFieldDataType.service';
import {IFormBuilderTypes} from '../../../../shared/services/definitions/IFormBuilderTypes';
import {IFormBuilderReturnData} from '../../../../shared/services/definitions/IFormBuilderReturnData';
import {IFormSchemaFieldDataType} from "../../../../shared/services/definitions/IFormSchemaFieldDataType";
import {IFormSchemaField} from "../../../../shared/services/definitions/IFormSchemaField";
import {IFormSchema, FormSchema} from "../../../../shared/services/definitions/IFormSchema";

import {IDraggableList, DraggableList} from '../../../../shared/services/definitions/IDraggableList';

import {ITitanSelectItem} from '../../../../shared/services/definitions/ITitanSelectItem';
import {SelectItem} from 'primeng/primeng';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'addform',
    templateUrl: 'app/body/Admin/FormBuilder/details/details.component.html'
})
export class DetailsComponent {
    //region local variables for the class
    title: string = "Form Builder";
    formSchemaId: string;
    orderNumber: number = 0;
    draggableList: IDraggableList = new DraggableList([], []);
    formFieldDataTypeList: IFormSchemaFieldDataType[] = [];
    droppedFormFieldDataTypeList: IFormSchemaFieldDataType[] = [];
    displayTextBox: boolean = false;
    displayNumberBox: boolean = false;
    displayCheckBox: boolean = false;
    displayRadioBox: boolean = false;
    displayTextAreaBox: boolean = false;
    displaySelectBox: boolean = false;
    formName: string;

    sampleTextAreaData: string = "The Accord Hybrid is both technologically sophisticated and uniquely stylish. Why settle when you can have the best of both worlds?";
    sampleSelectBoxItems: SelectItem[] = [
        {label: 'Aisin Seiki Co', value: 'Aisin Seiki Co'},
        {label: 'Yazaki Corp.', value: 'Yazaki Corp.'},
        {label: 'Sumitomo Electric Industries', value: 'Sumitomo Electric Industries'},
        {label: 'Toyoda Gosei Co.', value: 'Toyoda Gosei Co.'},
        {label: '', value: ''}
    ];

    selectedSelectItem: SelectItem;
    selectedFormSchemaCategory: any;
    selectedEntityEvent: any;
    selectedInputList: IFormSchemaField[] = [];
    formSchemaCategories: any[];
    entityEvents: any[];
    entityEventsList: ITitanSelectItem[];
    formSchemaCategoryList: ITitanSelectItem[];
    formInputData: IFormSchemaField = {
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


    draggedItem: IFormSchemaFieldDataType;

    // selected Form Modification variables
    selectedFormInputData: IFormSchemaField = {
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

    private selectedFormInputDataIndex: number;
    displayCheckBoxMod: boolean = false;
    displayTextBoxMod: boolean = false;
    displayRadioBoxMod: boolean = false;
    displaySelectBoxMod: boolean = false;
    displayNumberBoxMod: boolean = false;
    displayTextAreaBoxMod: boolean = false;
    //endregion

    constructor(private activatedRoute: ActivatedRoute,
                private router: Router,
                private entityEventService: EntityEventService,
                private formSchemaService: FormSchemaService,
                private formSchemaCategoryService: FormSchemaCategoryService,
                private formFieldDataTypeService: FormSchemaFieldDataTypeService) {

        this.activatedRoute.params.subscribe(params => {
            this.formSchemaId = params['id'];
            console.log("FormSchemaId from Params ----------", this.formSchemaId);

        })

    }

    ngOnInit() {
        this.formSchemaCategoryService.getAll()
            .subscribe(res => {
                console.log("Form Schema Category List-------------", res);
                this.formSchemaCategories = res.result;
                let listFormSchemaCaterory = res.result.map(newRes => {
                    return {label: newRes.name, value: newRes.id, entityIdentifierId: newRes.entityIdentifierId};
                });
                this.formSchemaCategoryList = [];
                this.formSchemaCategoryList.push({label: 'Select Category', value: null});
                this.formSchemaCategoryList = this.formSchemaCategoryList.concat(listFormSchemaCaterory);
                console.log("FormSchemaCategoryList ---------", this.formSchemaCategoryList);
                console.log("ListFormSchemaCategory -----------", listFormSchemaCaterory);
                //listFormSchemaCaterory.forEach(x=> this.formSchemaCategoryList.push(x))
            });
        // Getting FormFieldDataType List
        this.formFieldDataTypeService.getAll()
            .subscribe(res => {
                console.log("FormFieldDataType List  ----------", res);
                if (res.isSuccess) {
                    this.formFieldDataTypeList = res.result;
                    console.log("FormFieldDataTypeList itself -----------", this.formFieldDataTypeList);
                    this.draggableList.formFieldDataTypeList = this.formFieldDataTypeList;
                }

                this.formSchemaService.getById(this.formSchemaId)
                    .subscribe(res => {
                        console.log("formSchemaService getById result ----------", res.result);
                        let result = res.result;
                        let fields = result.fields.$values;
                        let entityEventId = result.formSchemaEntityEvents.$values[0].entityEventId;
                        this.selectedEntityEvent = entityEventId;
                        let formSchemaVersionId = result.formSchemaVersion.id;
                        let formSchemaCategoriesToSelect = result.formSchemaCategories.$values[0].formSchemaCategory;

                        this.formName = result.name;
                        this.draggableList.selectedInputList = fields.map(m => {
                            let formSchemaField: IFormSchemaField = m;
                            console.log("Data Values from the server -----", m.data.$values);
                            formSchemaField.data = m.data.$values.map(x => { return {name: x.name, value: x.name}});
                            formSchemaField.formSchemaFieldDataTypeData = formSchemaField.data.map(d => d.name);

                            if (m.fieldDataType.name === "CheckBox") {
                                formSchemaField.checkBoxData = formSchemaField.formSchemaFieldDataTypeData.join("\n");
                            }
                            if (m.fieldDataType.name === "RadioBox") {
                                formSchemaField.radioBoxData = formSchemaField.formSchemaFieldDataTypeData.join("\n");
                            }
                            if (m.fieldDataType.name === "SelectBox") {
                                formSchemaField.data = formSchemaField.formSchemaFieldDataTypeData.map(x => {return { label:x, value:x}});
                                formSchemaField.selectBoxData = formSchemaField.formSchemaFieldDataTypeData.join("\n");
                            }
                            return formSchemaField;

                        });

                        //console.log("DraggableList.selectedInputList -----", this.draggableList.selectedInputList);
                        this.selectedFormSchemaCategory = formSchemaCategoriesToSelect.id;

                        if (formSchemaCategoriesToSelect.id) {
                            this.entityEventListDropDown(this.selectedFormSchemaCategory);
                        }

                    });
            });

    }

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


    dragStart(event, item: IFormSchemaFieldDataType) {
        this.draggedItem = item;
    }

    dragEnd(event) {
    }

    drop(event) {
        //console.log("Drop dragged item in the -------", this.draggedItem);
        this.switchDropDialog(this.draggedItem.name);

        let innertext = event.path[0].innerText;
        this.formInputData.formSchemaFieldDataTypeId = this.draggedItem.id;
        //this.formInputData.name = this.draggedItem.name;
        console.log("inner Text is --------", innertext);
    }

    private switchDropDialog(name: string) {
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
    }

    checkFieldDataType(id): IFormSchemaFieldDataType {
        let fieldDataType: IFormSchemaFieldDataType = this.formFieldDataTypeList.filter(x => {
            if (x.id === id) {
                return x;
            }
        })[0];
        return fieldDataType;
    }

    removeItem(item) {
        this.draggableList.selectedInputList = this.selectedInputList.filter(x => x != item);
    }

    saveTextBox() {
        this.displayTextBox = false;
        this.saveTextBoxData();
    }

    saveTextAreaBox() {
        this.displayTextAreaBox = false;
        this.saveTextBoxData();
    }


    saveCheckBox() {
        this.displayCheckBox = false;
        this.saveCheckBoxData();
    }

    saveRadioBox() {
        this.displayRadioBox = false;
        this.saveRadioBoxData();
    }

    saveSelectBox() {
        this.displaySelectBox = false;
        this.saveSelectBoxData();
    }

    saveNumberBox() {
        this.displayNumberBox = false;
        this.saveTextBoxData();
    }

    saveTextBoxData() {
        this.formInputData.order = this.orderNumber++;
        let copyData = Object.assign({}, this.formInputData);
        this.draggableList.selectedInputList.push(copyData);
        this.formInputData.name = '';
        this.formInputData.label = '';
        this.formInputData.maxLength = 0;
        this.formInputData.isRequired = false;
        this.formInputData.order = 0;
        console.log('FormInputData ---------', this.formInputData);
        console.log("copyData ---------", copyData);
        console.log("SelectedInputList ----------", this.selectedInputList);
    }

    saveCheckBoxData() {
        this.formInputData.order = this.orderNumber++;
        this.formInputData.formSchemaFieldDataTypeData = this.formInputData.checkBoxData.split("\n");
        let copyData = Object.assign({}, this.formInputData);
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
    }

    saveSelectBoxData() {
        this.formInputData.order = this.orderNumber++;
        this.sampleSelectBoxItems = this.formInputData.selectBoxData.split("\n").map(item => {
            return {label: item, value: item};
        });
        this.formInputData.formSchemaFieldDataTypeData = this.formInputData.selectBoxData.split("\n");
        let copyData = Object.assign({}, this.formInputData);
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
    }

    saveRadioBoxData() {
        this.formInputData.order = this.orderNumber++;
        this.formInputData.formSchemaFieldDataTypeData = this.formInputData.radioBoxData.split("\n");
        let copyData = Object.assign({}, this.formInputData);
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
    }

    onFormSchemaCategoryChange(event) {
        this.entityEventListDropDown(event.value);
    }

    entityEventListDropDown(item){
        let entityIdentifierId: any = this.formSchemaCategoryList.filter(category => category.value === item)[0].entityIdentifierId;
        console.log("EntityIdentifier --------", entityIdentifierId);
        this.entityEventService.getFindByEntityIdentifierId(entityIdentifierId)
            .subscribe(res => {
                this.entityEvents = res.result.map(item => {
                    return {label: item.name, value: item.id, entityIdentifierId: entityIdentifierId};
                });
                this.entityEventsList = [];
                this.entityEventsList.push({label: 'Select Entity Event', value: null});
                this.entityEvents.forEach(item => this.entityEventsList.push(item));
                console.log("EntityEventsList -----", this.entityEventsList);
            });
    }

    saveForm() {
        let formSchemaData: IFormSchema = new FormSchema('', false, []);

        formSchemaData.id = this.formSchemaId;
        formSchemaData.name = this.formName;
        formSchemaData.fields = this.draggableList.selectedInputList;
        formSchemaData.formSchemaCategoryIds.push(this.selectedFormSchemaCategory);
        formSchemaData.formSchemaEntityEvents.push({
            entityEventId: this.selectedEntityEvent
        });


        console.log("Form to sent ---------", formSchemaData);
        this.formSchemaService.postUpdate(formSchemaData)
            .subscribe(res => {
                console.log("Form Schema Create post return Res--------", res)
            });
        console.log('formschema Create called');
    }

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
    showOverlayPopInfo($event, item, i) {
        console.log("Event In ShowOverlayPopInfo -----", $event);
        console.log("ShowOverlayInfo ------", item);
        console.log("ShowOverlay Index-------", i);
        let name = this.checkFieldDataType(item.formSchemaFieldDataTypeId).name;
        this.showModBox(name, true);

        this.selectedFormInputData = item;
        this.selectedFormInputDataIndex = i;
    }

    updateCheckBoxData() {
        let items = this.selectedFormInputData.checkBoxData.split("\n");
        this.selectedFormInputData.formSchemaFieldDataTypeData = items.filter(x => x != '')
    }

    updateRadioBoxData() {
        let items = this.selectedFormInputData.radioBoxData.split("\n");
        this.selectedFormInputData.formSchemaFieldDataTypeData = items.filter(x => x != '')
    }

    updateSelectBoxData() {
        this.sampleSelectBoxItems = this.selectedFormInputData.selectBoxData.split("\n").map(res => {
            return {label: res, value: res};
        });
        let items = this.selectedFormInputData.selectBoxData.split("\n");
        this.selectedFormInputData.formSchemaFieldDataTypeData = items.filter(x => x != '')
    }

    saveCheckBoxMod() {
        let name = this.checkFieldDataType(this.selectedFormInputData.formSchemaFieldDataTypeId).name;
        if(this.formInputData.formSchemaFieldDataTypeData.length > 0) {
            this.selectedFormInputData.data = this.formInputData.formSchemaFieldDataTypeData.map(x => {
                return {name: x, value: x}
            });
        }
        else {
            this.selectedFormInputData.data = this.selectedFormInputData.radioBoxData.split("\n").map(x => {
                return {name: x, value: x}
            });
        }
        this.formInputData.data = this.selectedFormInputData.data;
        this.showModBox(name, false);
        if (name === 'CheckBox') {
            this.updateCheckBoxData();
        }
        console.log("SelectedFormInputData ----------", this.selectedFormInputData);
    }

    saveTextBoxMod() {
        let name = this.checkFieldDataType(this.selectedFormInputData.formSchemaFieldDataTypeId).name;

        this.showModBox(name, false);
        console.log("TextBox?AreaFormInputData ----------", this.selectedFormInputData);
    }

    saveRadioBoxMod() {
        let name = this.checkFieldDataType(this.selectedFormInputData.formSchemaFieldDataTypeId).name;
        if(this.formInputData.formSchemaFieldDataTypeData.length > 0) {
            this.selectedFormInputData.data = this.formInputData.formSchemaFieldDataTypeData.map(x => {
                return {name: x, value: x}
            });
        }
        else {
            this.selectedFormInputData.data = this.selectedFormInputData.radioBoxData.split("\n").map(x => {
                return {name: x, value: x}
            });
        }
        this.formInputData.data = this.selectedFormInputData.data;
        this.showModBox(name, false);
        if (name === 'RadioBox') {
            this.updateRadioBoxData();
        }
        console.log("SelectedFormInputData ----------", this.selectedFormInputData);
    }

    saveSelectBoxMod() {
        let name = this.checkFieldDataType(this.selectedFormInputData.formSchemaFieldDataTypeId).name;
        if(this.formInputData.formSchemaFieldDataTypeData.length > 0) {
            this.selectedFormInputData.data = this.formInputData.formSchemaFieldDataTypeData.map(x => {
                return {label: x, value: x}
            });
        }
        else {
            this.selectedFormInputData.data = this.selectedFormInputData.selectBoxData.split("\n").map(x => {
                return {label: x, value: x}
            });
        }
        this.formInputData.data = this.selectedFormInputData.data;
        this.showModBox(name, false);
        if (name === 'SelectBox') {
            this.updateSelectBoxData();
        }
        console.log("SelectedFormInputData ----------", this.selectedFormInputData);
    }

    removeItemTextBoxMod() {
        this.displayTextBoxMod = false;
        let item = this.selectedFormInputData;
        console.log("RadioBoxModRemoveItem ----------", item);
        let itemOutList = this.draggableList.selectedInputList.filter(x =>{
            console.log("Filter x value ----------", x);
            console.log("Item passed to removeItemRadioBoxMod ----------", item);

            return x != item;
        });
        console.log("Item Out List ----------", itemOutList);

        this.draggableList.selectedInputList = itemOutList;
    }

    removeItemTextAreaBoxMod() {
        this.displayTextAreaBoxMod = false;
        let item = this.selectedFormInputData;
        console.log("RadioBoxModRemoveItem ----------", item);
        let itemOutList = this.draggableList.selectedInputList.filter(x =>{
            console.log("Filter x value ----------", x);
            console.log("Item passed to removeItemRadioBoxMod ----------", item);

            return x != item;
        });
        console.log("Item Out List ----------", itemOutList);

        this.draggableList.selectedInputList = itemOutList;
    }

    removeItemCheckBoxMod() {
        this.displayCheckBoxMod = false;
        let item = this.selectedFormInputData;
        console.log("RadioBoxModRemoveItem ----------", item);
        let itemOutList = this.draggableList.selectedInputList.filter(x =>{
            console.log("Filter x value ----------", x);
            console.log("Item passed to removeItemRadioBoxMod ----------", item);

            return x != item;
        });
        console.log("Item Out List ----------", itemOutList);

        this.draggableList.selectedInputList = itemOutList;
    }

    removeItemRadioBoxMod() {
        this.displayRadioBoxMod = false;
        let item = this.selectedFormInputData;
        console.log("RadioBoxModRemoveItem ----------", item);
        let itemOutList = this.draggableList.selectedInputList.filter(x =>{
            console.log("Filter x value ----------", x);
            console.log("Item passed to removeItemRadioBoxMod ----------", item);

            return x != item;
        });
        console.log("Item Out List ----------", itemOutList);

        this.draggableList.selectedInputList = itemOutList;
    }

    removeItemSelectBoxMod() {
        this.displaySelectBoxMod = false;
        let item = this.selectedFormInputData;
        console.log("RadioBoxModRemoveItem ----------", item);
        let itemOutList = this.draggableList.selectedInputList.filter(x =>{
            console.log("Filter x value ----------", x);
            console.log("Item passed to removeItemRadioBoxMod ----------", item);

            return x != item;
        });
        console.log("Item Out List ----------", itemOutList);

        this.draggableList.selectedInputList = itemOutList;
    }
    showModBox(name, show): void {
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
    }
}
