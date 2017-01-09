/**
 * Created by ZeroInfinity on 1/6/2017.
 */
import { Injectable } from '@angular/core';
import {
    CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild,
    CanLoad, Route
} from '@angular/router';

//import { IUserProfile } from "../definitions/IUserProfile";
import {IUserProfile} from "../definitions/IUserProfile";
import { Observable } from 'rxjs/Observable';
import { Subject } from "rxjs/Subject";
import {debug} from "util";

@Injectable()
export class AuthService implements CanLoad {
    //currentUser: IUserProfile;

    constructor(private router: Router) {
    }

    isAuthorized(): boolean {
        return false;//Boolean(this.currentUser.defaultTenantId);
    }

    canLoad(): Observable<boolean> | boolean{

        this.router.navigate(['/auth']);

        return false;
    }

    onCanActivate(canActivate: boolean) {
        canActivate = false;
        if(!canActivate) {
            this.router.navigate(['/auth']);
        }
    }
}