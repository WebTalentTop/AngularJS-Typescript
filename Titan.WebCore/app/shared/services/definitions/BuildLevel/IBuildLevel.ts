/**
 * Created by ZeroInfinity on 1/11/2017.
 */
export interface IBuildLevel {
    id:string;
    tenantId?:string;
    name:string;
    description:string;
    locale:string;
    isDeleted?:boolean;
    userCreatedById:string;
    createdOn:string;
    userModifiedById?:string;
    modifiedOn?:string;
    defaultLocale:string;
    rowType:string;
}