"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var primeng_1 = require('primeng/primeng');
var attachment_component_1 = require('./attachment.component');
var spinner_module_1 = require('../SpinnerComponent/spinner.module');
var router_1 = require('@angular/router');
var attachment_service_1 = require('../../../shared/services/attachment.service');
var AttachmentModule = (function () {
    function AttachmentModule() {
    }
    AttachmentModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, spinner_module_1.TitanSpinnerModule, primeng_1.DataTableModule, router_1.RouterModule, primeng_1.GrowlModule, primeng_1.FileUploadModule, primeng_1.DropdownModule, primeng_1.ConfirmDialogModule],
            declarations: [attachment_component_1.AttachmentComponent],
            providers: [attachment_service_1.AttachmentService, primeng_1.ConfirmationService],
            exports: [attachment_component_1.AttachmentComponent, common_1.CommonModule]
        })
    ], AttachmentModule);
    return AttachmentModule;
}());
exports.AttachmentModule = AttachmentModule;
