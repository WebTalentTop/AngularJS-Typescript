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
var torque_book_component_1 = require("./torque-book.component");
var project_service_1 = require('./../../../shared/services/project.service');
var primeng_1 = require('primeng/primeng');
var TorqueBookModule = (function () {
    function TorqueBookModule() {
    }
    TorqueBookModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule, primeng_1.DataTableModule, primeng_1.InputTextareaModule, primeng_1.InputTextModule, primeng_1.PanelModule,
                primeng_1.ButtonModule, primeng_1.DropdownModule, primeng_1.TreeTableModule, primeng_1.SharedModule, primeng_1.DialogModule],
            providers: [project_service_1.ProjectService],
            declarations: [torque_book_component_1.TorqueBookComponent],
            exports: [torque_book_component_1.TorqueBookComponent, common_1.CommonModule]
        })
    ], TorqueBookModule);
    return TorqueBookModule;
}());
exports.TorqueBookModule = TorqueBookModule;
