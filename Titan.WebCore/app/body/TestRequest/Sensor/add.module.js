"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var add_component_1 = require("./add.component");
var forms_1 = require('@angular/forms');
var testrequestsensor_service_1 = require('../../../shared/services/testrequestsensor.service');
var equipmentType_service_1 = require('../../../shared/services/equipmentType.service');
var primeng_1 = require('primeng/primeng');
var router_1 = require("@angular/router");
var add_routes_1 = require("./add.routes");
var AddModule = (function () {
    function AddModule() {
    }
    AddModule = __decorate([
        core_1.NgModule({
            imports: [primeng_1.EditorModule, primeng_1.SharedModule, common_1.CommonModule, router_1.RouterModule, forms_1.FormsModule, primeng_1.DataTableModule, primeng_1.TabViewModule, primeng_1.ButtonModule, primeng_1.InputTextareaModule, primeng_1.CalendarModule, primeng_1.InputTextModule, primeng_1.FileUploadModule, primeng_1.PanelModule, primeng_1.DropdownModule, add_routes_1.default],
            providers: [equipmentType_service_1.EquipmentTypeService, testrequestsensor_service_1.TestRequestSensorService],
            declarations: [add_component_1.AddComponent]
        })
    ], AddModule);
    return AddModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AddModule;
