"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var TestFacilitiesComponent = (function () {
    function TestFacilitiesComponent(breadCrumbsService, testFacilityService, route, router, logger) {
        var _this = this;
        this.breadCrumbsService = breadCrumbsService;
        this.testFacilityService = testFacilityService;
        this.route = route;
        this.router = router;
        this.logger = logger;
        // title = "Test Facilities";
        this.gridData = [];
        this.confInfo = {};
        this.cols = [];
        this.gridFilter = {};
        this.msgs = [];
        this.route.queryParams.subscribe(function (params) {
            _this.added = params['page'];
            var breadC = _this.breadCrumbsService.getBreadCrumbs();
            var testFacilitiesBreadCrumb = breadC.filter(function (filter) {
                return filter.pageName === 'TestFacilitiesHomePage';
            })[0];
            _this.breadcrumbs = [];
            _this.breadcrumbs = testFacilitiesBreadCrumb.items;
            _this.breadcrumbsHome = { routerLink: ['/'] };
        });
        if (this.added == 1) {
            this.msgs = [];
            this.msgs.push({ severity: 'Success', summary: 'Success', detail: '' });
        }
    }
    TestFacilitiesComponent.prototype.ngOnInit = function () {
        var _this = this;
        var resData;
        this.testFacilityService.postGridData()
            .subscribe(function (res) {
            resData = res;
            _this.gridData = res.Data;
            _this.cols = res.Configuration.Columns;
            _this.confInfo = res.Configuration;
        });
    };
    TestFacilitiesComponent.prototype.navigateDetails = function (id) {
        this.router.navigate(['testFacilities/details', id]);
    };
    TestFacilitiesComponent = __decorate([
        core_1.Component({
            selector: 'test-Facilities',
            templateUrl: 'app/body/TestFacilities/testFacilities.component.html'
        })
    ], TestFacilitiesComponent);
    return TestFacilitiesComponent;
}());
exports.TestFacilitiesComponent = TestFacilitiesComponent;
