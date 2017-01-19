"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var AddComponent = (function () {
    function AddComponent(procedureService, testTypeService, testModeService, testtypeService, router) {
        this.procedureService = procedureService;
        this.testTypeService = testTypeService;
        this.testModeService = testModeService;
        this.testtypeService = testtypeService;
        this.router = router;
        this.testModes = new Array();
    }
    AddComponent.prototype.ngOnInit = function () {
        this.procedure = new Object();
        this.getTestType();
        var testMode = {
            label: "Select Test Type to Populate",
            value: null
        };
        this.testModes.push(testMode);
    };
    AddComponent.prototype.getTestType = function () {
        var _this = this;
        //    testTypes
        this.testTypeService.getAll().subscribe(function (response) {
            _this.testTypes = new Array();
            if (response != null) {
                var resultMap = new Array();
                resultMap.push({
                    label: "Select Test Type",
                    value: null
                });
                for (var _i = 0, _a = response.result; _i < _a.length; _i++) {
                    var template = _a[_i];
                    var temp = {
                        label: template.label,
                        value: template.value
                    };
                    resultMap.push(temp);
                }
                _this.testTypes = resultMap;
            }
        });
    };
    AddComponent.prototype.onTestTypeChange = function () {
        var _this = this;
        this.testModes = new Array();
        //this.testModes
        this.testtypeService.getById(this.procedure.testTypeId).subscribe(function (response) {
            if (response != null && response.result.selectedTestModesList != null && response.result.selectedTestModesList.length > 0) {
                var resultMap = new Array();
                resultMap.push({
                    label: "Select Test Mode",
                    value: null
                });
                for (var _i = 0, _a = response.result.selectedTestModesList; _i < _a.length; _i++) {
                    var template = _a[_i];
                    var temp = {
                        label: template.label,
                        value: template.value
                    };
                    resultMap.push(temp);
                }
                _this.testModes = resultMap;
            }
            else {
                var testMode = [{
                        label: "No Modes available",
                        value: null
                    }];
                _this.testModes = testMode;
            }
        });
    };
    AddComponent.prototype.onSubmit = function () {
        var _this = this;
        this.procedureService.postAdd(this.procedure).subscribe(function (res) {
            if (res.isSuccess) {
                _this.router.navigate(['procedure/details', res.result]);
            }
        });
    };
    AddComponent = __decorate([
        core_1.Component({
            selector: 'add-procedure',
            styleUrls: ['app/body/Procedure/Add/add.component.css'],
            templateUrl: 'app/body/Procedure/Add/add.component.html'
        })
    ], AddComponent);
    return AddComponent;
}());
exports.AddComponent = AddComponent;
