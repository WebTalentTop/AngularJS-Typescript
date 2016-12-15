import { titanApiUrl } from './titanApiUrl';
import { GridApiUrl } from './gridApiUrls';

export class TestTemplateApiUrl {
    public static gridApiUrl:string  = GridApiUrl.testTemplateGridUrl;
    public static postCreatedUrl: string = titanApiUrl + 'testTemplate';
    public static postUpdateUrl: string = titanApiUrl + 'testTemplate';
    public static postAddTestTemplateRequirementUrl: string = titanApiUrl + 'testtemplate/postTestTemplateRequirement?testTemplateId=';
    public static getTestTemplateRequirementUrl: string = titanApiUrl + 'testtemplate/getTestTemplateRequirement?testTemplateId=';
    public static postDeleteTestTemplateRequirementUrl: string = titanApiUrl + 'testtemplate/DeleteTestTemplateRequirement?testTemplateId=';
    public static getByIdUrl: string = titanApiUrl + 'testTemplate';
    public static getAllUrl: string = titanApiUrl + 'testTemplate/GetAllTestTemplates';
}
