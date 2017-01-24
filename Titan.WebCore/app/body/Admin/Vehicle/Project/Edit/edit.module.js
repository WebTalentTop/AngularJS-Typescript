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
var edit_component_1 = require("./edit.component");
var project_service_1 = require('../../../../../shared/services/project.service');
var primeng_1 = require('primeng/primeng');
var edit_routes_1 = require("./edit.routes");
var EditModule = (function () {
    function EditModule() {
    }
    EditModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule, primeng_1.InputTextareaModule, primeng_1.InputTextModule, primeng_1.PanelModule, primeng_1.ButtonModule, edit_routes_1.default],
            providers: [project_service_1.ProjectService],
            declarations: [edit_component_1.EditComponent]
        })
    ], EditModule);
    return EditModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = EditModule;
