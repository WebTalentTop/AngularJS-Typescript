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
import {Message} from "primeng/primeng";
import { Observable} from 'rxjs/Observable';

@Component({
    selector: 'addform',
    templateUrl: 'app/body/Admin/FormBuilder/details/details.component.html'
})
export class DetailsComponent {
    //region local variables for the class
    title: string = "Edit Form";
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
        displaySelectBoxData:[],
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
    displaySaveFormMessage: boolean = false;
    //endregion

    msgs:Message[] = [];
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

        let formSchemaCategoryServiceCall = this.formSchemaCategoryService.getAll();
        let formFieldDataTypeServiceCall = this.formFieldDataTypeService.getAll();
        let formSchemaServiceCall = this.formSchemaService.getById(this.formSchemaId);

        Observable.forkJoin([formSchemaCategoryServiceCall, formFieldDataTypeServiceCall, formSchemaServiceCall])
            .subscribe(results => {
                let responseFormSchemaCategoryServiceCall = results[0];
                let responseFormFieldDataTypeServiceCall = results[1];
                let responseFormSchemaServiceCall = results[2];

                if (responseFormSchemaCategoryServiceCall.isSuccess) {
                    this.formSchemaCategories = results[0].result;
                    this.initializeFormSchemaCategories();
                }

                if (responseFormFieldDataTypeServiceCall.isSuccess) {
                    this.formFieldDataTypeList = results[1].result;
                    this.initializeFormFieldDataTypeService();
                }

                if (responseFormSchemaServiceCall.isSuccess) {
                    let data = results[2].result;
                    this.initializeFormSchemaById(data);
                }
            })
    }

    initializeFormSchemaCategories() {
        let listFormSchemaCaterory = this.formSchemaCategories.map(newRes => {
            return {label: newRes.name, value: newRes.id, entityIdentifierId: newRes.entityIdentifierId};
        });
        this.formSchemaCategoryList = [];
        this.formSchemaCategoryList.push({label: 'Select Category', value: null});
        this.formSchemaCategoryList = this.formSchemaCategoryList.concat(listFormSchemaCaterory);
        console.log("FormSchemaCategoryList ---------", this.formSchemaCategoryList);
        console.log("ListFormSchemaCategory -----------", listFormSchemaCaterory);
        //listFormSchemaCaterory.forEach(x=> this.formSchemaCategoryList.push(x))
    }

    initializeFormFieldDataTypeService() {
        console.log("FormFieldDataTypeList itself -----------", this.formFieldDataTypeList);
        this.draggableList.formFieldDataTypeList = this.formFieldDataTypeList;
    }

    initializeFormSchemaById(data) {
        let result = data;
        let fields = result.fields.$values;
        console.log("Fields first ------", fields);
        let entityEventId = result.formSchemaEntityEvents.$values[0].entityEventId;
        this.selectedEntityEvent = entityEventId;
        let formSchemaVersionId = result.formSchemaVersion.id;
        let formSchemaCategoriesToSelect = result.formSchemaCategories.$values[0].formSchemaCategory;

        this.formName = result.name;
        this.draggableList.selectedInputList = fields.map(m => {
            let fieldDataTypes = m.data.$values;
            console.log("fieldDataTypes ------", fieldDataTypes);
            let formSchemaField: IFormSchemaField = m;
            console.log("Data Values from the server -----", m.data.$values);
            formSchemaField.data = m.data.$values.map(x => { return {name: x.value, value: x.value}});
            formSchemaField.formSchemaFieldDataTypeData = formSchemaField.data.map(d => d.name);

            if (m.fieldDataType.name === "CheckBox") {
                formSchemaField.checkBoxData = formSchemaField.formSchemaFieldDataTypeData.join("\n");
            }
            if (m.fieldDataType.name === "RadioBox") {
                formSchemaField.radioBoxData = formSchemaField.formSchemaFieldDataTypeData.join("\n");
            }
            if (m.fieldDataType.name === "SelectBox") {
                formSchemaField.displaySelectBoxData = formSchemaField.formSchemaFieldDataTypeData.map(x => {return { label:x, value:x}});
                formSchemaField.selectBoxData = formSchemaField.formSchemaFieldDataTypeData.join("\n");
            }
            return formSchemaField;

        });

        //console.log("DraggableList.selectedInputList -----", this.draggableList.selectedInputList);
        this.selectedFormSchemaCategory = formSchemaCategoriesToSelect.id;

        if (formSchemaCategoriesToSelect.id) {
            this.entityEventListDropDown(this.selectedFormSchemaCategory);
        }
    }

    dragStart(event, item: IFormSchemaFieldDataType) {
        this.draggedItem = item;
    }

    dragEnd(event) {
    }

    drop(event) {
        //console.log("Drop dragged item in the -------", this.draggedItem);
        this.switchDropDialog(this.draggedItem.name);

        let innertext = event.path[0].innerText;
        this.formInputData.fieldDataType = this.draggedItem;
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

    saveRadioBoxData() {
        this.formInputData.order = this.orderNumber++;
        this.formInputData.formSchemaFieldDataTypeData = this.formInputData.radioBoxData.split("\n");
        this.formInputData.data = this.formInputData.formSchemaFieldDataTypeData.map(x => {return {name:x, value: x}})

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

    saveCheckBoxData() {
        this.formInputData.order = this.orderNumber++;
        this.formInputData.formSchemaFieldDataTypeData = this.formInputData.checkBoxData.split("\n");
        this.formInputData.data = this.formInputData.formSchemaFieldDataTypeData.map(x => {return {name:x, value: x}})
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
        /*this.sampleSelectBoxItems = this.formInputData.selectBoxData.split("\n").map(item => {
            return {label: item, value: item};
        });*/
        this.formInputData.formSchemaFieldDataTypeData = this.formInputData.selectBoxData.split("\n");
        this.formInputData.data = this.formInputData.formSchemaFieldDataTypeData.map(x => {return {name:x, value: x}})
        this.formInputData.displaySelectBoxData = this.formInputData.formSchemaFieldDataTypeData.map(x => {return {label:x, value: x}})
        let copyData = Object.assign({}, this.formInputData);
        this.draggableList.selectedInputList.push(copyData);
        this.formInputData.data = [];
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

    removeItemMod() {
        this.closeModDialogs();
        let item = this.selectedFormInputData;
        this.draggableList.selectedInputList = this.draggableList.selectedInputList.filter(x => x != item);
    }

    closeModDialogs() {
        this.displayCheckBoxMod = false;
        this.displaySelectBoxMod = false;
        this.displayRadioBoxMod = false;
        this.displayTextAreaBoxMod = false;
        this.displayTextBoxMod = false;
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
        let formSchemaData: IFormSchema = new FormSchema('', false, []);

        formSchemaData.id = this.formSchemaId;
        formSchemaData.name = this.formName;
        formSchemaData.fields = this.draggableList.selectedInputList;
        formSchemaData.formSchemaCategoryIds.push(this.selectedFormSchemaCategory);
        formSchemaData.formSchemaEntityEvents.push({
            entityEventId: this.selectedEntityEvent
        });

        formSchemaData.fields.map(item => {
            let fieldDataType: any = item;
            if (fieldDataType.fieldDataType.name === "TextAreaBox")
            {
                item.data = [];
                item.formSchemaFieldDataTypeData = [];
            }

            if (fieldDataType.fieldDataType.name === "TextBox") {
                item.data = [];
                item.formSchemaFieldDataTypeData = [];
            }

            if (item.checkBoxData) {
                item.data = item.checkBoxData.split("\n").map(x => {
                    return {name:x, value:x};
                });
            }

            if (item.radioBoxData) {
                item.data = item.radioBoxData.split("\n").map(x => {
                    return {name:x, value:x};
                });
            }

            if (item.selectBoxData) {
                item.data = item.selectBoxData.split("\n").map(x => {
                    return {name:x, value:x};
                });
                console.log("selectBoxData --------", item.data);
            }
        })

        console.log("Form to sent ---------", formSchemaData);
        this.formSchemaService.postUpdate(formSchemaData)
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
