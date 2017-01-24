"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
//import { DetailsComponent } from "./../Details/details.component"
var ProjectDetailsMainComponent = (function () {
    //public ProjectDetails:any;
    function ProjectDetailsMainComponent(route, router, service) {
        this.route = route;
        this.router = router;
        this.service = service;
    }
    ProjectDetailsMainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) { return _this.id = params['id']; });
        // this.route.params.forEach((params: Params) => {
        //     let projectId = params['projectId']; // (+) converts string 'id' to a number
        //     //let locale = params['locale'];
        //     this.service.getProjectDetails(projectId).subscribe(ProjectDetails => {this.ProjectDetails = ProjectDetails
        //         console.log(this.ProjectDetails);
        //     });
        // });
    };
    ProjectDetailsMainComponent = __decorate([
        core_1.Component({
            //moduleId: module.id,
            selector: 'project-detail-main',
            templateUrl: 'app/body/Project/DetailsMain/project-details-main.component.html'
        })
    ], ProjectDetailsMainComponent);
    return ProjectDetailsMainComponent;
}());
exports.ProjectDetailsMainComponent = ProjectDetailsMainComponent;
