"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var formBuilder_component_1 = require("./formBuilder.component");
var primeng_1 = require('primeng/primeng');
var forms_1 = require('@angular/forms');
var formBuilder_routes_1 = require("./formBuilder.routes");
var FormBuildersModule = (function () {
    function FormBuildersModule() {
    }
    FormBuildersModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                primeng_1.DataTableModule,
                primeng_1.DragDropModule,
                forms_1.FormsModule,
                primeng_1.DragDropModule,
                primeng_1.SpinnerModule,
                primeng_1.DialogModule,
                primeng_1.InputTextModule,
                primeng_1.DropdownModule,
                primeng_1.ButtonModule,
                primeng_1.CheckboxModule,
                primeng_1.RadioButtonModule,
                primeng_1.CalendarModule,
                formBuilder_routes_1.default],
            declarations: [formBuilder_component_1.FormBuildersComponent]
        })
    ], FormBuildersModule);
    return FormBuildersModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = FormBuildersModule;
