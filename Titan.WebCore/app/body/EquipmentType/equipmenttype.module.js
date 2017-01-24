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
var router_1 = require("@angular/router");
var equipmentType_service_1 = require('../../shared/services/equipmentType.service');
var grid_module_1 = require('../../shared/UIComponents/GridComponent/grid.module');
var equipmenttype_routes_1 = require("./equipmenttype.routes");
var EquipmenttypeModule = (function () {
    function EquipmenttypeModule() {
    }
    EquipmenttypeModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, router_1.RouterModule, primeng_1.DataTableModule, primeng_1.DialogModule, primeng_1.InputTextModule, primeng_1.MessagesModule, primeng_1.DropdownModule, primeng_1.InputTextareaModule, primeng_1.TabViewModule, grid_module_1.GridModule, equipmenttype_routes_1.default, primeng_1.ButtonModule],
            providers: [equipmentType_service_1.EquipmentTypeService],
            declarations: [equipmenttype_component_1.EquipmentTypeComponent]
        })
    ], EquipmenttypeModule);
    return EquipmenttypeModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = EquipmenttypeModule;
