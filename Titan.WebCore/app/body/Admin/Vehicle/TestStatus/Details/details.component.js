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
        this.entityType = "TestStatus";
        this.entityId = this.id;
        this.filepath = "TestStatus";
        this.testStatus = { name: '' };
        this.TestStatusDetails = {
            id: '',
            isDeleted: false,
            name: '',
            description: '',
            userCreatedById: '',
            userModifiedById: '',
            createdOn: '',
            modifiedOn: '',
            calendarDisplayColor: ''
        };
        this.uploadedFiles = [];
    }
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            _this.route.params.subscribe(function (params) { return console.log(params['id']); });
            _this.TestStatusId = params['id']; // (+) converts string 'id' to a number
            //let locale = params['locale'];
            _this.service.getById(_this.TestStatusId).subscribe(function (TestStatusDetails) {
                _this.TestStatusDetails = TestStatusDetails.result;
                console.log(_this.TestStatusDetails);
            });
        });
    };
    DetailsComponent.prototype.onSubmit = function (formRef) {
        this.service.postUpdate(this.TestStatusDetails).subscribe(function (TestStatusDetails) {
        });
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: 'Saved', detail: '' });
    };
    DetailsComponent = __decorate([
        core_1.Component({
            selector: 'testStatus-detail',
            templateUrl: 'app/body/Admin/Vehicle/TestStatus/Details/details.component.html'
        })
    ], DetailsComponent);
    return DetailsComponent;
}());
exports.DetailsComponent = DetailsComponent;
