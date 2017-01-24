import { titanApiUrl } from './titanApiUrl';
import { GridApiUrl } from './gridApiUrls';

export class ModelNameApiUrl {
    public static gridApiUrl:string  = GridApiUrl.modelNameGridUrl;
    public static postCreatedUrl: string = titanApiUrl + 'modelName/post';
    public static postUpdateUrl: string = titanApiUrl + 'modelName/put';
    public static getByIdUrl: string = titanApiUrl + 'modelName/get';
    public static getAllModelNames: string = titanApiUrl + 'modelName/GetAllModelNames';
}