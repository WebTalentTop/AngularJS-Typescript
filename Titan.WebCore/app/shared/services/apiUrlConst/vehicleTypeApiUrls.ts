import { titanApiUrl } from './titanApiUrl';
import { GridApiUrl } from './gridApiUrls';

export class VehicleTypeApiUrl {
    public static gridApiUrl:string  = GridApiUrl.vehicleTypeGridUrl;
    public static postCreatedUrl: string = titanApiUrl + 'vehicleType/post';
    public static postUpdateUrl: string = titanApiUrl + 'vehicleType/put';
    public static getByIdUrl: string = titanApiUrl + 'vehicleType/get';
}