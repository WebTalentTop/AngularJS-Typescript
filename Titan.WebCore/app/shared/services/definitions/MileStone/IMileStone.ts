/**
 * Created by ZeroInfinity on 1/11/2017.
 */
export interface IMileStone {
    id:string;
    name:string;
    userCreatedById:string;
    createdOn:string;
    userModifiedById:string;
    modifiedOn:string;
    userDeletedById:string;
    deletedOn:string;
    isDeleted:boolean;
}