import { titanApiUrl } from '../titanApiUrl';
import { GridApiUrl } from '../gridApiUrls';

export class CalendarApiUrl {
   public static gridApiUrl:string  = GridApiUrl.calendarGridUrl;
    public static postCreatedUrl: string = titanApiUrl + 'calendar';
    public static postUpdateUrl: string = titanApiUrl + 'calendar';
    public static getByIdUrl: string = titanApiUrl + 'calendar';
    public static getCalendarSettingsByTenantIdUrl: string = titanApiUrl + 'calendar/calendarSettings/';

}