/**
 * Created by ZeroInfinity on 1/6/2017.
 */

export interface IUserProfile {
    id:string;
    firstName:string;
    lastName:string;
    userName?:string;
    displayName:string;
    emailAddress:string;
    isEverLoggedIn:boolean;
    lastLoggedOn?:string;
    defaultLocale:string;
    isDeleted:boolean;
    departmentId?:string;
    defaultTenantId?:string;
    createdOn?:string;
    userCreatedById?:string;
    userModifiedById?:string;
    modifiedOn?:string;
    userDeletedById?:string;
    deletedOn?:string;
    defaultTimeZoneId:string;
}