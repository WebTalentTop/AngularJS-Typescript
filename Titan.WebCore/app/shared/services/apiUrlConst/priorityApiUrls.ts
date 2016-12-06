import { titanApiUrl } from './titanApiUrl'
import { GridApiUrl }  from './gridApiUrls';

export class PriorityApiUrl {
    public static gridApiUrl:string  = GridApiUrl.priorityGridUrl;
    public static postCreatedUrl: string = titanApiUrl + 'priority/post';
    public static postUpdateUrl: string = titanApiUrl + 'priority/put';
    public static getByIdUrl: string = titanApiUrl + 'priority/get';
}