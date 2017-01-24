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
        this.testTypeDetails = {
            id: '',
            isDeleted: false,
            name: '',
            description: '',
            userCreatedById: '',
            userModifiedById: '',
            createdOn: '',
            modifiedOn: '',
            //selectedTestTypeIdList:
            // allTestTypeIdList:
            TestTypeIdList: ''
        };
        this.entityType = "TestMode";
        this.entityId = this.id;
        this.filepath = "TestMode";
        this.testMode = { name: '' };
        //testTypeDetails: any;
        this.selectedTestTypeIdList = [];
        this.uploadedFiles = [];
    }
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.selectedTestTypes = [];
        this.route.params.forEach(function (params) {
            _this.route.params.subscribe(function (params) { return console.log(params['id']); });
            _this.TestModeId = params['id']; // (+) converts string 'id' to a number
            //let locale = params['locale'];
            //this.service.getAllTestTypes().subscribe(TestTypesList => {
            //    this.testTypeDetails = TestTypesList.result;
            //    this.allTestTypes = this.testTypeDetails.allTestTypeIdList.$values;
            //    this.selectedTestTypes = this.testTypeDetails.selectedTestTypeIdList.$values;
            //});
            _this.service.getById(_this.TestModeId).subscribe(function (TestModeDetails) {
                _this.testTypeDetails = TestModeDetails.result;
                _this.allTestTypes = _this.testTypeDetails.allTestTypesList.$values;
                _this.selectedTestTypes = _this.testTypeDetails.selectedTestTypesList;
            });
        });
    };
    DetailsComponent.prototype.onSubmit = function (formRef) {
        var _this = this;
        this.selectedTestTypeIdList = [];
        if (this.selectedTestTypes.length == 0) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: 'select atleast one TestType', detail: '' });
            return null;
        }
        this.selectedTestTypes.forEach(function (testtype, index) {
            _this.selectedTestTypeIdList.push(testtype.value);
        });
        this.testTypeDetails.testTypeIdList = this.selectedTestTypeIdList;
        this.service.postUpdate(this.testTypeDetails).subscribe(function (TestModeDetails) {
        });
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: 'Saved', detail: '' });
    };
    DetailsComponent = __decorate([
        core_1.Component({
            selector: 'testMode-detail',
            templateUrl: 'app/body/Admin/Vehicle/TestMode/Details/details.component.html'
        })
    ], DetailsComponent);
    return DetailsComponent;
}());
exports.DetailsComponent = DetailsComponent;
