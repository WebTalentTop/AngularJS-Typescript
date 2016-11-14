import { titanApiUrl } from './titanApiUrl';
import { GridApiUrl } from './gridApiUrls';

export class TestTemplateApiUrl {
    public static gridApiUrl:string  = GridApiUrl.testTemplateGridUrl;
    public static postCreatedUrl: string = titanApiUrl + 'testTemplate';
    public static postUpdateUrl: string = titanApiUrl + 'testTemplate';
    public static getByIdUrl: string = titanApiUrl + 'testTemplate';
}