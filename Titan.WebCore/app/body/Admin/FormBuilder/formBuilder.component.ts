import { Component } from "@angular/core";
import { DragulaService } from 'ng2-dragula/ng2-dragula';
import { EntityEventService } from '../../../shared/services/entityEvent.service';
import { FormSchemaService } from '../../../shared/services/formSchema.service';
import { FormSchemaCategoryService } from '../../../shared/services/formSchemaCategory.service';
import { FormSchemaFieldDataTypeService } from '../../../shared/services/formSchemaFieldDataType.service';
import { IFormBuilderTypes} from '../../../shared/services/definitions/IFormBuilderTypes';
import { IFormBuilderReturnData } from '../../../shared/services/definitions/IFormBuilderReturnData';
import { IFormSchemaFieldDataType } from "../../../shared/services/definitions/IFormSchemaFieldDataType";
import { IFormSchemaField } from "../../../shared/services/definitions/IFormSchemaField";
import {IFormSchema, FormSchema} from "../../../shared/services/definitions/IFormSchema";

import { IDraggableList, DraggableList } from '../../../shared/services/definitions/IDraggableList';

import { ITitanSelectItem} from '../../../shared/services/definitions/ITitanSelectItem';
import { SelectItem } from 'primeng/primeng';

@Component({
    selector: 'formBuilders',
    templateUrl: 'app/body/Admin/FormBuilder/formbuilder.component.html'
})
export class FormBuildersComponent {
    title:string  = "Form Builder";
    orderNumber:number = 0;
    draggableList:IDraggableList = new DraggableList([], []);
    formFieldDataTypeList:IFormSchemaFieldDataType[] =[];
    droppedFormFieldDataTypeList:IFormSchemaFieldDataType[] =[];
    displayTextBox:boolean = false;
    displayNumberBox:boolean = false;
    displayCheckBox:boolean = false;
    displayRadioBox:boolean = false;
    displayTextAreaBox:boolean = false;
    displaySelectBox: boolean = false;
    formName:string;


    selectedFormSchemaCategory:any;
    selectedEntityEvent:any;
    selectedInputList:IFormSchemaField[] = [];
    formSchemaCategories:any[];
    entityEvents:any[];
    entityEventsList: ITitanSelectItem[];
    formSchemaCategoryList:ITitanSelectItem[];
    formInputData:IFormSchemaField = {
        id: '',
        formSchemaVersionId: 0,
        name: '',
        label: '',
        isRequired: false,
        maxLength:0,
        order:0,
        checkBoxData:'',
        formSchemaFieldDataTypeData:[],
        formSchemaFieldDataTypeId: ''
    };


    draggedItem:IFormSchemaFieldDataType;

    // selected Form Modification variables
    selectedFormInputData:IFormSchemaField = {
        id: '',
        formSchemaVersionId: 0,
        name: '',
        label: '',
        isRequired: false,
        maxLength:0,
        order:0,
        checkBoxData:'',
        formSchemaFieldDataTypeData:[],
        formSchemaFieldDataTypeId: ''
    };

    private selectedFormInputDataIndex: number;
    displayCheckBoxMod:boolean = false;
    displayTextBoxMod: boolean = false;
    displayRadioBoxMod:boolean = false;
    displaySelectBoxMod:boolean = false;
    displayNumberBoxMod:boolean = false;
    displayTextAreaBoxMod:boolean = false;

    constructor(private entityEventService: EntityEventService,
                private formSchemaService: FormSchemaService,
                private formSchemaCategoryService: FormSchemaCategoryService,
                private formFieldDataTypeService: FormSchemaFieldDataTypeService
                ) {
        /*dragulaService.setOptions('droppedDraggableItems',{
            removeOnSpill:true
        });
        dragulaService.setOptions('domElements', {
            copy:true,
            removeOnSpill:true
        });
        
        dragulaService.dropModel.subscribe((value) => {
            console.log("--------- DropModel ---------", value);
            this.onDropModel(value.slice(1));
        });

        dragulaService.over.subscribe((value:any) => {

            // console.log(`over: ${value[0]}`);
            this.onOver(value.slice(1));
        });

        dragulaService.drag.subscribe((value) =>{
            console.log("Drag Service ----------", value);

            // console.log(`drag: ${value[0]}`); // value[0] will always be bag name
            this.onDrag(value.slice(1));
        });

        dragulaService.drop.subscribe((value: any) => {
            console.log("Drop service ----------", value);

            // console.log(`drop: ${value[0]}`);
            this.onDrop(value.slice(1));
        });

        dragulaService.out.subscribe((value: any) => {
            let outVal = value.slice(1);
            this.onOut(outVal);
        });*/
    }

    ngOnInit() {
        
        this.formSchemaCategoryService.getAll()
            .subscribe(res => {
                console.log("Form Schema Category List-------------", res);
                this.formSchemaCategories = res.result;
                let listFormSchemaCaterory = res.result.map(newRes => {return {label: newRes.name, value: newRes.id, entityIdentifierId: newRes.entityIdentifierId};});
                this.formSchemaCategoryList = [];
                this.formSchemaCategoryList.push({label: 'Select Category', value: null});
                this.formSchemaCategoryList = this.formSchemaCategoryList.concat(listFormSchemaCaterory);
                console.log("FormSchemaCategoryList ---------", this.formSchemaCategoryList);
                console.log("ListFormSchemaCategory -----------", listFormSchemaCaterory);
                 //listFormSchemaCaterory.forEach(x=> this.formSchemaCategoryList.push(x))
            });
                // Getting FormFieldDataType List
        this.formFieldDataTypeService.getAll()
            .subscribe(res =>{
                console.log("FormFieldDataType List  ----------", res);
                if(res.isSuccess){
                    this.formFieldDataTypeList = res.result;
                    console.log("FormFieldDataTypeList itself -----------", this.formFieldDataTypeList);
                    this.draggableList.formFieldDataTypeList = this.formFieldDataTypeList;
                }
            })
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


    dragStart(event, item:IFormSchemaFieldDataType){
        this.draggedItem = item;
    }

    dragEnd(event){
    }

    drop(event){
        console.log("Drop dragged item in the -------", this.draggedItem);
        switch(this.draggedItem.name){
            case "TextBox":
                console.log("Dragged is Input");
                this.displayTextBox = true;
                break;
            case "NumberBox":
                console.log("Dragged is Select");
                this.displayNumberBox = true;
                break;
            case "RadioBox":
                console.log("Dragged is Radio");
                this.displayRadioBox = true;
                break;
            case "CheckBox":
                console.log("Dragged is Radio");
                this.displayCheckBox = true;
                break;
            case "TextAreaBox":
                console.log("Dragged is Radio");
                this.displayTextAreaBox = true;
                break;

        }

        let innertext = event.path[0].innerText;
        this.formInputData.formSchemaFieldDataTypeId = this.draggedItem.id;
        this.formInputData.name = this.draggedItem.name;
        console.log("inner Text is --------", innertext);
    }

    checkFieldDataType(id): IFormSchemaFieldDataType{
        let fieldDataType:IFormSchemaFieldDataType = this.formFieldDataTypeList.filter(x => {
            if( x.id === id) {
                return x;
            }
        })[0];
        return fieldDataType;
    }

    removeItem(item){
        this.draggableList.selectedInputList = this.selectedInputList.filter( x=> x != item);
    }

    saveTextBox(){
        this.displayTextBox = false;
        this.saveTextBoxData();
    }
    saveCheckBox() {
        this.displayCheckBox = false;
        this.saveCheckBoxData();
    }

    saveNumberBox(){
        this.displayNumberBox = false;
        this.saveTextBoxData();
    }

    saveTextBoxData(){
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

    saveCheckBoxData(){
        this.formInputData.order = this.orderNumber++;
        this.formInputData.formSchemaFieldDataTypeData = this.formInputData.checkBoxData.split("\n");
        let copyData = Object.assign({}, this.formInputData);
        this.draggableList.selectedInputList.push(copyData);
        this.formInputData.name = '';
        this.formInputData.label = '';
        this.formInputData.maxLength = 0;
        this.formInputData.isRequired = false;
        this.formInputData.order = 0;
        console.log('FormInputData in CheckBoxData ---------', this.formInputData);
        console.log("copyData ---------", copyData);
        console.log("SelectedInputList ----------", this.selectedInputList);
    }

    onFormSchemaCategoryChange(event) {
        let entityIdentifierId: any = this.formSchemaCategoryList.filter(category => category.value === event.value)[0].entityIdentifierId;
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

    saveForm(){
        let formSchemaData:IFormSchema = new FormSchema('', []);

        formSchemaData.name = this.formName;
        formSchemaData.fields= this.draggableList.selectedInputList;
        formSchemaData.formSchemaCategoryIds.push(this.selectedFormSchemaCategory);
        formSchemaData.entityEventFormSchemaCategories.push({formSchemaCategoryId: this.selectedFormSchemaCategory, entityEventId:this.selectedEntityEvent});


        console.log("Form to sent ---------", formSchemaData);
        this.formSchemaService.postAdd(formSchemaData)
            .subscribe(res=> {console.log("Form Schema Create post return Res--------", res)});
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

    showOverlayPopInfo($event, item, i) {
        console.log("Event In ShowOverlayPopInfo -----",$event);
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

    saveCheckBoxMod() {
        let name = this.checkFieldDataType(this.selectedFormInputData.formSchemaFieldDataTypeId).name;
        this.showModBox(name, false);
        if(name === 'CheckBox') {
            this.updateCheckBoxData();
        }
        console.log("SelectedFormInputData ----------", this.selectedFormInputData);
    }

    removeItemCheckBoxMod(item) {
        this.displayCheckBoxMod = false;
        console.log("CheckBoxModRemoveItem ----------", item);

        this.draggableList.selectedInputList = this.selectedInputList.filter(x => x != item);
    }

    showModBox(name, show):void {
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
