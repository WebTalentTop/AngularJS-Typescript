import { titanApiUrl } from './titanApiUrl';
import { GridApiUrl } from './gridApiUrls';

export class OperatingHoursApiUrl {
    public static gridApiUrl:string  = GridApiUrl.operatingHoursGridUrl;
    public static postCreatedUrl: string = titanApiUrl + 'operatingHours/post';
    public static postUpdateUrl: string = titanApiUrl + 'operatingHours/put';
    public static getByIdUrl: string = titanApiUrl + 'operatingHours/get';
}