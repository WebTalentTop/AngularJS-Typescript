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

@Injectable()
export class AuthGuard implements CanLoad, CanActivate {
    extraNav:NavigationExtras;
    constructor(
        private router: Router,
        private userProfile: TitanUserProfileService,
        private ls: LoggerService) {
        this.ls.setShow(false);
        this.ls.logConsole("AuthGuard constructor","");
    }

    canLoad(route: Route): boolean {
        console.log("CanLoad called -------", route);
        this.router.navigate(['login']);
        return false;
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<boolean> | boolean {
        this.ls.logConsole("---- STATE -----", state);

        return true; //this.isActivated(state);
    }

    isActivated(state): Observable<boolean> {

         return this.userProfile.getCurrentUserProfile().map(res => {
            let currentUserProfile: IUserProfile = res.result;
            this.ls.logConsole("CurrentUserProfile from server ----------", currentUserProfile);

            if(currentUserProfile.defaultTenantId) {
                return true;
            }
            else {
                this.extraNav = { queryParams: {
                                    'returnUrl': state.url,
                                    'email': currentUserProfile.emailAddress}
                                };
                this.router
                    .navigate(['login', currentUserProfile.id],this.extraNav);
                return false;
            }
        });
    }
}
