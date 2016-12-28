import { titanApiUrl } from './titanApiUrl';
import { GridApiUrl } from './gridApiUrls';

export class TestTemplateApiUrl {
    public static gridApiUrl:string  = GridApiUrl.testTemplateGridUrl;
    public static postCreatedUrl: string = titanApiUrl + 'testTemplate';
    public static postUpdateUrl: string = titanApiUrl + 'testTemplate';
    public static postAddTestTemplateProcedureUrl: string = titanApiUrl + 'testtemplate/postTestTemplateProcedure?testTemplateId=';
    public static getTestTemplateProcedureUrl: string = titanApiUrl + 'testtemplate/getTestTemplateProcedure?testTemplateId=';
    public static postDeleteTestTemplateProcedureUrl: string = titanApiUrl + 'testtemplate/DeleteTestTemplateProcedure?testTemplateId=';
    public static getByIdUrl: string = titanApiUrl + 'testTemplate';
    public static getAllUrl: string = titanApiUrl + 'testTemplate/GetAllTestTemplates';
}
