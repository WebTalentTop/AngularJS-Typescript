import { titanApiUrl } from './titanApiUrl';
import { GridApiUrl } from './gridApiUrls';

export class ShiftApiUrl {
    public static gridApiUrl:string  = GridApiUrl.shiftGridUrl;
    public static postCreatedUrl: string = titanApiUrl + 'shift';
    public static postUpdateUrl: string = titanApiUrl + 'shift';
    public static getByIdUrl: string = titanApiUrl + 'shift';
}