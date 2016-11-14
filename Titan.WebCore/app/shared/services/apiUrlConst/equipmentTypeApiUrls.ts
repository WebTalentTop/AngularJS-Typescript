import { titanApiUrl } from './titanApiUrl';
import { GridApiUrl } from './gridApiUrls';

export class EquipmentTypeApiUrl {
    public static gridApiUrl:string  = GridApiUrl.equipmentTypeGridUrl;
    public static postCreatedUrl: string = titanApiUrl + 'equipmentType';
    public static postUpdateUrl: string = titanApiUrl + 'equipmentType';
    public static getByIdUrl: string = titanApiUrl + 'equipmentType';
}