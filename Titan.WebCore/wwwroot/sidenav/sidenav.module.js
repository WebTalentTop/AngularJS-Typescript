"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var common_1 = require('@angular/common');
var sidenav_component_1 = require('./sidenav.component');
//import { DataService } from './shared/services/data.services';
//import { enableProdMode} from '@angular/core';
//import { DataTableModule } from 'primeng/primeng';
//enableProdMode();
var SidenavModule = (function () {
    function SidenavModule() {
    }
    SidenavModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, http_1.HttpModule],
            declarations: [sidenav_component_1.SidenavComponent],
            exports: [sidenav_component_1.SidenavComponent] //,
        }), 
        __metadata('design:paramtypes', [])
    ], SidenavModule);
    return SidenavModule;
}());
exports.SidenavModule = SidenavModule;
//# sourceMappingURL=sidenav.module.js.map