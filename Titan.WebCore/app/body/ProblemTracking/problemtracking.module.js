"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var problemtracking_component_1 = require("./problemtracking.component");
var problemtracking_service_1 = require('../../shared/services/problemtracking.service');
var primeng_1 = require('primeng/primeng');
var problemtracking_routes_1 = require("./problemtracking.routes");
var ProblemTrackingModule = (function () {
    function ProblemTrackingModule() {
    }
    ProblemTrackingModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, primeng_1.DataTableModule, problemtracking_routes_1.default],
            providers: [problemtracking_service_1.ProblemtrackingService],
            declarations: [problemtracking_component_1.ProblemTrackingComponent]
        })
    ], ProblemTrackingModule);
    return ProblemTrackingModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ProblemTrackingModule;
