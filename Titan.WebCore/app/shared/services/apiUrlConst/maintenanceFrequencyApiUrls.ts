import { titanApiUrl } from './titanApiUrl';
import { GridApiUrl } from './gridApiUrls';

export class MaintenanceFrequencyApiUrl {
    public static gridApiUrl:string  = GridApiUrl.maintenanceFrequencyGridUrl;
    public static postCreatedUrl: string = titanApiUrl + 'maintenanceFrequency/post';
    public static postUpdateUrl: string = titanApiUrl + 'maintenanceFrequency/put';
    public static getByIdUrl: string = titanApiUrl + 'maintenanceFrequency/get';
}