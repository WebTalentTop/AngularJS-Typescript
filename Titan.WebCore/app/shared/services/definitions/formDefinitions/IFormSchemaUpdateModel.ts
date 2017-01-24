/**
 * Created by ZeroInfinity on 1/23/2017.
 */
export interface IFormSchemaUpdateModel {
    name:string;
    id:string;
    fields:IFields[];
}

export interface IFields {
    name:string;
    order?:number;
    label:string;
    isRequired:boolean;
    maxLength?:number;
    formSchemaFieldDataTypeId?:string;
    data?:IFieldData[];
}

export interface IFieldData {
    name:string;
    value:string;
    order?:number;
}

export class FormSchemaUpdateModel implements IFormSchemaUpdateModel {
    constructor(public name:string,public id:string, public fields:IFields[]){}
}

export class Fields implements IFields {
    constructor(
        public name:string,
        public label:string,
        public isRequired:boolean,
        public maxLength?:number,
        public order?:number,
        public formSchemaFieldDataTypeId?:string,
        public data?:IFieldData[]
    ){}
}

export class FieldData implements IFieldData {
    constructor(
        public name:string,
        public value:string,
        public order?:number
    ){}
}