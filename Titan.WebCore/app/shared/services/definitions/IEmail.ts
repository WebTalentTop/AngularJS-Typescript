import { IUserProfile } from "./IUserProfile";

export interface IEmail{
    to: IUserProfile[],
    subject: string;
    body: string;
    id: string;
    eventName: string;
    toAddress: string;
}