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
        this.entityType = "BuildLevel";
        this.entityId = this.id;
        this.filepath = "BuildLevel";
        this.buildLevel = { name: '' };
        this.BuildLevelDetails = {
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
            _this.BuildLevelId = params['id']; // (+) converts string 'id' to a number
            //let locale = params['locale'];
            var breadC = _this.breadCrumbsService.getBreadCrumbs();
            var buildLevelsDetailsBreadCrumb = breadC.filter(function (filter) {
                return filter.pageName === 'BuildLevelsDetailsPage';
            })[0];
            console.log("BreadC -----", breadC);
            console.log("buildLevelsDetailsBreadCrumb ---------", buildLevelsDetailsBreadCrumb);
            _this.breadcrumbs = [];
            _this.breadcrumbs = buildLevelsDetailsBreadCrumb.items;
            console.log("breadcurmbs ------", _this.breadcrumbs);
            _this.breadcrumbsHome = { routerLink: ['/'] };
        });
        this.service.getById(this.BuildLevelId).subscribe(function (BuildLevelDetails) {
            _this.BuildLevelDetails = BuildLevelDetails.result;
            _this.BuildLevelDetails.id = _this.BuildLevelId;
            console.log(_this.BuildLevelDetails);
        });
    };
    DetailsComponent.prototype.onSubmit = function (formRef) {
        this.service.postUpdate(this.BuildLevelDetails).subscribe(function (BuildLevelDetails) {
        });
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: 'Saved', detail: '' });
    };
    DetailsComponent = __decorate([
        core_1.Component({
            selector: 'buildLevel-detail',
            templateUrl: 'app/body/Admin/Vehicle/BuildLevels/Details/details.component.html'
        })
    ], DetailsComponent);
    return DetailsComponent;
}());
exports.DetailsComponent = DetailsComponent;
