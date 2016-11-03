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
var core_1 = require('@angular/core');
var platform_services_1 = require('../../../../../shared/services/platform.services');
//import { DataTable,PanelMenuModule, PanelModule ,InputTextModule,InputTextareaModule, ButtonModule } from 'primeng/primeng';
var AddComponent = (function () {
    //constructor(private dataService: PlatformService) {
    //        }
    function AddComponent(platformService) {
        this.platformService = platformService;
    }
    AddComponent.prototype.ngOnInit = function () {
    };
    AddComponent.prototype.onSubmit = function (formRef) {
        console.log(formRef);
        console.log(this.username);
        console.log(this.description);
        formRef.locale = "en-us";
        formRef.isDeleted = false;
        var platformData = { name: '', description: '', locale: '', isDeleted: false };
        platformData.name = formRef.username;
        platformData.description = formRef.description;
        platformData.locale = "en-us";
        console.log(platformData);
        this.platformService.postAddPlatform(platformData).subscribe(function (res) { return console.log(res); });
    };
    AddComponent = __decorate([
        core_1.Component({
            selector: 'add-platform',
            styleUrls: ['app/body/Admin/Vehicle/FrameNumber/Add/add.component.css'],
            templateUrl: 'app/body/Admin/Vehicle/FrameNumber/Add/add.component.html'
        }), 
        __metadata('design:paramtypes', [platform_services_1.PlatformService])
    ], AddComponent);
    return AddComponent;
}());
exports.AddComponent = AddComponent;
//# sourceMappingURL=add.component.js.map