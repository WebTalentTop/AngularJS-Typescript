"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require('@angular/forms');
var project_details_main_component_1 = require("./project-details-main.component");
var details_module_1 = require('../Details/details.module');
var torque_book_module_1 = require('../TorqueBook/torque-book.module');
var templates_module_1 = require('../Templates/templates.module');
var teaminformation_module_1 = require('../TeamInformation/teaminformation.module');
//import  TorqueBookModule  from "./../TorqueBook/torque-book.module";
//import  DetailsModule  from "./../Details/details.module";
//import  TempModule  from "./../Temp/temp.module";
var project_service_1 = require('./../../../shared/services/project.service');
//import { TorqueBookComponent } from "./../TorqueBook/torque-book.component"
//import { DetailsComponent } from "./../Details/details.component"
var primeng_1 = require('primeng/primeng');
var project_details_main_routes_1 = require("./project-details-main.routes");
var ProjectDetailsMainModule = (function () {
    function ProjectDetailsMainModule() {
    }
    ProjectDetailsMainModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule, primeng_1.DataTableModule, primeng_1.InputTextareaModule, primeng_1.InputTextModule, primeng_1.PanelModule,
                primeng_1.ButtonModule, primeng_1.DropdownModule, primeng_1.TabViewModule, details_module_1.DetailsModule, templates_module_1.TemplatesModule, torque_book_module_1.TorqueBookModule, teaminformation_module_1.TeamInformationModule, project_details_main_routes_1.default],
            providers: [project_service_1.ProjectService],
            declarations: [project_details_main_component_1.ProjectDetailsMainComponent],
            exports: [details_module_1.DetailsModule, torque_book_module_1.TorqueBookModule, templates_module_1.TemplatesModule, teaminformation_module_1.TeamInformationModule, common_1.CommonModule]
        })
    ], ProjectDetailsMainModule);
    return ProjectDetailsMainModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ProjectDetailsMainModule;
