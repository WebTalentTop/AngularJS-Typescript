import { titanApiUrl } from './titanApiUrl';
import { GridApiUrl } from './gridApiUrls';

export class MilestoneStatusApiUrl {
    public static gridApiUrl:string  = GridApiUrl.milestoneStatusGridUrl;
    public static postCreatedUrl: string = titanApiUrl + 'milestoneStatus/post';
    public static postUpdateUrl: string = titanApiUrl + 'milestoneStatus/put';
    public static getByIdUrl: string = titanApiUrl + 'milestoneStatus/get';
}