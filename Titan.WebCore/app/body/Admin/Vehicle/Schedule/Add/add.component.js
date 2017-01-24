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
    function AddComponent(service, router, route) {
        this.service = service;
        this.router = router;
        this.route = route;
    }
    AddComponent.prototype.ngOnInit = function () {
    };
    AddComponent.prototype.onSubmit = function (formRef) {
        var _this = this;
        console.log(formRef);
        console.log(this.username);
        console.log(this.description);
        formRef.locale = "en-us";
        formRef.isDeleted = false;
        var formData = { startTimeUTC: '', endTimeUTC: '', recurranceCronExpression: '', defaultlocale: '', isDeleted: false };
        formData.startTimeUTC = formRef.startTimeUTC;
        formData.recurranceCronExpression = formRef.recurranceCronExpression;
        formData.endTimeUTC = formRef.endTimeUTC;
        formData.defaultlocale = "en-us";
        var added = "true";
        console.log(formData);
        this.service.postAdd(formData).subscribe(function (res) {
            console.log('--------------res result------------', +res);
            // this.router.navigate(["/vehicle/projectStatus/", res]);
            if (res.isSuccess) {
                //this.router.navigate([], {q})
                _this.router.navigate(["/admin/vehicle/schedule"], { queryParams: { page: 1 } });
            }
        });
        // );
    };
    AddComponent = __decorate([
        core_1.Component({
            selector: 'add-schedule',
            templateUrl: 'app/body/Admin/Vehicle/Schedule/Add/add.component.html'
        })
    ], AddComponent);
    return AddComponent;
}());
exports.AddComponent = AddComponent;
