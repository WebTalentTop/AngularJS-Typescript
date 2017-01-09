import {IFormSchemaField} from "./IFormSchemaField";
/**
 * Created by ZeroInfinity on 12/4/2016.
 */
export interface IFormSchema {

    formSchemaCategoryIds?:any[],
    formSchemaEntityEvents?:any[],
    name:string;
    isDeleted:boolean;
    id?:string;
    version?:number;
    entityEventIds?:any[];
    fields:IFormSchemaField[];
}

export interface IFormSchemaGridMF {
    createdOn?:string;
    formSchemaCategoryIds?:any[],
    formSchemaEntityEvents?:any[],
    name:string;
    userFullName:string;
    isDeleted:boolean;
    id?:string;
    version?:number;
    entityEventIds?:any[];
    fields:IFormSchemaField[];
}

export class FormSchema implements IFormSchema {
    constructor(
        public name:string,
        public isDeleted:boolean = false,
        public fields:IFormSchemaField[],
        public id?:string,
        public formSchemaCategoryIds?:any[],
        public formSchemaEntityEvents?:any[],
        public entityEventIds?:any[],
        public version?:number
    )
    {
        this.formSchemaCategoryIds = [];
        this.formSchemaEntityEvents = [];
        this.entityEventIds = [];
    }
}