import { titanApiUrl } from './titanApiUrl';
import { localizationApiUrl } from './localizationApiUrl';
import { GridApiUrl } from './gridApiUrls';

export class AttachmentApiUrl {
    public static getCategories: string = titanApiUrl + 'category';
    public static getDocumentsByEntityIdentifierIdUrl: string = titanApiUrl + 'document/GetDocumentsByEntityIdentifiedId';
    public static DeleteAttachmentByIdUrl: string = titanApiUrl + 'document/delete';
}