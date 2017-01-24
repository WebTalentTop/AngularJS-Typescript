"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var common_1 = require('@angular/common');
var body_component_1 = require('./body.component');
//import ProjectModule from './Project/project.module';
//import EquipmentModule from './Equipment/equipment.module';
//import DepartmentModule from './Department/department.module';
//import AdminModule from './Admin/admin.module';
//import CalendarModule from './Calendar/titancalendar.module';
//import LookupModule from './Lookup/lookup.module';
var forms_1 = require('@angular/forms');
var primeng_1 = require('primeng/primeng');
var logger_service_1 = require('../shared/services/logger/logger.service');
//import {EquipmentComponent} from './Equipment/equipment.component';
//import {ProjectComponent} from './Project/project.component';
//import { enableProdMode} from '@angular/core';
//enableProdMode();
var body_routes_1 = require('./body.routes');
var authGuard_1 = require("../shared/services/auth/authGuard");
var login_component_1 = require("./Auth/login.component");
var titanuser_service_1 = require("../shared/services/titanuser.service");
var BodyModule = (function () {
    function BodyModule() {
    }
    BodyModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, http_1.HttpModule, forms_1.FormsModule, primeng_1.DropdownModule, body_routes_1.default],
            declarations: [body_component_1.BodyComponent, login_component_1.LoginComponent],
            providers: [authGuard_1.AuthGuard, titanuser_service_1.TitanUserService, logger_service_1.LoggerService],
            exports: [body_component_1.BodyComponent] //,
        })
    ], BodyModule);
    return BodyModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BodyModule;
