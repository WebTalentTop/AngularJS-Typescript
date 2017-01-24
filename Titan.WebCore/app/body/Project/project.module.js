"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var project_component_1 = require("./project.component");
var primeng_1 = require('primeng/primeng');
var project_service_1 = require('../../shared/services/project.service');
var grid_module_1 = require('../../shared/UIComponents/GridComponent/grid.module');
//import {router} from './project-routing.module';
var project_routes_1 = require("./project.routes");
var forms_1 = require('@angular/forms');
var primeng_2 = require('primeng/primeng');
//import { TorqueBookComponent } from "./TorqueBook/torque-book.component";
//import { TemplatesComponent } from "./Templates/templates.component";
//import { TorquesheetService } from './../../shared/services/torquesheet.service'
var ProjectModule = (function () {
    function ProjectModule() {
    }
    ProjectModule = __decorate([
        core_1.NgModule({
            imports: [primeng_2.CalendarModule, primeng_2.DropdownModule, grid_module_1.GridModule, primeng_2.TabViewModule, primeng_2.ButtonModule, primeng_2.InputTextareaModule, primeng_2.InputTextModule,
                primeng_2.PanelModule, common_1.CommonModule, primeng_1.DataTableModule, project_routes_1.default, forms_1.FormsModule, primeng_2.TreeTableModule,
                primeng_2.SharedModule, primeng_2.DialogModule],
            declarations: [project_component_1.ProjectComponent],
            providers: [project_service_1.ProjectService]
        })
    ], ProjectModule);
    return ProjectModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ProjectModule;
