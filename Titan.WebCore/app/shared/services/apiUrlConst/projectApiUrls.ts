import { titanApiUrl } from './titanApiUrl';
import { GridApiUrl } from './gridApiUrl';
export class ProjectApiUrl {
    public static gridApiUrl:string  = GridApiUrl.projectGridUrl;
    public static postCreatedUrl: string = titanApiUrl + 'project';
    public static postUpdateUrl: string = titanApiUrl + 'project';
    public static getByIdUrl: string = titanApiUrl + 'project';
}