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
var testfacilities_component_1 = require("./testfacilities.component");
var primeng_1 = require('primeng/primeng');
var testfacilities_routes_1 = require("./testfacilities.routes");
var TestFacilitiesModule = (function () {
    function TestFacilitiesModule() {
    }
    TestFacilitiesModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, primeng_1.DataTableModule, testfacilities_routes_1.default],
            declarations: [testfacilities_component_1.TestFacilitiesComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], TestFacilitiesModule);
    return TestFacilitiesModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TestFacilitiesModule;
//# sourceMappingURL=testfacilities.module.js.map