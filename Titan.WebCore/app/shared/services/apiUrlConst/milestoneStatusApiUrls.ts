import { titanApiUrl } from './titanApiUrl';
import { GridApiUrl } from './gridApiUrls';

export class MilestoneStatusApiUrl {
    public static gridApiUrl:string  = GridApiUrl.milestoneStatusGridUrl;
    public static postCreatedUrl: string = titanApiUrl + 'milestoneStatus';
    public static postUpdateUrl: string = titanApiUrl + 'milestoneStatus';
    public static getByIdUrl: string = titanApiUrl + 'milestoneStatus';
}