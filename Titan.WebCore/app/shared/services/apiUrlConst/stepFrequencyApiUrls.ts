import { titanApiUrl } from './titanApiUrl';
import { GridApiUrl } from './gridApiUrls';

export class StepFrequencyApiUrl {
    public static gridApiUrl:string  = GridApiUrl.stepFrequencyGridUrl;
    public static postCreatedUrl: string = titanApiUrl + 'stepFrequency/post';
    public static postUpdateUrl: string = titanApiUrl + 'stepFrequency/put';
    public static getByIdUrl: string = titanApiUrl + 'stepFrequency/get';
}