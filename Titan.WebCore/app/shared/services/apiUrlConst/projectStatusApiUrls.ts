import { titanApiUrl } from './titanApiUrl';
import { GridApiUrl } from './gridApiUrls';

export class ProjectStatusApiUrl {
    public static gridApiUrl:string  = GridApiUrl.projectStatusGridUrl;
    public static postCreatedUrl: string = titanApiUrl + 'projectStatus/post';
    public static postUpdateUrl: string = titanApiUrl + 'projectStatus/put';
    public static getByIdUrl: string = titanApiUrl + 'projectStatus/get';
}