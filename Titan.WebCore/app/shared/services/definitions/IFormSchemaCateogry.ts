/**
 * Created by ZeroInfinity on 12/16/2016.
 */

export interface IFormSchemaCategory {
    id:string;
    name:string;
    entityIdentifierId:string;
    entitySubTypeIdentifierId?:string;
    entitySubTypeId?:string;
    entityIdentifierSubTypeColumnName?:string;
    userCreatedById?:string;
    createdOn?:string;
    userModifiedById?:string;
    modifiedOn?:string;
    isDeleted?:boolean;
}

export class FormSchemaCategory implements IFormSchemaCategory{
    constructor(
        public id:string,
        public name:string,
        public entityIdentifierId:string,
        public entitySubTypeIdentifierId?:string,
        public entitySubTypeId?:string,
        public entityIdentifierSubTypeColumnName?:string,
        public userCreatedById?:string,
        public createdOn?:string,
        public userModifiedById?:string,
        public modifiedOn?:string,
        public isDeleted?:boolean
    ){}
}