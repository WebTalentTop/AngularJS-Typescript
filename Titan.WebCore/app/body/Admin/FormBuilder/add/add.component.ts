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
import {Message} from "primeng/primeng";
import {Router} from "@angular/router";

@Component({
    selector: 'addform',
    templateUrl: 'app/body/Admin/FormBuilder/Add/add.component.html'
})
export class AddFormComponent {
    title: string = "Form Builder";
    orderNumber: number = 0;
    draggableList: IDraggableList = new DraggableList([], []);
    formFieldDataTypeList: IFormSchemaFieldDataType[] = [];
    droppedFormFieldDataTypeList: IFormSchemaFieldDataType[] = [];

    formName: string;

    //region Adding Fields Dialog Display Variables
    displayTextBox: boolean = false;
    displayNumberBox: boolean = false;
    displayCheckBox: boolean = false;
    displayRadioBox: boolean = false;
    displayTextAreaBox: boolean = false;
    displaySelectBox: boolean = false;
    //endregion


    sampleTextAreaData:string = "The Accord Hybrid is both technologically sophisticated and uniquely stylish. Why settle when you can have the best of both worlds?";
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

    //region selected Form Modification variables
    selectedFormInputData: IFormSchemaField = {
        id: '',
        formSchemaVersionId: 0,
        name: '',
        label: '',
        isRequired: false,
        maxLength: 0,
        order: 0,
        data:[],
        checkBoxData: '',
        formSchemaFieldDataTypeData: [],
        formSchemaFieldDataTypeId: ''
    };

    private selectedFormInputDataIndex: number;
    //endregion

    //region Popup Dialog Display Variables
    displayCheckBoxMod: boolean = false;
    displayTextBoxMod: boolean = false;
    displayRadioBoxMod: boolean = false;
    displaySelectBoxMod: boolean = false;
    displayNumberBoxMod: boolean = false;
    displayTextAreaBoxMod: boolean = false;
    displaySaveFormMessage: boolean = false;
    //endregion

    msgs:Message[] = [];

    constructor(
        private router: Router,
        private entityEventService: EntityEventService,
        private formSchemaService: FormSchemaService,
        private formSchemaCategoryService: FormSchemaCategoryService,
        private formFieldDataTypeService: FormSchemaFieldDataTypeService) {}

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
            })
    }

    //region Drag Events
    dragStart(event, item: IFormSchemaFieldDataType) {
        this.draggedItem = item;
    }

    dragEnd(event) {
    }

    drop(event) {
        console.log("Drop dragged item in the -------", this.draggedItem);
        this.switchDropDialog(this.draggedItem.name);

        let innertext = event.path[0].innerText;
        this.formInputData.formSchemaFieldDataTypeId = this.draggedItem.id;
        //this.formInputData.name = this.draggedItem.name;
        console.log("inner Text is --------", innertext);
    }
    //endregion

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

    //region Adding Field Dialog Saves

    saveTextBox() {
        this.displayTextBox = false;
        this.saveTextBoxData();
    }

    saveTextAreaBox() {
        this.displayTextAreaBox = false;
        this.saveTextBoxData();
    }

    saveSelectBox() {
        this.displaySelectBox = false;
        this.saveSelectBoxData();
    }

    saveCheckBox() {
        this.displayCheckBox = false;
        this.saveCheckBoxData();
    }

    saveRadioBox() {
        this.displayRadioBox = false;
        this.saveRadioBoxData();
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
        this.selectedFormInputData.data = this.formInputData.formSchemaFieldDataTypeData.map(x => {return { name: x, value:x}})
        this.formInputData.data = this.selectedFormInputData.data;
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
            return {label:item, value: item};
        });
        this.formInputData.formSchemaFieldDataTypeData = this.formInputData.selectBoxData.split("\n");
        this.selectedFormInputData.data = this.formInputData.formSchemaFieldDataTypeData.map(x => {return { name: x, value:x}})
        this.formInputData.data = this.selectedFormInputData.data;
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
        this.selectedFormInputData.data = this.formInputData.formSchemaFieldDataTypeData.map(x => {return { name: x, value:x}})
        this.formInputData.data = this.selectedFormInputData.data;
        let copyData = Object.assign({}, this.formInputData);
        this.draggableList.selectedInputList.push(copyData);
        this.formInputData.name = '';
        this.formInputData.label = '';
        this.formInputData.maxLength = 0;
        this.formInputData.isRequired = false;
        this.formInputData.order = 0;
        this.formInputData.radioBoxData ='';
        console.log('FormInputData in CheckBoxData ---------', this.formInputData);
        console.log("copyData ---------", copyData);
        console.log("SelectedInputList ----------", this.selectedInputList);
    }

    //endregion

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
        this.selectedFormInputData.formSchemaFieldDataTypeData = items.filter(x => x != '');
        this.selectedFormInputData.data = this.formInputData.formSchemaFieldDataTypeData.map(x => {return { name: x, value:x}})
    }

    updateRadioBoxData() {
        let items = this.selectedFormInputData.radioBoxData.split("\n");
        this.selectedFormInputData.formSchemaFieldDataTypeData = items.filter(x => x != '');
        this.selectedFormInputData.data = this.formInputData.formSchemaFieldDataTypeData.map(x => {return { name: x, value:x}})
    }

    updateSelectBoxData() {
        this.sampleSelectBoxItems = this.selectedFormInputData.selectBoxData.split("\n").map(res => {
            return {label:res, value: res};
        });
        let items = this.selectedFormInputData.selectBoxData.split("\n");
        this.selectedFormInputData.formSchemaFieldDataTypeData = items.filter(x => x != '');
        this.selectedFormInputData.data = this.formInputData.formSchemaFieldDataTypeData.map(x => {return { name: x, value:x}});
    }

    saveCheckBoxMod() {
        let name = this.checkFieldDataType(this.selectedFormInputData.formSchemaFieldDataTypeId).name;
        this.selectedFormInputData.data = this.formInputData.formSchemaFieldDataTypeData.map(x => {return { name: x, value:x}});
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
        this.selectedFormInputData.data = this.formInputData.formSchemaFieldDataTypeData.map(x => {return { name: x, value:x}});
        this.formInputData.data = this.selectedFormInputData.data;
        this.showModBox(name, false);
        if (name === 'RadioBox') {
            this.updateRadioBoxData();
        }
        console.log("SelectedFormInputData ----------", this.selectedFormInputData);
    }

    saveSelectBoxMod() {
        let name = this.checkFieldDataType(this.selectedFormInputData.formSchemaFieldDataTypeId).name;
        this.selectedFormInputData.data = this.formInputData.formSchemaFieldDataTypeData.map(x => {return { name: x, value:x}});
        this.formInputData.data = this.selectedFormInputData.data;
        this.showModBox(name, false);
        if (name === 'SelectBox') {
            this.updateSelectBoxData();
        }
        console.log("SelectedFormInputData ----------", this.selectedFormInputData);
    }

    removeItemCheckBoxMod(item) {
        this.displayCheckBoxMod = false;
        console.log("CheckBoxModRemoveItem ----------", item);

        this.draggableList.selectedInputList = this.selectedInputList.filter(x => x != item);
    }

    removeItemRadioBoxMod(item) {
        this.displayRadioBoxMod = false;
        console.log("RadioBoxModRemoveItem ----------", item);

        this.draggableList.selectedInputList = this.selectedInputList.filter(x => x != item);
    }

    removeItemSelectBoxMod(item) {
        this.displaySelectBoxMod = false;
        console.log("SelectBoxModRemoveItem ----------", item);

        this.draggableList.selectedInputList = this.selectedInputList.filter(x => x != item);
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

    saveForm() {
        let formSchemaData: IFormSchema = new FormSchema('',false, []);

        formSchemaData.name = this.formName;
        formSchemaData.fields = this.draggableList.selectedInputList;
        formSchemaData.formSchemaCategoryIds.push(this.selectedFormSchemaCategory);
        formSchemaData.entityEventIds.push(this.selectedEntityEvent);
        formSchemaData.formSchemaEntityEvents.push({
            entityEventId: this.selectedEntityEvent
        });


        console.log("Form to sent ---------", formSchemaData);
        this.formSchemaService.postAdd(formSchemaData)
            .subscribe(res => {
                console.log("Form Schema Create post return Res--------", res);
                if(res.isSuccess) {
                    this.msgs.push({severity:'success', summary: 'Form has been saved. ', detail: 'We are redirecting you to Form Builders home page to look at the forms list.'});
                    this.displaySaveFormMessage = true;
                    setTimeout(()=> {
                        this.displaySaveFormMessage = false;
                        this.router.navigate(['/admin/formBuilders']);
                    }, 5000);
                }

            });
        console.log('formschema Create called');
    }
}
