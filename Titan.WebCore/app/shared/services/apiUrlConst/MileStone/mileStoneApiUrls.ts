import { titanApiUrl } from '../titanApiUrl';
import { GridApiUrl } from '../gridApiUrls';

export class MilestoneApiUrl {
    public static gridApiUrl:string  = GridApiUrl.milestoneGridUrl;
    public static postCreatedUrl: string = titanApiUrl + 'milestone/post';
    public static postUpdateUrl: string = titanApiUrl + 'milestone/put';
    public static getAllUrl:string = titanApiUrl + 'milestone/getAll';
    public static getByIdUrl: string = titanApiUrl + 'milestone/get';
}