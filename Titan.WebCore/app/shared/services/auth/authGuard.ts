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
    RouterStateSnapshot }       from '@angular/router';

@Injectable()
export class AuthGuard implements CanLoad, CanActivate {
    constructor(private router: Router) {
        console.log("AuthGuard constructor")
    }

    canLoad(route: Route): boolean {
        console.log("CanLoad called -------", route);
        this.router.navigate(['login']);
        return false;
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        console.log("---- STATE -----", state)
        this.router.navigate(['login']);
        return false;
    }
}