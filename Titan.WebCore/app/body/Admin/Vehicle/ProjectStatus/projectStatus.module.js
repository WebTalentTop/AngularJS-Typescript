"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var projectStatus_component_1 = require("./projectStatus.component");
var primeng_1 = require('primeng/primeng');
var grid_module_1 = require('../../../../shared/UIComponents/GridComponent/grid.module');
var breadCrumbs_service_1 = require('../../../../shared/services/breadCrumbs/breadCrumbs.service');
var projectStatus_service_1 = require('../../../../shared/services/projectStatus.service');
var projectStatus_routes_1 = require("./projectStatus.routes");
var ProjectStatusModule = (function () {
    function ProjectStatusModule() {
    }
    ProjectStatusModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, primeng_1.DataTableModule, grid_module_1.GridModule, projectStatus_routes_1.default, primeng_1.MessagesModule, primeng_1.GrowlModule, primeng_1.BreadcrumbModule],
            providers: [projectStatus_service_1.ProjectStatusService, breadCrumbs_service_1.BreadCrumbsService],
            declarations: [projectStatus_component_1.ProjectStatusComponent]
        })
    ], ProjectStatusModule);
    return ProjectStatusModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ProjectStatusModule;
