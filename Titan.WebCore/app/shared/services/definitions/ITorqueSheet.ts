/**
 * Created by ZeroInfinity on 12/10/2016.
 */
import { IEmail } from './IEmail';

export interface ITorqueSheet {
    id: string;
    nameId: string;
    torqueBookId: string;
    contents: string;
    tenantId?: string;
    torqueSheetStatusId?: string;
    torqueSheetStatus: string;
    version?: number;
    parentId?: string;
    endDate?: Date;
    comments: string;
    name: string;
    isNewVersionRequested: boolean;
    isCurrentVersionApproved: boolean;
    isSubmitForApprovalVisible: boolean;
    isRequestForNewVersionVisible: boolean;
    isApprovalRequested: boolean;
    canApproveOrRejectTorqueSheet: boolean;
    isSaveVersionVisible: boolean;
    isApproveVersionVisible: boolean;
    isRejectVersionVisible: boolean;
    otherVersions: any;
    isUserViewingLatestVersion: boolean;
}

export interface ITorqueSheetEmailNotification extends ITorqueSheet {
    emailDto: IEmail;
}