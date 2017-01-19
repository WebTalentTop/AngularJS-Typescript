"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var equipment_component_1 = require("./equipment.component");
var primeng_1 = require('primeng/primeng');
var equipment_routes_1 = require("./equipment.routes");
var equipment_service_1 = require('../../../../shared/services/equipment.service');
var grid_module_1 = require('../../../../shared/UIComponents/GridComponent/grid.module');
var EquipmentModule = (function () {
    function EquipmentModule() {
    }
    EquipmentModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, primeng_1.DataTableModule, grid_module_1.GridModule, equipment_routes_1.default],
            providers: [equipment_service_1.EquipmentService],
            declarations: [equipment_component_1.EquipmentComponent]
        })
    ], EquipmentModule);
    return EquipmentModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = EquipmentModule;
