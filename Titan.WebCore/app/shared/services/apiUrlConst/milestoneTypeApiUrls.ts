import { titanApiUrl } from './titanApiUrl';
import { GridApiUrl } from './gridApiUrls';

export class MilestoneTypeApiUrl {
    public static gridApiUrl:string  = GridApiUrl.milestoneTypeGridUrl;
    public static postCreatedUrl: string = titanApiUrl + 'milestoneType/post';
    public static postUpdateUrl: string = titanApiUrl + 'milestoneType/put';
    public static getByIdUrl: string = titanApiUrl + 'milestoneType/get';
}