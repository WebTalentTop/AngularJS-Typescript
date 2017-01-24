"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ProjectComponent = (function () {
    function ProjectComponent(service, router, logger, titanUserProfileService) {
        var _this = this;
        this.service = service;
        this.router = router;
        this.logger = logger;
        this.titanUserProfileService = titanUserProfileService;
        this.gridData = [];
        this.confInfo = {};
        this.cols = [];
        this.gridFilter = {};
        this.titanUserProfileService.getCurrentUserProfile()
            .subscribe(function (res) {
            _this.currentUser = res.result;
        });
    }
    ProjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.logger.logConsole("Project is loaded --------", "yippie");
        var resData;
        this.service.postGridData()
            .subscribe(function (res) {
            resData = res;
            _this.gridData = res.Data;
            _this.cols = res.Configuration.Columns;
            _this.confInfo = res.Configuration;
        });
    };
    ProjectComponent.prototype.navigateDetails = function (id) {
        this.router.navigate(['project/detailsmain', id]);
    };
    ProjectComponent = __decorate([
        core_1.Component({
            selector: 'project',
            templateUrl: 'app/body/Project/project.component.html'
        })
    ], ProjectComponent);
    return ProjectComponent;
}());
exports.ProjectComponent = ProjectComponent;
