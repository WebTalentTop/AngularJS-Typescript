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
        this.entityType = "MilestoneStatus";
        this.entityId = this.id;
        this.filepath = "MilestoneStatus";
        this.milestoneStatus = { name: '' };
        this.MilestoneStatusDetails = {
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
            _this.MilestoneStatusId = params['id']; // (+) converts string 'id' to a number
            //let locale = params['locale'];
            var breadC = _this.breadCrumbsService.getBreadCrumbs();
            var milestoneStatusDetailsBreadCrumb = breadC.filter(function (filter) {
                return filter.pageName === 'MilestoneStatusDetailsPage';
            })[0];
            console.log("BreadC -----", breadC);
            console.log("milestoneStatusDetailsBreadCrumb ---------", milestoneStatusDetailsBreadCrumb);
            _this.breadcrumbs = [];
            _this.breadcrumbs = milestoneStatusDetailsBreadCrumb.items;
            console.log("breadcurmbs ------", _this.breadcrumbs);
            _this.breadcrumbsHome = { routerLink: ['/'] };
        });
        this.service.getById(this.MilestoneStatusId).subscribe(function (MilestoneStatusDetails) {
            _this.MilestoneStatusDetails = MilestoneStatusDetails;
            _this.MilestoneStatusDetails.id = _this.MilestoneStatusId;
            console.log(_this.MilestoneStatusDetails);
        });
    };
    DetailsComponent.prototype.onSubmit = function (formRef) {
        this.service.postUpdate(this.MilestoneStatusDetails).subscribe(function (MilestoneStatusDetails) {
        });
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: 'Saved', detail: '' });
    };
    DetailsComponent = __decorate([
        core_1.Component({
            selector: 'milestoneStatus-detail',
            templateUrl: 'app/body/Admin/Vehicle/MilestoneStatus/Details/details.component.html'
        })
    ], DetailsComponent);
    return DetailsComponent;
}());
exports.DetailsComponent = DetailsComponent;
