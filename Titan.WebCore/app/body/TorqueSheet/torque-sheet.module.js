"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var torque_sheet_component_1 = require("./torque-sheet.component");
var primeng_1 = require('primeng/primeng');
var router_1 = require("@angular/router");
var torquesheet_service_1 = require('../../shared/services/torquesheet.service');
var grid_module_1 = require('../../shared/UIComponents/GridComponent/grid.module');
var torque_sheet_routes_1 = require("./torque-sheet.routes");
var TorqueSheetModule = (function () {
    function TorqueSheetModule() {
    }
    TorqueSheetModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, router_1.RouterModule, primeng_1.DataTableModule, primeng_1.InputTextModule, primeng_1.DropdownModule, primeng_1.InputTextareaModule,
                primeng_1.TabViewModule, grid_module_1.GridModule, torque_sheet_routes_1.default],
            providers: [torquesheet_service_1.TorquesheetService],
            declarations: [torque_sheet_component_1.TorqueSheetComponent]
        })
    ], TorqueSheetModule);
    return TorqueSheetModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TorqueSheetModule;
