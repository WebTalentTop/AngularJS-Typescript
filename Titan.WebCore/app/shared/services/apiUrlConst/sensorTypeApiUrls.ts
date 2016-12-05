import { titanApiUrl } from './titanApiUrl';
import { GridApiUrl } from './gridApiUrls';

export class SensorTypeApiUrl {
    public static gridApiUrl:string  = GridApiUrl.sensorTypeGridUrl;
    public static postCreatedUrl: string = titanApiUrl + 'sensorType/post';
    public static postUpdateUrl: string = titanApiUrl + 'sensorType/put';
    public static getByIdUrl: string = titanApiUrl + 'sensorType/get';
}