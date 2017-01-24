"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by ZeroInfinity on 12/19/2016.
 */
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var primeng_1 = require('primeng/primeng');
var formInstance_component_1 = require('./formInstance.component');
var formInstance_service_1 = require('../../../services/formInstance.service');
var FormInstanceModule = (function () {
    function FormInstanceModule() {
    }
    FormInstanceModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, primeng_1.CheckboxModule, primeng_1.RadioButtonModule, forms_1.FormsModule, primeng_1.DialogModule, primeng_1.InputTextModule, primeng_1.ButtonModule, primeng_1.SpinnerModule],
            declarations: [formInstance_component_1.FormInstanceComponent],
            providers: [formInstance_service_1.FormInstanceService],
            exports: [formInstance_component_1.FormInstanceComponent, common_1.CommonModule]
        })
    ], FormInstanceModule);
    return FormInstanceModule;
}());
exports.FormInstanceModule = FormInstanceModule;
