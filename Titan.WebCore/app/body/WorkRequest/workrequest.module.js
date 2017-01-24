"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var workrequest_component_1 = require("./workrequest.component");
var forms_1 = require('@angular/forms');
var timeEntry_service_1 = require('../../shared/services/timeEntry.service');
var testfacility_service_1 = require('../../shared/services/testfacility.service');
//import { EquipmentTypeService } from '../../../shared/services/equipmentType.service';
var equipmentType_service_1 = require('../../shared/services/equipmentType.service');
var testTemplate_service_1 = require('../../shared/services/testTemplate.service');
var testverificationMethod_service_1 = require('../../shared/services/testverificationMethod.service');
var teststatus_service_1 = require('../../shared/services/teststatus.service');
var testRole_service_1 = require('../../shared/services/testRole.service');
var project_service_1 = require('../../shared/services/project.service');
var testMode_service_1 = require('../../shared/services/testMode.service');
var testType_service_1 = require('../../shared/services/testType.service');
var buildlevel_service_1 = require('../../shared/services/buildlevel.service');
var workrequest_service_1 = require('../../shared/services/workrequest.service');
var department_service_1 = require('../../shared/services/department.service');
var testrequestsensor_service_1 = require('../../shared/services/testrequestsensor.service');
var grid_module_1 = require('../../shared/UIComponents/GridComponent/grid.module');
var primeng_1 = require('primeng/primeng');
var primeng_2 = require('primeng/primeng');
var router_1 = require("@angular/router");
var workrequest_routes_1 = require("./workrequest.routes");
var WorkRequestModule = (function () {
    function WorkRequestModule() {
    }
    WorkRequestModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, router_1.RouterModule, forms_1.FormsModule, primeng_2.DataTableModule, primeng_2.TabViewModule, primeng_2.ButtonModule, primeng_2.InputTextareaModule, primeng_2.CheckboxModule, primeng_2.DialogModule, primeng_2.MultiSelectModule, primeng_2.ConfirmDialogModule, primeng_2.CalendarModule, grid_module_1.GridModule, primeng_2.InputTextModule, primeng_2.PanelModule, primeng_2.FileUploadModule, primeng_2.DropdownModule, primeng_2.MessagesModule, primeng_2.GrowlModule, workrequest_routes_1.default],
            providers: [timeEntry_service_1.TimeEntryService, equipmentType_service_1.EquipmentTypeService, primeng_1.ConfirmationService, testrequestsensor_service_1.TestRequestSensorService, testverificationMethod_service_1.TestVerificationMethodService, buildlevel_service_1.BuildLevelService, project_service_1.ProjectService, testRole_service_1.TestRoleService, teststatus_service_1.TestStatusService, testMode_service_1.TestModeService,
                testType_service_1.TestTypeService, testfacility_service_1.TestFacilityService, testTemplate_service_1.TestTemplateService, department_service_1.DepartmentService, workrequest_service_1.WorkRequestService],
            declarations: [workrequest_component_1.WorkRequestComponent]
        })
    ], WorkRequestModule);
    return WorkRequestModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = WorkRequestModule;
