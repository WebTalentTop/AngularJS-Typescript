import { titanApiUrl } from './titanApiUrl';
import { GridApiUrl } from './gridApiUrls';

export class ScheduleApiUrl {
    public static gridApiUrl:string  = GridApiUrl.scheduleGridUrl;
    public static postCreatedUrl: string = titanApiUrl + 'schedule';
    public static postUpdateUrl: string = titanApiUrl + 'schedule';
    public static getByIdUrl: string = titanApiUrl + 'schedule';
}