"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var procedureDependentItemType;
(function (procedureDependentItemType) {
    procedureDependentItemType[procedureDependentItemType["TestRequirement"] = 1] = "TestRequirement";
    procedureDependentItemType[procedureDependentItemType["Step"] = 2] = "Step";
})(procedureDependentItemType || (procedureDependentItemType = {}));
var DetailsComponent = (function () {
    function DetailsComponent(procedureService, testtypeService, testmodeService, router, route, testrequirementService, stepService, confirmationService) {
        this.procedureService = procedureService;
        this.testtypeService = testtypeService;
        this.testmodeService = testmodeService;
        this.router = router;
        this.route = route;
        this.testrequirementService = testrequirementService;
        this.stepService = stepService;
        this.confirmationService = confirmationService;
        this.testModes = new Array();
        this.selectedTestRequirements = new Array();
        this.filteredTestRequirements = new Array();
        this.filteredSelectedTestRequirements = new Array();
        this.filteredSelectedSteps = new Array();
        this.selectedSteps = new Array();
        this.filteredSteps = new Array();
    }
    DetailsComponent.prototype.onAddNewStep = function () {
        this.displayAddStep = true;
    };
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getTestType();
        var testMode = {
            label: "Select Test Type to Populate",
            value: null
        };
        this.testModes.push(testMode);
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.procedureService.getById(params['id']).subscribe(function (res) {
                _this.procedure = res.result;
                if (_this.procedure.testTypeId != null) {
                    _this.onTestTypeChange();
                }
            });
            _this.procedureService.getProcedureRequirements(params['id']).subscribe(function (res) {
                _this.selectedTestRequirements = res.$values;
            });
            _this.procedureService.getProcedureSteps(params['id']).subscribe(function (res) {
                _this.selectedSteps = res.$values;
            });
        });
    };
    DetailsComponent.prototype.onAddStepComplete = function (newStepId) {
        var _this = this;
        var selectedStepIds = new Array();
        selectedStepIds.push(newStepId);
        this.procedureService.postAddSteps(selectedStepIds, this.procedure.id).subscribe(function (filteredList) {
            _this.selectedSteps = filteredList.$values;
            _this.displayAddStep = false;
            _this.filteredSelectedSteps = null;
        });
    };
    DetailsComponent.prototype.onCancelStepComplete = function (event) {
        this.displayAddStep = false;
    };
    DetailsComponent.prototype.onEditStepComplete = function (event) {
        var _this = this;
        this.procedureService.getProcedureSteps(this.id).subscribe(function (res) {
            _this.selectedSteps = res.$values;
            _this.displayEditStep = false;
        });
    };
    DetailsComponent.prototype.onEditCancelStepComplete = function (event) {
        this.displayEditStep = false;
    };
    DetailsComponent.prototype.onEditStep = function (step) {
        this.editStepId = step.id;
        this.displayEditStep = true;
    };
    DetailsComponent.prototype.onMoveStepUp = function (step) {
        var oldIndex = this.selectedSteps.indexOf(step);
        this.selectedSteps.splice(oldIndex - 1, 0, this.selectedSteps.splice(oldIndex, 1)[0]);
        this.updateProcedureStepDisplayOrder();
    };
    DetailsComponent.prototype.onMoveStepDown = function (step) {
        var oldIndex = this.selectedSteps.indexOf(step);
        this.selectedSteps.splice(oldIndex + 1, 0, this.selectedSteps.splice(oldIndex, 1)[0]);
        this.updateProcedureStepDisplayOrder();
    };
    DetailsComponent.prototype.updateProcedureStepDisplayOrder = function () {
        var _this = this;
        this.procedureService.putProcedureStepDisplayOrder(this.selectedSteps, this.procedure.id).subscribe(function (filteredList) {
            _this.selectedSteps = filteredList.$values;
        });
    };
    DetailsComponent.prototype.onDelete = function (obj, type) {
        var _this = this;
        this.confirmationService.confirm({
            message: 'Do you want to delete this record?',
            header: 'Delete Confirmation',
            icon: 'fa fa-trash',
            accept: function () {
                if (type == procedureDependentItemType.TestRequirement) {
                    _this.procedureService.postDeleteProcedureRequirement(_this.procedure.id, obj.id).subscribe(function (res) {
                        _this.selectedTestRequirements = res.$values;
                    });
                }
                else if (type == procedureDependentItemType.Step) {
                    _this.procedureService.postDeleteProcedureStep(_this.procedure.id, obj.id).subscribe(function (res) {
                        _this.selectedSteps = res.$values;
                    });
                }
            }
        });
        var overlays = $("div.ui-widget-overlay.ui-dialog-mask:visible");
        if (overlays.length > 1) {
            var maxZIndex = 0;
            overlays.each(function () {
                var index_current = parseInt($(this).css("z-index"), 10);
                if (index_current > maxZIndex) {
                    maxZIndex = index_current;
                }
            });
            overlays.each(function () {
                var index_current = parseInt($(this).css("z-index"), 10);
                if (index_current == maxZIndex) {
                    $(this).hide();
                }
            });
        }
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
        this.procedureService.postAddTestRequirements(selectedTestRequirementIds, this.procedure.id).subscribe(function (filteredList) {
            _this.selectedTestRequirements = filteredList.$values;
            _this.filteredSelectedTestRequirements = null;
        });
    };
    DetailsComponent.prototype.onAddStep = function () {
        var _this = this;
        var selectedStepIds = new Array();
        for (var _i = 0, _a = this.filteredSelectedSteps; _i < _a.length; _i++) {
            var sel = _a[_i];
            selectedStepIds.push(sel.id);
        }
        var inputDto = {
            stepList: selectedStepIds
        };
        this.procedureService.postAddSteps(selectedStepIds, this.procedure.id).subscribe(function (filteredList) {
            _this.selectedSteps = filteredList.$values;
            _this.filteredSelectedSteps = null;
        });
    };
    DetailsComponent.prototype.filterTestRequirements = function (event) {
        var _this = this;
        this.testrequirementService.filterByProcedureId(this.procedure.id, event.query).subscribe(function (filteredList) {
            _this.filteredTestRequirements = filteredList.$values;
        });
    };
    DetailsComponent.prototype.filterSteps = function (event) {
        var _this = this;
        this.stepService.filterByProcedureId(this.procedure.id, event.query).subscribe(function (response) {
            if (response.isSuccess)
                _this.filteredSteps = response.result;
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
                //resultMap.concat(response.result);
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
    DetailsComponent.prototype.isUpButtonVisible = function (step) {
        if (this.selectedSteps != undefined && this.selectedSteps.length > 1 && step.id != this.selectedSteps[0].id)
            return true;
        return false;
    };
    DetailsComponent.prototype.isDownButtonVisible = function (step) {
        if (this.selectedSteps != undefined && this.selectedSteps.length > 1 && step.id != this.selectedSteps[this.selectedSteps.length - 1].id)
            return true;
        return false;
    };
    DetailsComponent.prototype.onTestTypeChange = function () {
        var _this = this;
        this.testModes = new Array();
        //this.testModes
        this.testtypeService.getById(this.procedure.testTypeId).subscribe(function (response) {
            if (response != null) {
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
                    //resultMap.concat(response.result.selectedTestModesList);
                    _this.testModes = resultMap;
                }
                else {
                    var testMode = [{
                            label: "No Modes available",
                            value: null
                        }];
                    _this.testModes = testMode;
                }
            }
        });
    };
    DetailsComponent.prototype.onSubmit = function () {
        this.procedureService.postUpdate(this.procedure).subscribe(function (res) {
            //this.router.navigate(['procedure/details', res.$values.id]);
        });
    };
    DetailsComponent = __decorate([
        core_1.Component({
            selector: 'details-procedure',
            templateUrl: 'app/body/Procedure/Details/details.component.html'
        })
    ], DetailsComponent);
    return DetailsComponent;
}());
exports.DetailsComponent = DetailsComponent;
