"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var testFacilities_component_1 = require("./testFacilities.component");
var primeng_1 = require('primeng/primeng');
var router_1 = require("@angular/router");
var testfacility_service_1 = require('../../shared/services/testfacility.service');
var grid_module_1 = require('../../shared/UIComponents/GridComponent/grid.module');
var testfacilities_routes_1 = require("./testfacilities.routes");
var breadCrumbs_service_1 = require('../../shared/services/breadCrumbs/breadCrumbs.service');
var TestFacilitiesModule = (function () {
    function TestFacilitiesModule() {
    }
    TestFacilitiesModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, router_1.RouterModule, primeng_1.DataTableModule, primeng_1.InputTextModule, primeng_1.DropdownModule, primeng_1.MessagesModule,
                primeng_1.InputTextareaModule, primeng_1.TabViewModule, grid_module_1.GridModule, primeng_1.ButtonModule, testfacilities_routes_1.default, primeng_1.BreadcrumbModule],
            providers: [testfacility_service_1.TestFacilityService, breadCrumbs_service_1.BreadCrumbsService],
            declarations: [testFacilities_component_1.TestFacilitiesComponent]
        })
    ], TestFacilitiesModule);
    return TestFacilitiesModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TestFacilitiesModule;
