import {SelectItem} from "primeng/primeng";
/**
 * Created by ZeroInfinity on 12/19/2016.
 */
// Return to Web Api Data
export interface IFormInstanceFieldDataItem{
    value?:any;
    formSchemaFieldId:string;
    formSchemaField?:any;
    data?:any[];
    id?:string;
}

export class FormInstanceFieldDataItem implements IFormInstanceFieldDataItem {
    constructor(
        public formSchemaFieldId:string,
        public formSchemaField?:any,
        public value?:any,
        public id?:string,
        public data?:any[]
    )
    {}
}

//To use in the form itself
export interface IFormInstanceFieldDataItemForm{
    value?:any;
    name:string;
    label?:string;
    checkBoxValue:string[];
    radioBoxValue:string;
    selectBoxValue:SelectItem[];
    formSchemaFieldId:string;
    formSchemaFieldDataTypeId:string;
    formSchemaFieldDataTypeName:string;
    formSchemaField?:any;
    data?:any[];
    id?:string;
}