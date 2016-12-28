import {IFormSchemaField} from "./IFormSchemaField";
import {IFormSchemaFieldDataType} from "./IFormSchemaFieldDataType";
/**
 * Created by ZeroInfinity on 12/23/2016.
 */

export interface IDraggableList {
    formFieldDataTypeList:IFormSchemaFieldDataType[];
    selectedInputList:IFormSchemaField[];
}

export class DraggableList implements IDraggableList {
    constructor(
        public formFieldDataTypeList:IFormSchemaFieldDataType[],
        public selectedInputList:IFormSchemaField[]

    )
    {
        this.formFieldDataTypeList = [];
        this.selectedInputList = []
    }
}