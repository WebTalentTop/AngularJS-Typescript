import { titanApiUrl } from './titanApiUrl'
import { GridApiUrl }  from './gridApiUrls';

export class ProblemtrackingApiUrl {
    public static gridApiUrl:string  = GridApiUrl.problemtrackingGridUrl;
    public static postCreatedUrl: string = titanApiUrl + 'problemtracking';
    public static postUpdateUrl: string = titanApiUrl + 'problemtracking';
    public static getByIdUrl: string = titanApiUrl + 'problemtracking';
}