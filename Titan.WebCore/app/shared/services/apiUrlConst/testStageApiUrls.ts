import { titanApiUrl } from './titanApiUrl'
import { GridApiUrl }  from './gridApiUrls';

export class TestStageApiUrl {
    public static gridApiUrl:string  = GridApiUrl.testStageGridUrl;
    public static postCreatedUrl: string = titanApiUrl + 'testStage/post';
    public static postUpdateUrl: string = titanApiUrl + 'testStage/put';
    public static getByIdUrl: string = titanApiUrl + 'testStage/get';
}