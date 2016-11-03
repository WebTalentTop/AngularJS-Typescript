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
var buildlevels_component_1 = require("./buildlevels.component");
var primeng_1 = require('primeng/primeng');
var buildlevels_routes_1 = require("./buildlevels.routes");
var BuildLevelsModule = (function () {
    function BuildLevelsModule() {
    }
    BuildLevelsModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, primeng_1.DataTableModule, buildlevels_routes_1.default],
            declarations: [buildlevels_component_1.BuildLevelsComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], BuildLevelsModule);
    return BuildLevelsModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BuildLevelsModule;
//# sourceMappingURL=buildLevels.module.js.map