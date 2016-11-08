import { titanApiUrl } from './titanApiUrl';
export class TorqueSheetApiUrl {
    public static torqueSheetTemplatePostUrl: string = titanApiUrl + 'TorqueSheetTemplate/Post';
    public static getAllTorqueSheetTemplatesUrl: string = titanApiUrl + 'TorqueSheetTemplate/GetAll';
    public static getTorqueSheetTemplatesUrl: string = titanApiUrl + 'TorqueSheetTemplate/Get?id=';
    public static getTorqueSheetUrl: string = titanApiUrl + 'TorqueSheet/Get?id=';
    public static putTorqueSheetTemplateUrl: string = titanApiUrl + 'TorqueSheet/Post';
    public static postTorqueSheetUrl: string = titanApiUrl + 'TorqueSheet/Get?id=';
    public static getTorqueSheetsByTorqueBookIdUrl: string = titanApiUrl + 'TorqueSheet/GetTorqueSheetsByTorqueBook?torqueBookId=';
    
}