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
var body_component_1 = require('./body.component');
var project_module_1 = require('./Project/project.module');
var equipment_module_1 = require('./Equipment/equipment.module');
var department_module_1 = require('./Department/department.module');
var admin_module_1 = require('./Admin/admin.module');
var calendar_module_1 = require('./Calendar/calendar.module');
var lookup_module_1 = require('./Lookup/lookup.module');
var forms_1 = require('@angular/forms');
//Services
var logger_service_1 = require('../shared/services/logger.service');
var data_services_1 = require('../shared/services/data.services');
var platform_services_1 = require('../shared/services/platform.services');
//import { enableProdMode} from '@angular/core';
//enableProdMode();
var body_routes_1 = require('./body.routes');
var BodyModule = (function () {
    function BodyModule() {
    }
    BodyModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, http_1.HttpModule, forms_1.FormsModule, project_module_1.default, department_module_1.default, admin_module_1.default, calendar_module_1.default, lookup_module_1.default, equipment_module_1.default, body_routes_1.default],
            declarations: [body_component_1.BodyComponent],
            providers: [data_services_1.DataService, logger_service_1.LoggerService, platform_services_1.PlatformService],
            exports: [body_component_1.BodyComponent] //,
        }), 
        __metadata('design:paramtypes', [])
    ], BodyModule);
    return BodyModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BodyModule;
//# sourceMappingURL=body.module.js.map