import { titanApiUrl } from './titanApiUrl';
export class TorqueSheetApiUrl {
    public static torqueSheetTemplatePostUrl: string = titanApiUrl + 'TorqueSheetTemplate/Post';
    public static getAllTorqueSheetTemplatesUrl: string = titanApiUrl + 'TorqueSheetTemplate/GetAll';
    public static getTorqueSheetTemplatesUrl: string = titanApiUrl + 'TorqueSheetTemplate/Get?id=';
    
}