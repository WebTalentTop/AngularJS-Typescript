import { Component } from "@angular/core";
import { EntityEventService } from '../../../shared/services/entityEvent.service';
import { FormSchemaService } from '../../../shared/services/formSchema.service';
import { FormSchemaCategoryService } from '../../../shared/services/formSchemaCategory.service';
import { FormSchemaFieldDataTypeService } from '../../../shared/services/formSchemaFieldDataType.service';
import { IFormBuilderTypes} from '../../../shared/services/definitions/IFormBuilderTypes';
import { IFormBuilderReturnData } from '../../../shared/services/definitions/IFormBuilderReturnData';
import { IFormSchemaFieldDataType } from "../../../shared/services/definitions/IFormSchemaFieldDataType";
import { IFormSchemaField } from "../../../shared/services/definitions/IFormSchemaField";
import {IFormSchema, FormSchema} from "../../../shared/services/definitions/IFormSchema";

import { ITitanSelectItem} from '../../../shared/services/definitions/ITitanSelectItem';
import { SelectItem } from 'primeng/primeng';

@Component({
    selector: 'formBuilders',
    templateUrl: 'app/body/Admin/FormBuilder/formbuilder.component.html'
})
export class FormBuildersComponent {
    title:string  = "Form Builder";
    orderNumber:number = 0;
    formFieldDataTypeList:IFormSchemaFieldDataType[] =[];
    displayInput:boolean = false;
    displayNumberBox:boolean = false;
    displayRadio:boolean = false;
    formName:string;


    selectedFormSchemaCategory:any;
    selectedEntityEvent:any;
    selectedInputList:IFormSchemaField[] = [];
    formSchemaCategories:any[];
    entityEvents:any[];
    entityEventsList: ITitanSelectItem[];
    formSchemaCategoryList:ITitanSelectItem[];
    formInputData:IFormSchemaField = {id: '',
    formSchemaVersionId: 0,
    name: '',
    label: '',
    isRequired: false,
    maxLength:0,
    order:0,
    formSchemaFieldDataTypeId: ''};


    draggedItem:IFormSchemaFieldDataType;

    constructor(private entityEventService: EntityEventService,
                private formSchemaService: FormSchemaService,
                private formSchemaCategoryService: FormSchemaCategoryService,
                private formFieldDataTypeService: FormSchemaFieldDataTypeService
                ) {}

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
                }
            })
    }


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
                this.displayInput = true;
                break;
            case "NumberBox":
                console.log("Dragged is Select");
                this.displayNumberBox = true;
                break;
            case "radio":
                console.log("Dragged is Radio");
                this.displayRadio = true;
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
        this.selectedInputList = this.selectedInputList.filter( x=> x != item);
    }

    saveTextBox(){
        this.displayInput = false;
        this.saveInputData();
    }

    saveNumberBox(){
        this.displayNumberBox = false;
        this.saveInputData();
    }

    saveInputData(){
        this.formInputData.order = this.orderNumber++;
        let copyData = Object.assign({}, this.formInputData);
        this.selectedInputList.push(copyData);
        this.formInputData.name = '';
        this.formInputData.label = '';
        this.formInputData.maxLength = 0;
        this.formInputData.isRequired = false;
        this.formInputData.order = 0;
        console.log('FormInputData ---------', this.formInputData);
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
        formSchemaData.fields= this.selectedInputList;
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
}
