import { titanApiUrl } from './titanApiUrl';
import { GridApiUrl } from './gridApiUrls';

export class ShiftApiUrl {
    public static gridApiUrl:string  = GridApiUrl.shiftGridUrl;
    public static postCreatedUrl: string = titanApiUrl + 'shift/post';
    public static postUpdateUrl: string = titanApiUrl + 'shift/put';
    public static getByIdUrl: string = titanApiUrl + 'shift/get';
}