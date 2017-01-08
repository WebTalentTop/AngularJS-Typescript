/**
 * Created by 12thWonder on 1/5/2017.
 */

export interface IUserProfile {
    id:string;
    firstName:string;
    lastName:string;
    userName:string;
    displayName:string;
    emailAddress:string;
    isEverLoggedIn:boolean;
    lastLoggedOn:string;
    defaultLocale:string;
    isDeleted:boolean;
    departmentId:string;
    createdOn:string;
    userCreatedById:string;
    userModifiedById:string;
    userDeletedById:string;
    deletedOn:string;
}