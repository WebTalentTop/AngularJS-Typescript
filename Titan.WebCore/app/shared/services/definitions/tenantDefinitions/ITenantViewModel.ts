/**
 * Created by ZeroInfinity on 1/8/2017.
 */
export interface ITenantViewModel {
    id:string;
    name:string;
    hostAddress?:string;
    favIconUrl?:string;
    defaultTimeZone?:string;
    lookUpKey?:string;
    defaultLocale?:string;
}