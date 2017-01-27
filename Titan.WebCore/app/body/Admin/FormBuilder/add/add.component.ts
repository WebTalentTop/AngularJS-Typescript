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
import {LoggerService} from "../../../../shared/services/logger/logger.service";

@Component({
    selector: 'addform',
    templateUrl: 'app/body/Admin/FormBuilder/Add/add.component.html'
})
export class AddFormComponent {
    title: string = "Create New Form";
    orderNumber: number = 0;
    draggableList: IDraggableList = new DraggableList([], []);
    formFieldDataTypeList: IFormSchemaFieldDataType[] = [];
    droppedFormFieldDataTypeList: IFormSchemaFieldDataType[] = [];

    formName: string;
    hasAttachments:boolean = false;
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
        private formFieldDataTypeService: FormSchemaFieldDataTypeService,
        private ls: LoggerService) {

        this.ls.setShow(true);
    }

    ngOnInit() {

        this.formSchemaCategoryService.getAll()
            .subscribe(res => {
                this.ls.logConsole("Form Schema Category List-------------", res);
                this.formSchemaCategories = res.result;
                let listFormSchemaCaterory = res.result.map(newRes => {
                    return {label: newRes.name, value: newRes.id, entityIdentifierId: newRes.entityIdentifierId};
                });
                this.formSchemaCategoryList = [];
                this.formSchemaCategoryList.push({label: 'Select Category', value: null});
                this.formSchemaCategoryList = this.formSchemaCategoryList.concat(listFormSchemaCaterory);
                this.ls.logConsole("FormSchemaCategoryList ---------", this.formSchemaCategoryList);
                this.ls.logConsole("ListFormSchemaCategory -----------", listFormSchemaCaterory);
                //listFormSchemaCaterory.forEach(x=> this.formSchemaCategoryList.push(x))
            });
        // Getting FormFieldDataType List
        this.formFieldDataTypeService.getAll()
            .subscribe(res => {
                this.ls.logConsole("FormFieldDataType List  ----------", res);
                if (res.isSuccess) {
                    this.formFieldDataTypeList = res.result;
                    this.ls.logConsole("FormFieldDataTypeList itself -----------", this.formFieldDataTypeList);
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
        this.ls.logConsole("Drop dragged item in the -------", this.draggedItem);
        this.switchDropDialog(this.draggedItem.name);

        let innertext = event.path[0].innerText;
        this.formInputData.formSchemaFieldDataTypeId = this.draggedItem.id;
        //this.formInputData.name = this.draggedItem.name;
        this.ls.logConsole("inner Text is --------", innertext);
    }
    //endregion

    private switchDropDialog(name: string) {
        switch (name) {
            case "TextBox":
                this.ls.logConsole("Dragged is Input");
                this.displayTextBox = true;
                break;
            case "NumberBox":
                this.ls.logConsole("Dragged is Number");
                this.displayNumberBox = true;
                break;
            case "RadioBox":
                this.ls.logConsole("Dragged is Radio");
                this.displayRadioBox = true;
                break;
            case "CheckBox":
                this.ls.logConsole("Dragged is Check");
                this.displayCheckBox = true;
                break;
            case "SelectBox":
                this.ls.logConsole("Dragged is Select");
                this.displaySelectBox = true;
                break;
            case "TextAreaBox":
                this.ls.logConsole("Dragged is Radio");
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

        this.ls.logConsole('FormInputData ---------', this.formInputData);
        this.ls.logConsole("copyData ---------", copyData);
        this.ls.logConsole("SelectedInputList ----------", this.selectedInputList);
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
        this.ls.logConsole('FormInputData in CheckBoxData ---------', this.formInputData);
        this.ls.logConsole("copyData ---------", copyData);
        this.ls.logConsole("SelectedInputList ----------", this.selectedInputList);
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
        this.ls.logConsole('FormInputData in CheckBoxData ---------', this.formInputData);
        this.ls.logConsole("copyData ---------", copyData);
        this.ls.logConsole("SelectedInputList ----------", this.selectedInputList);
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
        this.ls.logConsole('FormInputData in CheckBoxData ---------', this.formInputData);
        this.ls.logConsole("copyData ---------", copyData);
        this.ls.logConsole("SelectedInputList ----------", this.selectedInputList);
    }

    //endregion

    onFormSchemaCategoryChange(event) {
        let entityIdentifierId: any = this.formSchemaCategoryList.filter(category => category.value === event.value)[0].entityIdentifierId;
        this.ls.logConsole("EntityIdentifier --------", entityIdentifierId);
        this.entityEventService.getFindByEntityIdentifierId(entityIdentifierId)
            .subscribe(res => {
                this.entityEvents = res.result.map(item => {
                    return {label: item.name, value: item.id, entityIdentifierId: entityIdentifierId};
                });
                this.entityEventsList = [];
                this.entityEventsList.push({label: 'Select Entity Event', value: null});
                this.entityEvents.forEach(item => this.entityEventsList.push(item));
                this.ls.logConsole("EntityEventsList -----", this.entityEventsList);
            });
    }

    // Popup Windows for editing form
    showOverlayPopInfo($event, item, i) {
        this.ls.logConsole("Event In ShowOverlayPopInfo -----", $event);
        this.ls.logConsole("ShowOverlayInfo ------", item);
        this.ls.logConsole("ShowOverlay Index-------", i);
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
        this.ls.logConsole("SelectedFormInputData ----------", this.selectedFormInputData);
    }

    saveTextBoxMod() {
        let name = this.checkFieldDataType(this.selectedFormInputData.formSchemaFieldDataTypeId).name;
        this.showModBox(name, false);
        this.ls.logConsole("TextBox?AreaFormInputData ----------", this.selectedFormInputData);
    }

    saveRadioBoxMod() {
        let name = this.checkFieldDataType(this.selectedFormInputData.formSchemaFieldDataTypeId).name;
        this.selectedFormInputData.data = this.formInputData.formSchemaFieldDataTypeData.map(x => {return { name: x, value:x}});
        this.formInputData.data = this.selectedFormInputData.data;
        this.showModBox(name, false);
        if (name === 'RadioBox') {
            this.updateRadioBoxData();
        }
        this.ls.logConsole("SelectedFormInputData ----------", this.selectedFormInputData);
    }

    saveSelectBoxMod() {
        let name = this.checkFieldDataType(this.selectedFormInputData.formSchemaFieldDataTypeId).name;
        this.selectedFormInputData.data = this.formInputData.formSchemaFieldDataTypeData.map(x => {return { name: x, value:x}});
        this.formInputData.data = this.selectedFormInputData.data;
        this.showModBox(name, false);
        if (name === 'SelectBox') {
            this.updateSelectBoxData();
        }
        this.ls.logConsole("SelectedFormInputData ----------", this.selectedFormInputData);
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

    removeItem() {
        //his.closeEditPopUps();
        let item = this.selectedFormInputData;
        let name = this.checkFieldDataType(item.formSchemaFieldDataTypeId).name;
        this.showModBox(name, false);
        if (name === 'SelectBox') {
            this.updateSelectBoxData();
        }
        this.ls.logConsole("Selected input --------", item);
        this.draggableList.selectedInputList = this.draggableList.selectedInputList.filter(x => x != item);
    }

    closeEditPopUps() {
        this.displayCheckBoxMod = false;
        this.displayTextAreaBoxMod = false;
        this.displayTextBoxMod = false;
        this.displaySelectBoxMod = false;
        this.displayRadioBoxMod = false;
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


        this.ls.logConsole("Form to sent ---------", formSchemaData);
        this.formSchemaService.postAdd(formSchemaData)
            .subscribe(res => {
                this.ls.logConsole("Form Schema Create post return Res--------", res);
                if(res.isSuccess) {
                    this.msgs.push({severity:'success', summary: 'Form has been saved. ', detail: 'We are redirecting you to Form Builders home page to look at the forms list.'});
                    this.displaySaveFormMessage = true;
                    setTimeout(()=> {
                        this.displaySaveFormMessage = false;
                        this.router.navigate(['/admin/formBuilders']);
                    }, 5000);
                }
            });
        this.ls.logConsole('formschema Create called');
    }
}
