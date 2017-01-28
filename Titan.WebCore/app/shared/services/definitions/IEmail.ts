import { IUserProfile } from "./IUserProfile";

export interface IEmail{
    to: IUserProfile[],
    subject: string;
    emailBody: string;
}