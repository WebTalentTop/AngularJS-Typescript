"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var AdminComponent = (function () {
    function AdminComponent(breadCrumbService) {
        this.breadCrumbService = breadCrumbService;
        var breadCrumbs = this.breadCrumbService.getBreadCrumbs();
        this.items = [];
        var adminBC = breadCrumbs.filter(function (item) { return item.pageName === 'Admin'; })[0];
        this.items = adminBC.items;
    }
    AdminComponent.prototype.ngOnInit = function () { };
    AdminComponent.prototype.bcNavigation = function (event) {
    };
    AdminComponent = __decorate([
        core_1.Component({
            selector: 'admin',
            styleUrls: ['app/body/admin/admin.component.css'],
            templateUrl: 'app/body/Admin/admin.component.html',
        })
    ], AdminComponent);
    return AdminComponent;
}());
exports.AdminComponent = AdminComponent;
