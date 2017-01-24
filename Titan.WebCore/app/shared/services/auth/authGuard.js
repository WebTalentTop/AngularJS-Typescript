"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by ZeroInfinity on 1/7/2017.
 */
var core_1 = require('@angular/core');
var AuthGuard = (function () {
    function AuthGuard(router, userProfile, ls) {
        this.router = router;
        this.userProfile = userProfile;
        this.ls = ls;
        this.ls.setShow(false);
        this.ls.logConsole("AuthGuard constructor", "");
    }
    AuthGuard.prototype.canLoad = function (route) {
        console.log("CanLoad called -------", route);
        this.router.navigate(['login']);
        return false;
    };
    AuthGuard.prototype.canActivate = function (route, state) {
        this.ls.logConsole("---- STATE -----", state);
        return true; //this.isActivated(state);
    };
    AuthGuard.prototype.isActivated = function (state) {
        var _this = this;
        return this.userProfile.getCurrentUserProfile().map(function (res) {
            var currentUserProfile = res.result;
            _this.ls.logConsole("CurrentUserProfile from server ----------", currentUserProfile);
            if (currentUserProfile.defaultTenantId) {
                return true;
            }
            else {
                _this.extraNav = { queryParams: {
                        'returnUrl': state.url,
                        'email': currentUserProfile.emailAddress }
                };
                _this.router
                    .navigate(['login', currentUserProfile.id], _this.extraNav);
                return false;
            }
        });
    };
    AuthGuard = __decorate([
        core_1.Injectable()
    ], AuthGuard);
    return AuthGuard;
}());
exports.AuthGuard = AuthGuard;
