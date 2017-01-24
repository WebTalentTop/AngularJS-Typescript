"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var DetailsComponent = (function () {
    function DetailsComponent(route, router, service) {
        this.route = route;
        this.router = router;
        this.service = service;
    }
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            _this.route.params.subscribe(function (params) { return console.log(params['id']); });
            _this.projectId = params['id']; // (+) converts string 'id' to a number
            //let locale = params['locale'];
            _this.service.getProjectDetails(_this.projectId).subscribe(function (ProjectDetails) {
                _this.ProjectDetails = ProjectDetails.result;
                _this.ProjectDetails.plannedStartDate = new Date(_this.ProjectDetails.plannedStartDate);
                _this.ProjectDetails.plannedEndDate = new Date(_this.ProjectDetails.plannedEndDate);
                _this.ProjectDetails.id = _this.projectId;
            });
        });
    };
    DetailsComponent.prototype.onSubmit = function () {
        this.service.putProjectDetails(this.ProjectDetails).subscribe(function (ProjectDetails) {
            console.log(ProjectDetails);
        });
    };
    DetailsComponent = __decorate([
        core_1.Component({
            selector: 'project-detail',
            templateUrl: 'app/body/Project/Details/details.component.html'
        })
    ], DetailsComponent);
    return DetailsComponent;
}());
exports.DetailsComponent = DetailsComponent;
