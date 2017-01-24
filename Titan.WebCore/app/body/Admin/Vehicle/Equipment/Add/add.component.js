"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
//import { DataTable,PanelMenuModule, PanelModule ,InputTextModule,InputTextareaModule, ButtonModule } from 'primeng/primeng';
var AddComponent = (function () {
    //constructor(private dataService: PlatformService) {
    //        }
    function AddComponent(service) {
        this.service = service;
    }
    AddComponent.prototype.ngOnInit = function () {
    };
    AddComponent.prototype.onSubmit = function (formRef) {
        console.log(formRef);
        console.log(this.username);
        console.log(this.description);
        formRef.locale = "en-us";
        formRef.isDeleted = false;
        var formData = { name: '', description: '', locale: '', isDeleted: false };
        formData.name = formRef.username;
        formData.description = formRef.description;
        formData.locale = "en-us";
        console.log(formData);
        this.service.postAdd(formData).subscribe(function (res) { return console.log(res); });
    };
    AddComponent = __decorate([
        core_1.Component({
            selector: 'add-equipment',
            styleUrls: ['app/body/Admin/Vehicle/Equipment/Add/add.component.css'],
            templateUrl: 'app/body/Admin/Vehicle/Equipment/Add/add.component.html'
        })
    ], AddComponent);
    return AddComponent;
}());
exports.AddComponent = AddComponent;
