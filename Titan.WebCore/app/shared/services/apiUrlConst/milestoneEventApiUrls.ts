import { titanApiUrl } from './titanApiUrl';
import { GridApiUrl } from './gridApiUrls';

export class MilestoneEventApiUrl {
    public static gridApiUrl:string  = GridApiUrl.milestoneEventGridUrl;
    public static postCreatedUrl: string = titanApiUrl + 'milestoneEvent/post';
    public static postUpdateUrl: string = titanApiUrl + 'milestoneEvent/put';
    public static getByIdUrl: string = titanApiUrl + 'milestoneEvent/get';
}