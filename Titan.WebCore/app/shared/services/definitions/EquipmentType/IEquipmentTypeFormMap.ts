/**
 * Created by ZeroInfinity on 1/25/2017.
 */
export interface IEquipmentTypeFormMap {
    id?:string;
    equipmentTypeId:string;
    equipmentSubTypeId?:string;
    formSchemaCategoryId:string;
    formSchemaId:string;
    entityEventId:string;
    entityIdentifierId:string;
    userCreatedById?:string;
    createdOn?:string;
    userModifiedById?:string;
    modifiedOn?:string;
    isDeleted:boolean;
}