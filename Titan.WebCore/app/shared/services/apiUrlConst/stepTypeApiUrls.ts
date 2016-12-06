import { titanApiUrl } from './titanApiUrl';
import { GridApiUrl } from './gridApiUrls';

export class StepTypeApiUrl {
    public static gridApiUrl:string  = GridApiUrl.stepTypeGridUrl;
    public static postCreatedUrl: string = titanApiUrl + 'stepType/post';
    public static postUpdateUrl: string = titanApiUrl + 'stepType/put';
    public static getByIdUrl: string = titanApiUrl + 'stepType/get';
}