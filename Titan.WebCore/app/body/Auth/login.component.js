/**
 * Created by ZeroInfinity on 1/6/2017.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var LoginComponent = (function () {
    function LoginComponent(activatedRoute, router, ls, titanUserService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.ls = ls;
        this.titanUserService = titanUserService;
        //local variables to be used
        this.allowedTenantsList = [];
        this.tenantListItems = [];
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute
            .params
            .subscribe(function (params) { return _this.id = params['id']; });
        this.activatedRoute
            .queryParams
            .subscribe(function (params) {
            _this.url = params['returnUrl'];
            _this.email = params['email'];
        });
        this.titanUserService.getAllowedTenantsList(this.id)
            .subscribe(function (res) {
            _this.allowedTenantsList = res.result;
            _this.tenantListItems = _this.allowedTenantsList
                .map(function (tenant) {
                return { label: tenant.name, value: tenant.id };
            });
        });
        this.ls.logConsole("User Id passed on --------", this.id);
        this.ls.logConsole("Url came from ------------", this.url);
        this.ls.logConsole("Email of the user --------", this.email);
    };
    LoginComponent.prototype.setDefaultTenantId = function (item) {
        var _this = this;
        var defaultTenantViewModel = {
            id: this.id,
            defaultTenantId: item.value
        };
        this.ls.logConsole("DefaultTenantViewModel to save ----------", defaultTenantViewModel);
        // calling the service to set the default
        this.titanUserService.putSetDefaultTenantId(defaultTenantViewModel)
            .subscribe(function (res) {
            if (res.isSuccess) {
                _this.router.navigate([_this.url]);
            }
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'auth-body',
            templateUrl: 'app/body/Auth/login.component.html'
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
