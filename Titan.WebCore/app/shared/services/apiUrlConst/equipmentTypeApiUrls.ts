import { titanApiUrl } from './titanApiUrl';
import { GridApiUrl } from './gridApiUrl';
export class EquipmentTypeApiUrl {
    public static gridApiUrl:string  = GridApiUrl.testFacilityGridUrl;
    public static postCreatedUrl: string = titanApiUrl + 'equipmentType';
    public static postUpdateUrl: string = titanApiUrl + 'equipmentType';
    public static getByIdUrl: string = titanApiUrl + 'equipmentType';
}