import {SelectItem} from "primeng/primeng";
/**
 * Created by ZeroInfinity on 1/3/2017.
 */
export interface IFormInstanceSubmit {
    value:string;
    label:string;
    name:string;
    data:any[];
    checkBoxValue:string[];
    selectBoxValue:SelectItem[];
    radioBoxValue:string;
    formSchemaFieldId:string;
    formSchemaFieldDataTypeId:string;
    formSchemaFieldDataTypeData:any[];
    formSchemaFieldDataTypeName:string;
    id?:string;
}