import { titanApiUrl } from './titanApiUrl';
import { GridApiUrl } from './gridApiUrls';

export class RequirementItemTypeApiUrl {
    public static gridApiUrl:string  = GridApiUrl.requirementItemTypeGridUrl;
    public static postCreatedUrl: string = titanApiUrl + 'requirementItemType/post';
    public static postUpdateUrl: string = titanApiUrl + 'requirementItemType/put';
    public static getByIdUrl: string = titanApiUrl + 'requirementItemType/get';
}