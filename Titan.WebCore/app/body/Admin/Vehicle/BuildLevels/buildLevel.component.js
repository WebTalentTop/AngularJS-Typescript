"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var BuildLevelComponent = (function () {
    function BuildLevelComponent(breadCrumbsService, service, route, router, logger) {
        this.breadCrumbsService = breadCrumbsService;
        this.service = service;
        this.route = route;
        this.router = router;
        this.logger = logger;
        //title = "BuildLevel Grid";
        this.gridData = [];
        this.confInfo = {};
        this.cols = [];
        this.gridFilter = {};
        this.msgs = [];
    }
    BuildLevelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.added = params['page'];
            var breadC = _this.breadCrumbsService.getBreadCrumbs();
            var buildLevelsBreadCrumb = breadC.filter(function (filter) {
                return filter.pageName === 'BuildLevelsHomePage';
            })[0];
            console.log("BreadC -----", breadC);
            console.log("buildLevelsBreadCrumb ---------", buildLevelsBreadCrumb);
            _this.breadcrumbs = [];
            _this.breadcrumbs = buildLevelsBreadCrumb.items;
            console.log("breadcurmbs ------", _this.breadcrumbs);
            _this.breadcrumbsHome = { routerLink: ['/'] };
        });
        if (this.added == 1) {
            this.msgs = [];
            this.msgs.push({ severity: 'success', summary: 'Added', detail: '' });
        }
        var resData;
        this.service.postGridData()
            .subscribe(function (res) {
            resData = res;
            console.log("Inside of Service Call in BodyComponent: ", resData);
            _this.gridData = res.Data;
            _this.cols = res.Configuration.Columns;
            //console.log("-------- Cols --------", this.cols);
            _this.confInfo = res.Configuration;
            //console.log("------- Configuration --------", this.confInfo);
        });
        console.log("The Whole MyValues After Service Call: ", this.gridData);
        console.log("The Whole configuration Info values: ", this.confInfo);
    };
    BuildLevelComponent.prototype.navigateDetails = function (id) {
        this.router.navigate(['admin/vehicle/buildLevel/details', id]);
    };
    BuildLevelComponent = __decorate([
        core_1.Component({
            selector: 'buildLevel-grid',
            templateUrl: 'app/body/Admin/Vehicle/BuildLevels/buildLevel.component.html'
        })
    ], BuildLevelComponent);
    return BuildLevelComponent;
}());
exports.BuildLevelComponent = BuildLevelComponent;
