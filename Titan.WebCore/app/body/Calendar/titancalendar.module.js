"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/// <reference path="../../shared/services/testrequest.service.ts" />
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var titancalendar_component_1 = require("./titancalendar.component");
var forms_1 = require('@angular/forms');
var testFacility_service_1 = require('../../shared/services/testFacility.service');
var buildlevel_service_1 = require('../../shared/services/buildlevel.service');
var teststatus_service_1 = require('../../shared/services/teststatus.service');
var testRole_service_1 = require('../../shared/services/testRole.service');
var project_service_1 = require('../../shared/services/project.service');
var testMode_service_1 = require('../../shared/services/testMode.service');
var testType_service_1 = require('../../shared/services/testType.service');
var testrequest_service_1 = require('../../shared/services/testrequest.service');
var primeng_1 = require('primeng/primeng');
var router_1 = require("@angular/router");
var primeng_2 = require('primeng/primeng');
var primeng_3 = require('primeng/primeng');
var titancalendar_routes_1 = require("./titancalendar.routes");
var titan_service_1 = require("../../shared/services/titan.service");
var calendar_service_1 = require("../../shared/services/calendar.service");
var TitanCalendarModule = (function () {
    function TitanCalendarModule() {
    }
    TitanCalendarModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, titancalendar_routes_1.default, router_1.RouterModule, primeng_1.AutoCompleteModule,
                primeng_2.MultiSelectModule, forms_1.FormsModule, primeng_1.DataTableModule, primeng_1.TabViewModule, primeng_1.ButtonModule,
                primeng_1.InputTextareaModule, primeng_1.DropdownModule, primeng_1.InputTextModule, primeng_1.PanelModule, primeng_1.FileUploadModule,
                primeng_1.DialogModule, primeng_1.GrowlModule, primeng_1.RadioButtonModule, primeng_1.CalendarModule, primeng_1.TooltipModule, primeng_1.OverlayPanelModule, primeng_3.ContextMenuModule, primeng_1.FieldsetModule, primeng_1.AccordionModule, primeng_1.ToolbarModule, primeng_1.RadioButtonModule],
            providers: [testFacility_service_1.TestFacilityService, buildlevel_service_1.BuildLevelService, project_service_1.ProjectService, testRole_service_1.TestRoleService, teststatus_service_1.TestStatusService, testMode_service_1.TestModeService,
                testType_service_1.TestTypeService, testrequest_service_1.TestRequestService, titan_service_1.TitanService, calendar_service_1.CalendarService
            ],
            declarations: [titancalendar_component_1.TitanCalendarComponent]
        })
    ], TitanCalendarModule);
    return TitanCalendarModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TitanCalendarModule;
