import { titanApiUrl } from './titanApiUrl';
import { GridApiUrl } from './gridApiUrls';

export class VehicleApiUrl {
    public static gridApiUrl:string  = GridApiUrl.vehicleGridUrl;
    public static postCreatedUrl: string = titanApiUrl + 'vehicle';
    public static postUpdateUrl: string = titanApiUrl + 'vehicle';
    public static getByIdUrl: string = titanApiUrl + 'vehicle';
}