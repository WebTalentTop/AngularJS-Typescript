"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var TaskComponent = (function () {
    function TaskComponent(service, taskservice, route, router) {
        //this.route.queryParams.subscribe(params => {
        this.service = service;
        this.taskservice = taskservice;
        this.route = route;
        this.router = router;
        // title = "Test Facilities";
        this.gridData = [];
        this.confInfo = {};
        this.cols = [];
        this.gridFilter = {};
        this.HasTasks = false;
        this.msgs = [];
        //    this.added = params['page'];
        //});
        //if (this.added == 1) {
        //    this.msgs = [];
        //    this.msgs.push({ severity: 'Success', summary: 'Success', detail: '' });
        //}
    }
    TaskComponent.prototype.ngOnInit = function () {
        var _this = this;
        var resData;
        this.taskservice.gettasksbyuserid()
            .subscribe(function (res) {
            if (res.result.pendingTasks.$values.length != 0) {
                _this.HasTasks = true;
            }
            _this.pendingTasks = res.result.pendingTasks.$values;
            _this.allTasks = res.result.allTasks.$values;
            //  this.taskId = res.result.id;
            _this.testRequestId = res.result[0].entityId;
            //resData = res;
            //this.gridData = res.Data;
            //this.cols = res.Configuration.Columns;
            ////console.log("-------- Cols --------", this.cols);
            //this.confInfo = res.Configuration;
            //console.log("------- Configuration --------", this.confInfo);
        });
    };
    TaskComponent.prototype.navigateDetails = function (id) {
        this.router.navigate(['testfacilities/details', id]);
    };
    TaskComponent = __decorate([
        core_1.Component({
            selector: 'test-facilities',
            templateUrl: 'app/body/Task/task.component.html'
        })
    ], TaskComponent);
    return TaskComponent;
}());
exports.TaskComponent = TaskComponent;
