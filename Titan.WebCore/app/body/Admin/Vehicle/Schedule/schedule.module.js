"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var schedule_component_1 = require("./schedule.component");
var primeng_1 = require('primeng/primeng');
var grid_module_1 = require('../../../../shared/UIComponents/GridComponent/grid.module');
var schedule_service_1 = require('../../../../shared/services/schedule.service');
var schedule_routes_1 = require("./schedule.routes");
var ScheduleModule = (function () {
    function ScheduleModule() {
    }
    ScheduleModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, primeng_1.DataTableModule, grid_module_1.GridModule, schedule_routes_1.default, primeng_1.MessagesModule, primeng_1.GrowlModule],
            providers: [schedule_service_1.ScheduleService],
            declarations: [schedule_component_1.ScheduleComponent]
        })
    ], ScheduleModule);
    return ScheduleModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ScheduleModule;
