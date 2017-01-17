/**
 * Created by ZeroInfinity on 1/7/2017.
 */
import { Injectable } from '@angular/core';
import {
    Route,
    Router,
    CanLoad,
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot, NavigationExtras
}       from '@angular/router';
import {LoggerService} from "../logger/logger.service";
import {IUserProfile} from "../definitions/IUserProfile";
import {TitanUserProfileService} from "../titanUserProfile.service";
import {Observable} from "rxjs";
import {UserProfileService} from "../userProfile.service";

@Injectable()
export class AuthGuard implements CanLoad, CanActivate {
    extraNav:NavigationExtras;
    currentUser: IUserProfile;
    constructor(
        private router: Router,
        private userProfile: UserProfileService,
        private ls: LoggerService) {
        this.ls.setShow(false);
        this.ls.logConsole("AuthGuard constructor","");
    }

    canLoad(route: Route): boolean {
        console.log("CanLoad called -------", route);
        this.router.navigate(['login']);
        return false;
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Promise<boolean>{
        let user: Promise<IUserProfile> = this.userProfile.getCurrentUserProfile();

        return user.then((data) => {
            data.defaultTenantId = "sadfa";
            if (data.defaultTenantId) {
                return true;
            }
            else {
                this.extraNav = { queryParams: {
                    'returnUrl': state.url,
                    'email': data.emailAddress}
                };
                this.router
                    .navigate(['login', data.id],this.extraNav);
                return false;
            }
        });
    }
}
