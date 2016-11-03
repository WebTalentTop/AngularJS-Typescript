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
var testrequest_component_1 = require("./testrequest.component");
var primeng_1 = require('primeng/primeng');
var testrequest_routes_1 = require("./testrequest.routes");
var TestRequestModule = (function () {
    function TestRequestModule() {
    }
    TestRequestModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, primeng_1.DataTableModule, testrequest_routes_1.default],
            declarations: [testrequest_component_1.TestRequestComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], TestRequestModule);
    return TestRequestModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TestRequestModule;
//# sourceMappingURL=testrequest.module.js.map