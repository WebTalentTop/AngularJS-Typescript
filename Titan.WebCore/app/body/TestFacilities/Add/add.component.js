"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var AddComponent = (function () {
    //constructor(private dataService: PlatformService) {
    //        }
    function AddComponent(breadCrumbsService, service, router) {
        this.breadCrumbsService = breadCrumbsService;
        this.service = service;
        this.router = router;
        this.notificationMsgs = [];
        this.testFacility = {
            name: '', description: '', lastMaintenanceDate: '',
            address: {
                addressLine1: '',
                addressLine2: '',
                city: '',
                state: '',
                postalCode: '',
            } };
    }
    AddComponent.prototype.ngOnInit = function () {
        var breadC = this.breadCrumbsService.getBreadCrumbs();
        var testFacilitiesAddBreadCrumb = breadC.filter(function (filter) {
            return filter.pageName === 'TestFacilitiesAddPage';
        })[0];
        this.breadcrumbs = [];
        this.breadcrumbs = testFacilitiesAddBreadCrumb.items;
        this.breadcrumbsHome = { routerLink: ['/'] };
    };
    AddComponent.prototype.onSubmit = function (formRef) {
        var _this = this;
        formRef.isDeleted = false;
        var formData = { name: '', lastMaintenanceDate: '', description: '',
            address: {
                addressLine1: '',
                addressLine2: '',
                city: '',
                state: '',
                postalCode: '',
            } };
        formData.name = formRef.name;
        formData.description = formRef.description,
            formData.lastMaintenanceDate = formRef.lastMaintenanceDate;
        formData.address.addressLine1 = formRef.addressLine1;
        formData.address.addressLine2 = formRef.addressLine2;
        formData.address.city = formRef.city;
        formData.address.state = formRef.state;
        formData.address.postalCode = formRef.postalCode;
        formData.locale = "en-us";
        this.service.postAdd(formData).subscribe(function (res) {
            if (res.isSuccess) {
                _this.router.navigate(['testFacilities/details/', res.result.id]);
            }
            else {
                _this.notificationMsgs.push({ severity: 'warn', summary: res.message, detail: 'test Facility name exists.' });
            }
        });
    };
    AddComponent = __decorate([
        core_1.Component({
            selector: 'add-test-Facilities',
            styleUrls: ['app/body/TestFacilities/Add/add.component.css'],
            templateUrl: 'app/body/TestFacilities/Add/add.component.html'
        })
    ], AddComponent);
    return AddComponent;
}());
exports.AddComponent = AddComponent;
