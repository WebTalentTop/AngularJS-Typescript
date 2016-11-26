import { titanApiUrl } from './titanApiUrl';
import { GridApiUrl } from './gridApiUrls';

export class MilestoneEventApiUrl {
    public static gridApiUrl:string  = GridApiUrl.milestoneEventGridUrl;
    public static postCreatedUrl: string = titanApiUrl + 'milestoneEvent';
    public static postUpdateUrl: string = titanApiUrl + 'milestoneEvent';
    public static getByIdUrl: string = titanApiUrl + 'milestoneEvent';
}