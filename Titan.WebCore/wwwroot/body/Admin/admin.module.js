"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var admin_component_1 = require("./admin.component");
var primeng_1 = require('primeng/primeng');
var forms_1 = require('@angular/forms');
var admin_routes_1 = require("./admin.routes");
var primeng_2 = require('primeng/primeng');
var AdminModule = (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, primeng_1.DataTableModule, admin_routes_1.default, forms_1.FormsModule, primeng_2.InputTextModule, primeng_2.PanelModule, admin_routes_1.default],
            declarations: [admin_component_1.AdminComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AdminModule);
    return AdminModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AdminModule;
//# sourceMappingURL=admin.module.js.map