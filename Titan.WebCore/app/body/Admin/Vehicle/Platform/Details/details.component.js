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
        this.entityType = "Platform";
        this.entityId = this.id;
        this.filepath = "Platform";
        this.platform = { name: '' };
        this.PlatformDetails = {
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
            _this.PlatformId = params['id']; // (+) converts string 'id' to a number
            //let locale = params['locale'];
            var breadC = _this.breadCrumbsService.getBreadCrumbs();
            var platformDetailsBreadCrumb = breadC.filter(function (filter) {
                return filter.pageName === 'PlatformDetailsPage';
            })[0];
            console.log("BreadC -----", breadC);
            console.log("platformDetailsBreadCrumb ---------", platformDetailsBreadCrumb);
            _this.breadcrumbs = [];
            _this.breadcrumbs = platformDetailsBreadCrumb.items;
            console.log("breadcurmbs ------", _this.breadcrumbs);
            _this.breadcrumbsHome = { routerLink: ['/'] };
        });
        this.service.getById(this.PlatformId).subscribe(function (PlatformDetails) {
            _this.PlatformDetails = PlatformDetails.result;
            console.log(_this.PlatformDetails);
        });
    };
    DetailsComponent.prototype.onSubmit = function (formRef) {
        this.service.postUpdate(this.PlatformDetails).subscribe(function (PlatformDetails) {
        });
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: 'Saved', detail: '' });
    };
    DetailsComponent = __decorate([
        core_1.Component({
            selector: 'platform-detail',
            templateUrl: 'app/body/Admin/Vehicle/Platform/Details/details.component.html'
        })
    ], DetailsComponent);
    return DetailsComponent;
}());
exports.DetailsComponent = DetailsComponent;
