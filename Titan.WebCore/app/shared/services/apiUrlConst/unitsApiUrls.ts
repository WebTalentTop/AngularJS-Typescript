import { titanApiUrl } from './titanApiUrl';
import { GridApiUrl } from './gridApiUrls';

export class UnitsApiUrl {
    public static gridApiUrl:string  = GridApiUrl.unitsGridUrl;
    public static postCreatedUrl: string = titanApiUrl + 'units/post';
    public static postUpdateUrl: string = titanApiUrl + 'units/put';
    public static getByIdUrl: string = titanApiUrl + 'units/get';
}