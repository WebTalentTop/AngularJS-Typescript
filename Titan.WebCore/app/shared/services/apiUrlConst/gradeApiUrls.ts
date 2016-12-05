import { titanApiUrl } from './titanApiUrl';
import { GridApiUrl } from './gridApiUrls';

export class GradeApiUrl {
    public static gridApiUrl:string  = GridApiUrl.gradeGridUrl;
    public static postCreatedUrl: string = titanApiUrl + 'grade/post';
    public static postUpdateUrl: string = titanApiUrl + 'grade/put';
    public static getByIdUrl: string = titanApiUrl + 'grade/get';
}