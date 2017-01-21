import { titanApiUrl } from './titanApiUrl';
import { GridApiUrl } from './gridApiUrls';

export class ModelYearApiUrl {
    public static gridApiUrl:string  = GridApiUrl.modelYearGridUrl;
    public static postCreatedUrl: string = titanApiUrl + 'modelYear/post';
    public static postUpdateUrl: string = titanApiUrl + 'modelYear/put';
    public static getByIdUrl: string = titanApiUrl + 'modelYear/get';
    public static getAllModelYears: string = titanApiUrl + 'modelYear/GetAllModelYears';
}