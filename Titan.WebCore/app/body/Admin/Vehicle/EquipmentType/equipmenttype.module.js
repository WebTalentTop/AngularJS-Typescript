"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var equipmenttype_component_1 = require("./equipmenttype.component");
var primeng_1 = require('primeng/primeng');
var equipmenttype_routes_1 = require("./equipmenttype.routes");
var equipmentType_service_1 = require('../../../../shared/services/equipmentType.service');
var grid_module_1 = require('../../../../shared/UIComponents/GridComponent/grid.module');
var EquipmentTypeModule = (function () {
    function EquipmentTypeModule() {
    }
    EquipmentTypeModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, primeng_1.DataTableModule, grid_module_1.GridModule, equipmenttype_routes_1.default],
            providers: [equipmentType_service_1.EquipmentTypeService],
            declarations: [equipmenttype_component_1.EquipmentTypeComponent]
        })
    ], EquipmentTypeModule);
    return EquipmentTypeModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = EquipmentTypeModule;
