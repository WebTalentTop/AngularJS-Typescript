import {Component} from "@angular/core";
import {EntityEventService} from '../../../shared/services/entityEvent.service';
import {FormSchemaService} from '../../../shared/services/formSchema.service';
import {FormSchemaCategoryService} from '../../../shared/services/formSchemaCategory.service';
import {FormSchemaFieldDataTypeService} from '../../../shared/services/formSchemaFieldDataType.service';
import {IFormBuilderTypes} from '../../../shared/services/definitions/IFormBuilderTypes';
import {IFormBuilderReturnData} from '../../../shared/services/definitions/IFormBuilderReturnData';
import {IFormSchemaFieldDataType} from "../../../shared/services/definitions/IFormSchemaFieldDataType";
import {IFormSchemaField} from "../../../shared/services/definitions/IFormSchemaField";
import {IFormSchema, FormSchema} from "../../../shared/services/definitions/IFormSchema";

import {IDraggableList, DraggableList} from '../../../shared/services/definitions/IDraggableList';

import {ITitanSelectItem} from '../../../shared/services/definitions/ITitanSelectItem';
import {SelectItem} from 'primeng/primeng';
import { Router } from '@angular/router';

@Component({
    selector: 'formBuilders',
    templateUrl: 'app/body/Admin/FormBuilder/formbuilder.component.html'
})
export class FormBuildersComponent {
    title: string = "Form Builder";

    // Grid Variables
    gridData:any[] = [];

    selectedFormInstance:any;

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

    constructor(
                private router: Router,
                private entityEventService: EntityEventService,
                private formSchemaService: FormSchemaService,
                private formSchemaCategoryService: FormSchemaCategoryService,
                private formFieldDataTypeService: FormSchemaFieldDataTypeService
                ) {}
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

    onFormSchemaCategoryChange(event) {
        console.log("OnFormSchemaCategoryChange ----------", event);
        console.log("SelectedFormSchemaCategory ----------", this.selectedFormSchemaCategory);
        this.formSchemaService.getFormSchemaGrid(this.selectedFormSchemaCategory)
            .subscribe(res => {
                console.log("FormSChemaService call ----------", res);

                this.gridData= res.result;
            });
    }
    handleRowSelect(event){
        console.log("HandleRowSelect Event ----------", event);
        console.log("HandleRowSelect FormInstance Selected ----------", this.selectedFormInstance);

        this.router.navigate(['admin/formBuilders/details', this.selectedFormInstance.id]);
    }

}
