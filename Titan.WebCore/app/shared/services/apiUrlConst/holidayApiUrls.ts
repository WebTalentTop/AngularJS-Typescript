import { titanApiUrl } from './titanApiUrl';
import { GridApiUrl } from './gridApiUrls';

export class HolidayApiUrl {
    public static gridApiUrl:string  = GridApiUrl.holidayGridUrl;
    public static postCreatedUrl: string = titanApiUrl + 'holiday/post';
    public static postUpdateUrl: string = titanApiUrl + 'holiday/put';
    public static getByIdUrl: string = titanApiUrl + 'holiday/get';
    public static getAllUrl: string = titanApiUrl + 'holiday';
}