"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var MilestoneEventComponent = (function () {
    function MilestoneEventComponent(service, route, router, logger) {
        this.service = service;
        this.route = route;
        this.router = router;
        this.logger = logger;
        //title = "MilestoneEvent Grid";
        this.gridData = [];
        this.confInfo = {};
        this.cols = [];
        this.gridFilter = {};
        this.msgs = [];
    }
    MilestoneEventComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.added = params['page'];
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
    MilestoneEventComponent.prototype.navigateDetails = function (id) {
        this.router.navigate(['admin/vehicle/milestoneEvent/details', id]);
    };
    MilestoneEventComponent = __decorate([
        core_1.Component({
            selector: 'milestoneEvent-grid',
            templateUrl: 'app/body/Admin/Vehicle/MilestoneEvent/milestoneEvent.component.html'
        })
    ], MilestoneEventComponent);
    return MilestoneEventComponent;
}());
exports.MilestoneEventComponent = MilestoneEventComponent;
