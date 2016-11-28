import { titanApiUrl } from './titanApiUrl';
import { GridApiUrl } from './gridApiUrls';

export class ProjectRoleApiUrl {
    public static gridApiUrl:string  = GridApiUrl.projectRoleGridUrl;
    public static postCreatedUrl: string = titanApiUrl + 'projectRole';
    public static postUpdateUrl: string = titanApiUrl + 'projectRole';
    public static getByIdUrl: string = titanApiUrl + 'projectRole';
}