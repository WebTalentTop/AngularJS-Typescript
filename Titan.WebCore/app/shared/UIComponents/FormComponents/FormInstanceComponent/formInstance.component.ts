/**
 * Created by ZeroInfinity on 12/19/2016.
 */
import {Component, Input, Output, EventEmitter} from '@angular/core';
import {FormInstanceService} from '../../../services/formInstance.service';
import {FormSchemaFieldDataTypeService} from '../../../services/formSchemaFieldDataType.service';
import {IFormInstance, FormInstance} from '../../../services/definitions/IFormInstance';
import {IFormSchemaFieldDataType} from '../../../services/definitions/IFormSchemaFieldDataType';
import {IFormSchemaField} from "../../../services/definitions/IFormSchemaField";
import {
    IFormInstanceFieldDataItem, IFormInstanceFieldDataItemForm,
    FormInstanceFieldDataItem
} from '../../../services/definitions/IFormInstanceFieldDataItem';

import { LoggerService } from '../../../services/logger/logger.service';
import {IFormInstanceSubmit} from "../../../services/definitions/formDefinitions/IFormInstanceSubmit";

@Component({
    selector: 'form-instance',
    templateUrl: 'app/shared/UIComponents/FormComponents/FormInstanceComponent/formInstance.component.html'
})

export class FormInstanceComponent {
    @Input() formSchemaVersionId: string;
    @Input() selectedInputList: any[] = [];
    @Input() entityIdentifierId: string;
    @Input() entityId: string;
    /*@Input() formSchema:any;*/
    @Input() formInstanceUpdateNotes:string;
    @Input() formName: string;
    @Input() formInstanceId:string;
    @Input() formInstanceUpdateData:any;
    @Input() formInstanceUpdateView:boolean;
    @Output() closeFormInstanceDialog = new EventEmitter();

    notes:string;
    formFieldDataTypeList: IFormSchemaFieldDataType[] = [];
    formFieldDataItemList: IFormInstanceFieldDataItemForm[] = [];
    fieldDataItem: IFormInstanceFieldDataItemForm;
    formInstance: IFormInstance = new FormInstance('', '', '', [],'');
    private displayNotesDialog: boolean = false;

    constructor(
        private ls:LoggerService,
        private formInstanceService: FormInstanceService,
        private formFieldDataTypeService: FormSchemaFieldDataTypeService) {
        this.ls.setShow(true);
    }

    ngOnInit() {
        /*this.ls.logConsole("Input selectedInputList ---------", this.selectedInputList);
        this.ls.logConsole("Input entityIdentifierId ----------", this.entityIdentifierId);
        this.ls.logConsole("Input EntityId --------------------", this.entityId);
        this.ls.logConsole("Input formName --------------------", this.formName);
        this.ls.logConsole("Input formSchemaVersionId: --------", this.formSchemaVersionId);

        this.ls.logConsole("formInstanceUpdateView----", this.formInstanceUpdateView);
        this.ls.logConsole("FormInstanceUpdateData----", this.formInstanceUpdateData);*/
        //let formInstanceFieldDatas = this.formInstanceUpdateData.fieldData.$values;
        //this.ls.logConsole("FormInstanceFieldDatas ---------", formInstanceFieldDatas);
        let formInstanceFieldDatas: any;
        if (this.formInstanceUpdateView) {
            console.log("FormInstanceUpdateData -------", this.formInstanceUpdateData.fieldData.$values);
            console.log("FormInstance selectedInputList ----", this.selectedInputList);
            formInstanceFieldDatas = this.formInstanceUpdateData.fieldData.$values;
            //this.selectedInputList = this.formInstanceUpdateData.fieldData.$values;
        }
        if (this.selectedInputList.length > 0) {
            this.selectedInputList.map(inputList => {
                //this.ls.logConsole("InputList in formInstance ngOnInit ----------", inputList);

                let newFormFieldItem:IFormInstanceSubmit = {
                    value:'',
                    label:'',
                    name:'',
                    id:'',
                    data:[],
                    checkBoxValue:[],
                    selectBoxValue:[],
                    radioBoxValue:'',
                    formSchemaFieldId:'',
                    formSchemaFieldDataTypeId:'',
                    formSchemaFieldDataTypeData:[],
                    formSchemaFieldDataTypeName:''
                };

                newFormFieldItem.formSchemaFieldId = inputList.id;
                newFormFieldItem.name = inputList.name;
                newFormFieldItem.label = inputList.label;
                newFormFieldItem.formSchemaFieldDataTypeId = inputList.formSchemaFieldDataTypeId;
                newFormFieldItem.formSchemaFieldDataTypeName = inputList.fieldDataType.name;
                let fieldTypeName = inputList.fieldDataType.name;
                let values = inputList.data.$values;

                if ( fieldTypeName === "CheckBox" || fieldTypeName === "RadioBox" ) {
                    newFormFieldItem.checkBoxValue = [];
                    newFormFieldItem.data = [];
                    newFormFieldItem.data = values;
                    newFormFieldItem.formSchemaFieldDataTypeData = values.map(x => x.name);
                }
                if ( fieldTypeName === "SelectBox" ) {
                    newFormFieldItem.selectBoxValue = [];
                    newFormFieldItem.data = [];
                    newFormFieldItem.data = values;
                    newFormFieldItem.formSchemaFieldDataTypeData = values.map(x => { return {label:x.name, value: x.name}});
                }

                this.formFieldDataItemList.push(newFormFieldItem);
                return newFormFieldItem;
            });

            if(this.formInstanceUpdateView) {
                formInstanceFieldDatas.map(fiData => {
                    let item = this.formFieldDataItemList
                        .filter(filter => filter.formSchemaFieldId === fiData.formSchemaFieldId)[0];

                    if (item.formSchemaFieldDataTypeName === "TextBox") {
                        item.value = fiData.value;
                    }

                    if (item.formSchemaFieldDataTypeName === "RadioBox") {
                        item.data.map(i =>{
                            if (i.id  = fiData.data.$values[0].formSchemaFieldDataTypeDataId) {
                                item.radioBoxValue = i.name;
                            }
                        });
                    }

                    if (item.formSchemaFieldDataTypeName === "CheckBox") {
                        fiData.data.$values.map(fi =>{
                            let fil = item.data.filter(filter => filter.id === fi.formSchemaFieldDataTypeDataId)[0];
                            item.checkBoxValue.push(fil.name)
                        });

                    }


                    //this.ls.logConsole("FormInstance Field data ----", fiData);
                    //this.ls.logConsole("Matching Item -----", item);
                })
            }

            //this.ls.logConsole("Form Field Data Item List------", this.formFieldDataItemList);
        }



        this.formInstance.entityId = this.entityId;
        this.formInstance.entityIdentifierId = this.entityIdentifierId;
        this.formInstance.formSchemaVersionId = this.formSchemaVersionId;
        this.formInstance.notes = this.formInstanceUpdateNotes;

        this.formFieldDataTypeService.getAll()
            .subscribe(res => {
                //this.ls.logConsole("FormFieldDataType List  ----------", res);
                if (res.isSuccess) {
                    this.formFieldDataTypeList = res.result;
                    //this.ls.logConsole("FormFieldDataTypeList itself -----------", this.formFieldDataTypeList);
                }
            });
    }

    checkFieldDataType(id): IFormSchemaFieldDataType {
        let fieldDataType: IFormSchemaFieldDataType = this.formFieldDataTypeList.filter(x => {
            if (x.id === id) {
                return x;
            }
        })[0];
        return fieldDataType;
    }

    collectForm(formValues) {

        //this.displayNotesDialog = true;
        if(this.formInstanceUpdateView){
            this.updateForm();
        }
        else {
            this.saveForm();
        }
    }

    updateForm() {

        this.ls.logConsole("FormSubmit formFieldDataItemList values -------------", this.formFieldDataItemList);

        this.formFieldDataItemList.map(itemList => {
            let formInstanceItem = this.formInstanceUpdateData
                .fieldData.$values
                .filter(filter => filter.formSchemaFieldId === itemList.formSchemaFieldId
                )[0];
            itemList.id = formInstanceItem.id;
        })

        this.formInstance.fieldData = this.formFieldDataItemList.map(res => {
            let item = new FormInstanceFieldDataItem('', '', '', '', []);

            if (res.formSchemaFieldDataTypeName === "CheckBox") {
                item.data = res.checkBoxValue.map(x => {
                    return {id: res.data.filter(f => f.name === x)[0].id};
                })
            }

            if (res.formSchemaFieldDataTypeName === "SelectBox") {
                item.data = res.selectBoxValue.map(x => {
                    return {id: res.data.filter(f => f.name === x.value)[0].id};
                })
            }

            if (res.formSchemaFieldDataTypeName === "RadioBox") {
                item.data.push({id: res.data.filter(f=> f.name === res.radioBoxValue)[0].id});
            }

            item.value = res.value;
            item.formSchemaFieldId = res.formSchemaFieldId;
            item.formSchemaField = {id: res.formSchemaFieldId};
            item.id = res.id;
            return item;
        });

        this.formInstance.formInstanceStateId = 'BF798F6C-B846-403A-9A8E-29F008978754';
        this.ls.logConsole("FormInstance Values ----------", this.formInstance);

        var postResult = this.formInstanceService.postUpdate(this.formInstance)
            .subscribe(dataResult => {
                this.ls.logConsole("DataResult From Post ----------", dataResult);
                this.ls.logConsole("Post Result Data -----------", postResult);
                if (dataResult.isSuccess) {
                    this.formInstance = new FormInstance('', '', '', []);
                    this.formFieldDataTypeList = [];
                    this.closeForm();
                }
                return dataResult;
            });
    }

    saveForm() {

        //this.formInstance.notes = this.notes;
        //this.displayNotesDialog = false;

        this.ls.logConsole("FormSubmit formFieldDataItemList values -------------", this.formFieldDataItemList);

        this.formInstance.fieldData = this.formFieldDataItemList.map(res => {
            let item = new FormInstanceFieldDataItem('', '', '','', []);

            if (res.formSchemaFieldDataTypeName === "CheckBox") {
                item.data = res.checkBoxValue.map(x => {
                    return {id: res.data.filter(f => f.name === x)[0].id};
                })
            }

            if (res.formSchemaFieldDataTypeName === "SelectBox") {
                item.data = res.selectBoxValue.map(x => {
                    return {id: res.data.filter(f => f.name === x.value)[0].id};
                })
            }

            if (res.formSchemaFieldDataTypeName === "RadioBox") {
                item.data.push({id: res.data.filter(f=> f.name === res.radioBoxValue)[0].id});
            }

            item.value = res.value;
            item.formSchemaFieldId = res.formSchemaFieldId;
            item.formSchemaField = {id: res.formSchemaFieldId};
            return item;
        });

        this.formInstance.formInstanceStateId = 'BF798F6C-B846-403A-9A8E-29F008978754';
        this.ls.logConsole("FormInstance Values ----------", this.formInstance);

        /*var postResult = this.formInstanceService.postAdd(this.formInstance)
            .subscribe(dataResult => {
                this.ls.logConsole("DataResult From Post ----------", dataResult);
                this.ls.logConsole("Post Result Data -----------", postResult);
                if (dataResult.isSuccess) {
                    this.formInstance = new FormInstance('', '', '', []);
                    this.formFieldDataTypeList = [];
                    this.closeForm();
                }
                return dataResult;
            });*/
    }



    closeForm() {
        this.closeFormInstanceDialog.emit();
    }

}