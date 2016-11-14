﻿import { titanApiUrl } from './titanApiUrl';
import { GridApiUrl } from './gridApiUrls';

export class TitanRoleApiUrl {
    public static gridApiUrl:string  = GridApiUrl.titanRoleGridUrl;
    public static postCreatedUrl: string = titanApiUrl + 'titanRole';
    public static postUpdateUrl: string = titanApiUrl + 'titanRole';
    public static getByIdUrl: string = titanApiUrl + 'titanRole';
}