"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var DetailsComponent = (function () {
    function DetailsComponent(breadCrumbsService, route, router, service) {
        this.breadCrumbsService = breadCrumbsService;
        this.route = route;
        this.router = router;
        this.service = service;
        this.entityType = "Holiday";
        this.entityId = this.id;
        this.filepath = "Holiday";
        this.holiday = { name: '' };
        this.HolidayDetails = {
            id: '',
            isDeleted: false,
            name: '',
            description: '',
            userCreatedById: '',
            userModifiedById: '',
            createdOn: '',
            modifiedOn: ''
        };
        this.uploadedFiles = [];
    }
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            _this.route.params.subscribe(function (params) { return console.log(params['id']); });
            _this.HolidayId = params['id']; // (+) converts string 'id' to a number
            //let locale = params['locale'];
            var breadC = _this.breadCrumbsService.getBreadCrumbs();
            var holidayDetailsBreadCrumb = breadC.filter(function (filter) {
                return filter.pageName === 'HolidayDetailsPage';
            })[0];
            console.log("BreadC -----", breadC);
            console.log("holidayDetailsBreadCrumb ---------", holidayDetailsBreadCrumb);
            _this.breadcrumbs = [];
            _this.breadcrumbs = holidayDetailsBreadCrumb.items;
            console.log("breadcurmbs ------", _this.breadcrumbs);
            _this.breadcrumbsHome = { routerLink: ['/'] };
        });
        this.service.getById(this.HolidayId).subscribe(function (HolidayDetails) {
            _this.HolidayDetails = HolidayDetails.result;
            console.log(_this.HolidayDetails);
        });
    };
    DetailsComponent.prototype.onSubmit = function (formRef) {
        this.service.postUpdate(this.HolidayDetails).subscribe(function (HolidayDetails) {
        });
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: 'Saved', detail: '' });
    };
    DetailsComponent = __decorate([
        core_1.Component({
            selector: 'holiday-detail',
            templateUrl: 'app/body/Admin/Vehicle/Holiday/Details/details.component.html'
        })
    ], DetailsComponent);
    return DetailsComponent;
}());
exports.DetailsComponent = DetailsComponent;
