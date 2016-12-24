import { IFormInstanceFieldDataItem} from "./IFormInstanceFieldDataItem";
/**
 * Created by ZeroInfinity on 12/20/2016.
 */
export interface IFormInstance {
 formSchemaVersionId:string;
 entityIdentifierId:string;
 entityId:string;
 formInstanceStateId?:string;
 fieldData:IFormInstanceFieldDataItem[];
}


export class FormInstance implements IFormInstance {
 constructor (
     public entityId:string,
     public entityIdentifierId:string,
     public formSchemaVersionId:string,
     public fieldData:IFormInstanceFieldDataItem[],
     public formInstanceStateId?:string
 )
 {}
}
