/**
 * Created by ZeroInfinity on 12/19/2016.
 */
import { Component, Input} from '@angular/core';
import { FormInstanceService } from '../../../services/formInstance.service';
import { FormSchemaFieldDataTypeService } from '../../../services/formSchemaFieldDataType.service';
import { IFormInstance, FormInstance } from '../../../services/definitions/IFormInstance';
import { IFormSchemaFieldDataType } from '../../../services/definitions/IFormSchemaFieldDataType';
import { IFormSchemaField } from "../../../services/definitions/IFormSchemaField";
import {
    IFormInstanceFieldDataItem, IFormInstanceFieldDataItemForm,
    FormInstanceFieldDataItem
} from '../../../services/definitions/IFormInstanceFieldDataItem';

@Component({
    selector:'form-instance',
    templateUrl: 'app/shared/UIComponents/FormComponents/FormInstanceComponent/formInstance.component.html'
})

export class FormInstanceComponent {
    @Input() formSchemaVersionId:string;
    @Input() selectedInputList:any[] = [];
    @Input() entityIdentifierId:string;
    @Input() entityId:string;
    /*@Input() formSchema:any;*/
    @Input() formName:string;
    formFieldDataTypeList:IFormSchemaFieldDataType[] =[];
    formFieldDataItemList:IFormInstanceFieldDataItemForm[] = [];
    fieldDataItem:IFormInstanceFieldDataItemForm;
    formInstance:IFormInstance = new FormInstance('','','', []) ;

    constructor(private formInstanceService:FormInstanceService, private formFieldDataTypeService: FormSchemaFieldDataTypeService) {

    }

    ngOnInit() {
       /* console.log("FI OnInit selectedInputList-----", this.selectedInputList);
        console.log("FI OnInit VersionId----", this.formSchemaVersionId);
        console.log("FI OnInit entityIdentifierId----", this.entityIdentifierId);
        console.log("FI OnInit entityId----", this.entityId);

        this.formInstance.entityIdentifierId = this.entityIdentifierId;
        this.formInstance.entityId = this.entityId;
        this.formInstance.formSchemaVersionId = this.formSchemaVersionId;
*/
        if (this.selectedInputList.length > 0) {
            this.selectedInputList.map(inputList => {
                console.log("InputList in formInstance ngOnInit ----------", inputList);

                let newFormFieldItem = {value:'',label:'', name: '', formSchemaFieldId:'', formSchemaFieldDataTypeId: '', formSchemaFieldDataTypeName:''};
                newFormFieldItem.formSchemaFieldId = inputList.id;
                newFormFieldItem.name = inputList.name;
                newFormFieldItem.label = inputList.label;
                newFormFieldItem.formSchemaFieldDataTypeId = inputList.formSchemaFieldDataTypeId;
                newFormFieldItem.formSchemaFieldDataTypeName = inputList.fieldDataType.name;
                this.formFieldDataItemList.push(newFormFieldItem);
                return newFormFieldItem;
            });

            console.log("Form Field Data Item List------", this.formFieldDataItemList);
        }

        this.formInstance.entityId = this.entityId;
        this.formInstance.entityIdentifierId = this.entityIdentifierId;
        this.formInstance.formSchemaVersionId = this.formSchemaVersionId;

        this.formFieldDataTypeService.getAll()
            .subscribe(res =>{
                //console.log("FormFieldDataType List  ----------", res);
                if(res.isSuccess){
                    this.formFieldDataTypeList = res.result;
                    //console.log("FormFieldDataTypeList itself -----------", this.formFieldDataTypeList);
                }
            });
    }

    checkFieldDataType(id): IFormSchemaFieldDataType {
        let fieldDataType:IFormSchemaFieldDataType = this.formFieldDataTypeList.filter(x => {
            if( x.id === id) {
                return x;
            }
        })[0];
        return fieldDataType;
    }

    saveForm(formValues) {
        console.log("FormVaglues to ave ----------", formValues);

        console.log("FormSubmit formFieldDataItemList values -------------", this.formFieldDataItemList);
        this.formInstance.fieldData = this.formFieldDataItemList.map(res => {
            let item = new FormInstanceFieldDataItem('', '', '', []);
            item.value = res.value;
            item.formSchemaFieldId = res.formSchemaFieldId;
            item.formSchemaField = {id:res.formSchemaFieldId};
            return item;
        });

        this.formInstance.formInstanceStateId = 'C0CE3C5F-4B6D-4123-83E1-F8784898B3E2';
        console.log("FormInstance Values ----------", this.formInstance);

        var postResult =this.formInstanceService.postAdd(this.formInstance)
            .subscribe(dataResult => {
                console.log("DataResult From Post ----------", dataResult);
                return dataResult;
            });
        console.log("Post Result Data -----------", postResult);
    }

}