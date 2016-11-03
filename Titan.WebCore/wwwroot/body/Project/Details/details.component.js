"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var project_service_1 = require('../project.service');
var DetailsComponent = (function () {
    function DetailsComponent(route, router, service) {
        this.route = route;
        this.router = router;
        this.service = service;
    }
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            _this.projectId = params['projectId']; // (+) converts string 'id' to a number
            //let locale = params['locale'];
            _this.service.getProjectDetails(_this.projectId).subscribe(function (ProjectDetails) {
                _this.ProjectDetails = ProjectDetails;
                _this.ProjectDetails.id = _this.projectId;
                console.log(_this.ProjectDetails);
            });
        });
    };
    DetailsComponent.prototype.onSubmit = function () {
        console.log("inside");
        this.service.putProjectDetails(this.ProjectDetails).subscribe(function (ProjectDetails) {
            console.log(ProjectDetails);
        });
    };
    DetailsComponent = __decorate([
        core_1.Component({
            selector: 'project-detail',
            templateUrl: 'app/body/Project/Details/details.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, project_service_1.ProjectService])
    ], DetailsComponent);
    return DetailsComponent;
}());
exports.DetailsComponent = DetailsComponent;
//# sourceMappingURL=details.component.js.map