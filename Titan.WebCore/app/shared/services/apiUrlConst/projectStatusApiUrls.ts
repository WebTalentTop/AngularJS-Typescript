import { titanApiUrl } from './titanApiUrl';
import { GridApiUrl } from './gridApiUrls';

export class ProjectStatusApiUrl {
    public static gridApiUrl:string  = GridApiUrl.projectStatusGridUrl;
    public static postCreatedUrl: string = titanApiUrl + 'projectStatus';
    public static postUpdateUrl: string = titanApiUrl + 'projectStatus';
    public static getByIdUrl: string = titanApiUrl + 'projectStatus';
}