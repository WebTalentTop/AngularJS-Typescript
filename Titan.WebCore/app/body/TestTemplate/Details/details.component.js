"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var DetailsComponent = (function () {
    function DetailsComponent(testTemplateService, testtypeService, testmodeService, router, route, procedureService, testRequirementService, confirmationService) {
        this.testTemplateService = testTemplateService;
        this.testtypeService = testtypeService;
        this.testmodeService = testmodeService;
        this.router = router;
        this.route = route;
        this.procedureService = procedureService;
        this.testRequirementService = testRequirementService;
        this.confirmationService = confirmationService;
        this.testModes = new Array();
        this.selectedProcedures = new Array();
        this.filteredProcedures = new Array();
        this.filteredSelectedProcedures = new Array();
        this.selectedTestRequirements = new Array();
        this.filteredTestRequirements = new Array();
        this.filteredSelectedTestRequirements = new Array();
    }
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.getTestType();
        //var testMode = {
        //    label: "Select Test Type to Populate",
        //    value: null
        //};
        //this.testModes.push(testMode);
        this.route.params.subscribe(function (params) {
            _this.testTemplateService.getById(params['id']).subscribe(function (res) {
                _this.testTemplate = res.result;
                //if (this.testTemplate.testTypeId != null) {
                //    this.onTestTypeChange();
                //}
            });
            _this.testTemplateService.getTestTemplateProcedures(params['id']).subscribe(function (res) {
                _this.selectedProcedures = res.result;
            });
            _this.testTemplateService.getTestTemplateRequirements(params['id']).subscribe(function (res) {
                _this.selectedTestRequirements = res.result;
            });
        });
    };
    DetailsComponent.prototype.onDelete = function (procedure) {
        var _this = this;
        this.confirmationService.confirm({
            message: 'Do you want to delete this record?',
            header: 'Delete Confirmation',
            icon: 'fa fa-trash',
            accept: function () {
                _this.testTemplateService.postDeleteTestTemplateProcedure(_this.testTemplate.id, procedure.id).subscribe(function (res) {
                    _this.selectedProcedures = res.result;
                });
            }
        });
    };
    DetailsComponent.prototype.onAddProcedure = function () {
        var _this = this;
        var selectedProcedureIds = new Array();
        for (var _i = 0, _a = this.filteredSelectedProcedures; _i < _a.length; _i++) {
            var sel = _a[_i];
            selectedProcedureIds.push(sel.id);
        }
        var inputDto = {
            procedureList: selectedProcedureIds
        };
        this.testTemplateService.postAddProcedures(selectedProcedureIds, this.testTemplate.id).subscribe(function (filteredList) {
            _this.selectedProcedures = filteredList.result;
            _this.filteredSelectedProcedures = null;
        });
    };
    DetailsComponent.prototype.filterProcedures = function (event) {
        var _this = this;
        this.procedureService.filterByTestTemplateId(this.testTemplate.id, event.query).subscribe(function (filteredList) {
            _this.filteredProcedures = filteredList.result;
        });
    };
    DetailsComponent.prototype.getTestType = function () {
        var _this = this;
        //    testTypes
        this.testtypeService.getAll().subscribe(function (response) {
            _this.testTypes = new Array();
            if (response != null) {
                var resultMap = new Array();
                resultMap.push({
                    label: "Select Test Type",
                    value: null
                });
                for (var _i = 0, _a = response.$values; _i < _a.length; _i++) {
                    var template = _a[_i];
                    var temp = {
                        label: template.name,
                        value: template.id
                    };
                    resultMap.push(temp);
                }
                _this.testTypes = resultMap;
            }
        });
    };
    DetailsComponent.prototype.onTestTypeChange = function () {
        var _this = this;
        this.testModes = new Array();
        //this.testModes
        this.testmodeService.getAllByTestTypeId(this.testTemplate.testTypeId).subscribe(function (response) {
            if (response != null && response.$values.length > 0) {
                var resultMap = new Array();
                resultMap.push({
                    label: "Select Test Mode",
                    value: null
                });
                for (var _i = 0, _a = response.$values; _i < _a.length; _i++) {
                    var template = _a[_i];
                    var temp = {
                        label: template.name,
                        value: template.id
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
    DetailsComponent.prototype.onDeleteTestRequirement = function (testRequirement) {
        var _this = this;
        this.confirmationService.confirm({
            message: 'Do you want to delete this record?',
            header: 'Delete Confirmation',
            icon: 'fa fa-trash',
            accept: function () {
                _this.testTemplateService.postDeleteTestTemplateRequirement(_this.testTemplate.id, testRequirement.id).subscribe(function (res) {
                    _this.selectedTestRequirements = res.result;
                });
            }
        });
    };
    DetailsComponent.prototype.onAddTestRequirement = function () {
        var _this = this;
        var selectedTestRequirementIds = new Array();
        for (var _i = 0, _a = this.filteredSelectedTestRequirements; _i < _a.length; _i++) {
            var sel = _a[_i];
            selectedTestRequirementIds.push(sel.id);
        }
        var inputDto = {
            testRequirementList: selectedTestRequirementIds
        };
        this.testTemplateService.postAddTestRequirements(selectedTestRequirementIds, this.testTemplate.id).subscribe(function (filteredList) {
            _this.selectedTestRequirements = filteredList.result;
            _this.filteredSelectedTestRequirements = null;
        });
    };
    DetailsComponent.prototype.filterTestRequirements = function (event) {
        var _this = this;
        this.testRequirementService.filterByTestTemplateId(this.testTemplate.id, event.query).subscribe(function (filteredList) {
            _this.filteredTestRequirements = filteredList.$values;
        });
    };
    DetailsComponent.prototype.onMoveProcedureUp = function (procedure) {
        var oldIndex = this.selectedProcedures.indexOf(procedure);
        this.selectedProcedures.splice(oldIndex - 1, 0, this.selectedProcedures.splice(oldIndex, 1)[0]);
        this.updateProcedureProcedureDisplayOrder();
    };
    DetailsComponent.prototype.onMoveProcedureDown = function (procedure) {
        var oldIndex = this.selectedProcedures.indexOf(procedure);
        this.selectedProcedures.splice(oldIndex + 1, 0, this.selectedProcedures.splice(oldIndex, 1)[0]);
        this.updateProcedureProcedureDisplayOrder();
    };
    DetailsComponent.prototype.updateProcedureProcedureDisplayOrder = function () {
        var _this = this;
        this.testTemplateService.putTestTemplateProcedureDisplayOrder(this.selectedProcedures, this.testTemplate.id).subscribe(function (filteredList) {
            _this.selectedProcedures = filteredList.result;
        });
    };
    DetailsComponent.prototype.onLoadProcedureSteps = function (event) {
        console.log(event);
        if (event.data != undefined) {
            this.procedureService.getProcedureSteps(event.data.id).subscribe(function (res) {
                event.data.steps = res.$values;
            });
        }
        else {
            this.procedureService.getProcedureSteps(event.id).subscribe(function (res) {
                event.steps = res.$values;
            });
        }
    };
    DetailsComponent.prototype.isUpButtonVisible = function (procedure) {
        if (this.selectedProcedures != undefined && this.selectedProcedures.length > 1 && procedure.id != this.selectedProcedures[0].id)
            return true;
        return false;
    };
    DetailsComponent.prototype.isDownButtonVisible = function (procedure) {
        if (this.selectedProcedures != undefined && this.selectedProcedures.length > 1 && procedure.id != this.selectedProcedures[this.selectedProcedures.length - 1].id)
            return true;
        return false;
    };
    DetailsComponent.prototype.onSubmit = function () {
        this.testTemplateService.postUpdate(this.testTemplate).subscribe(function (res) {
            //this.router.navigate(['testtemplate/details', res.$values.id]);
        });
    };
    DetailsComponent = __decorate([
        core_1.Component({
            selector: 'details-testtemplate',
            templateUrl: 'app/body/TestTemplate/Details/details.component.html'
        })
    ], DetailsComponent);
    return DetailsComponent;
}());
exports.DetailsComponent = DetailsComponent;
