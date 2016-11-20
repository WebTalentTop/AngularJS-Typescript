import { titanApiUrl } from './titanApiUrl';
import { GridApiUrl } from './gridApiUrl';
export class TestFacilityAttachmentApiUrl {
    public static getByIdUrl: string = titanApiUrl + 'testFacilityAttachment';
    public static DeleteAttachmentsByIdUrl: string = titanApiUrl + 'testFacilityAttachment/delete';
}