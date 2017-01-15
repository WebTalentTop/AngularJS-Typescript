/**
 * Created by ZeroInfinity on 1/12/2017.
 */
export interface IProjectBuildLevelMap {
    id:string;
    projectId:string;
    buildLevelId:string;
    isDeleted:string;
    name:string;
    description:string;
    locale:string;
    userCreatedById:string;
    createdOn:string;
    userModifiedById?:string;
    modifiedOn?:string;
    userDeletedById?:string;
    deletedOn?:string;
}