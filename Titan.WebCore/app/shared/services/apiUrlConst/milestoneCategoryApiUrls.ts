import { titanApiUrl } from './titanApiUrl';
import { GridApiUrl } from './gridApiUrls';

export class MilestoneCategoryApiUrl {
    public static gridApiUrl:string  = GridApiUrl.milestoneCategoryGridUrl;
    public static postCreatedUrl: string = titanApiUrl + 'milestoneCategory/post';
    public static postUpdateUrl: string = titanApiUrl + 'milestoneCategory/put';
    public static getByIdUrl: string = titanApiUrl + 'milestoneCategory/get';
}