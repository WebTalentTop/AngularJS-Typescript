"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var details_component_1 = require("./details.component");
var forms_1 = require('@angular/forms');
var testtype_service_1 = require('./../../../shared/services/testtype.service');
var testmode_service_1 = require('./../../../shared/services/testmode.service');
var procedure_service_1 = require('./../../../shared/services/procedure.service');
var step_service_1 = require('./../../../shared/services/step.service');
var testrequirement_service_1 = require('./../../../shared/services/testrequirement.service');
var add_shared_module_1 = require('./../../Step/Add/add-shared.module');
var details_shared_module_1 = require('./../../Step/Details/details-shared.module');
var primeng_1 = require('primeng/primeng');
var router_1 = require("@angular/router");
var details_routes_1 = require("./details.routes");
var DetailsModule = (function () {
    function DetailsModule() {
    }
    DetailsModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, router_1.RouterModule, forms_1.FormsModule, primeng_1.DataTableModule, primeng_1.TabViewModule, primeng_1.ButtonModule, primeng_1.DropdownModule, primeng_1.InputTextareaModule,
                primeng_1.InputTextModule, primeng_1.PanelModule, details_routes_1.default, primeng_1.AutoCompleteModule, primeng_1.ConfirmDialogModule, primeng_1.DataListModule, primeng_1.DialogModule,
                add_shared_module_1.default, details_shared_module_1.default],
            providers: [procedure_service_1.ProcedureService, testtype_service_1.TestTypeService, testmode_service_1.TestModeService, testrequirement_service_1.TestRequirementService, primeng_1.ConfirmationService, step_service_1.StepService],
            declarations: [details_component_1.DetailsComponent]
        })
    ], DetailsModule);
    return DetailsModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DetailsModule;
