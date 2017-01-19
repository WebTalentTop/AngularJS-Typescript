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
    function AddComponent(breadCrumbsService, service, router, route) {
        this.breadCrumbsService = breadCrumbsService;
        this.service = service;
        this.router = router;
        this.route = route;
    }
    AddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.added = params['page'];
            var breadC = _this.breadCrumbsService.getBreadCrumbs();
            var marketAddBreadCrumb = breadC.filter(function (filter) {
                return filter.pageName === 'MarketAddPage';
            })[0];
            console.log("BreadC -----", breadC);
            console.log("marketAddBreadCrumb ---------", marketAddBreadCrumb);
            _this.breadcrumbs = [];
            _this.breadcrumbs = marketAddBreadCrumb.items;
            console.log("breadcurmbs ------", _this.breadcrumbs);
            _this.breadcrumbsHome = { routerLink: ['/'] };
        });
    };
    AddComponent.prototype.onSubmit = function (formRef) {
        var _this = this;
        console.log(formRef);
        console.log(this.username);
        console.log(this.description);
        formRef.locale = "en-us";
        formRef.isDeleted = false;
        var formData = { name: '', description: '', locale: '', isDeleted: false };
        formData.name = formRef.name;
        formData.description = formRef.description;
        formData.locale = "en-us";
        var added = "true";
        console.log(formData);
        this.service.postAdd(formData).subscribe(function (res) {
            console.log('--------------res result------------', +res);
            // this.router.navigate(["/vehicle/projectStatus/", res]);
            if (res.isSuccess) {
                //this.router.navigate([], {q})
                _this.router.navigate(["/admin/vehicle/market"], { queryParams: { page: 1 } });
            }
        });
        // );
    };
    AddComponent = __decorate([
        core_1.Component({
            selector: 'add-market',
            templateUrl: 'app/body/Admin/Vehicle/Market/Add/add.component.html'
        })
    ], AddComponent);
    return AddComponent;
}());
exports.AddComponent = AddComponent;
