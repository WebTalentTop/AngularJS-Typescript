import {IFormSchemaField} from "./IFormSchemaField";
/**
 * Created by ZeroInfinity on 12/4/2016.
 */
export interface IFormSchema {
    formSchemaCategoryIds?:any[],
    entityEventFormSchemaCategories?:any[],
    name:string;
    fields:IFormSchemaField[];
}

export class FormSchema implements IFormSchema {
    constructor(
        public name:string,
        public fields:IFormSchemaField[],
        public formSchemaCategoryIds?:any[],
        public entityEventFormSchemaCategories?:any[],
    )
    {
        this.formSchemaCategoryIds = [];
        this.entityEventFormSchemaCategories = [];
    }
}