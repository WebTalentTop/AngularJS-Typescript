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
var platform_component_1 = require("./platform.component");
var primeng_1 = require('primeng/primeng');
var platform_routes_1 = require("./platform.routes");
var grid_module_1 = require('../../../../shared/UIComponents/GridComponent/grid.module');
var PlatformModule = (function () {
    function PlatformModule() {
    }
    PlatformModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, primeng_1.DataTableModule, grid_module_1.GridModule, platform_routes_1.default],
            declarations: [platform_component_1.PlatformComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], PlatformModule);
    return PlatformModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PlatformModule;
//# sourceMappingURL=platform.module.js.map