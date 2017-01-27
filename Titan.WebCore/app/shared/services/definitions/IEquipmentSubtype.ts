export interface IEquipmentSubtype {
    id?:string;
    isDeleted: boolean;
    name:string;
    description?: string;
    calibrationform?: string;
    frequency?: string;
    frequencyDescription?: string;
    parentId?: string;
}

export class PrimeEquipmentSubType implements IEquipmentSubtype {

    constructor(public isDeleted: boolean,
                public name: string,
                public id?: string,
                public description?: string,
                public calibrationform?: string,
                public frequency?: string,
                public frequencyDescription?: string,
                public parentId?: string) {
    }
}