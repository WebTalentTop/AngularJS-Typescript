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
var add_component_1 = require("./add.component");
var torquesheet_service_1 = require('../../../shared/services/torquesheet.service');
var primeng_1 = require('primeng/primeng');
var AddModule = (function () {
    function AddModule() {
    }
    AddModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                //TabViewModule, 
                forms_1.FormsModule,
                //DataTableModule, 
                primeng_1.InputTextareaModule,
                primeng_1.InputTextModule,
                primeng_1.PanelModule,
                primeng_1.ButtonModule,
                primeng_1.DropdownModule,
            ],
            providers: [torquesheet_service_1.TorquesheetService],
            declarations: [add_component_1.AddComponent],
            exports: [add_component_1.AddComponent]
        })
    ], AddModule);
    return AddModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AddModule;
