"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var StepTypeEnum;
(function (StepTypeEnum) {
    StepTypeEnum[StepTypeEnum["Checklist"] = 'BC202C07-6275-4D9B-826D-1BE0171CEA8F'] = "Checklist";
    StepTypeEnum[StepTypeEnum["TorqueSheet"] = 'E5023192-2AA8-4EBB-A141-5F477BC31716'] = "TorqueSheet";
    StepTypeEnum[StepTypeEnum["InstallationSheet"] = '6F828638-D15C-473F-AFB4-49940C09FA49'] = "InstallationSheet";
    StepTypeEnum[StepTypeEnum["LogSheet"] = 'BB9F4BF6-4F28-4591-A60F-A2E1A5E64480'] = "LogSheet";
    StepTypeEnum[StepTypeEnum["InspectionSheet"] = '1AF2D2E3-0517-4092-B9D5-C71CA0EF1854'] = "InspectionSheet";
    StepTypeEnum[StepTypeEnum["RemovalSheet"] = '58DD1E1D-2A9F-42C0-B387-4E14349D6DCE'] = "RemovalSheet";
    StepTypeEnum[StepTypeEnum["LoadSheet"] = '7813C24A-450F-4026-B38F-E8F584CEA51C'] = "LoadSheet";
    StepTypeEnum[StepTypeEnum["PictureSheet"] = '8D875260-0811-4AEE-A5DD-7DCA6CFCFEB3'] = "PictureSheet";
})(StepTypeEnum || (StepTypeEnum = {}));
var StepFrequencyEnum;
(function (StepFrequencyEnum) {
    StepFrequencyEnum[StepFrequencyEnum["Weekly"] = 'C5023192-2AA8-4EBB-A141-5F477BC31716'] = "Weekly";
    StepFrequencyEnum[StepFrequencyEnum["Test"] = 'CF828638-D15C-473F-AFB4-49940C09FA49'] = "Test";
    StepFrequencyEnum[StepFrequencyEnum["Monthly"] = 'CB9F4BF6-4F28-4591-A60F-A2E1A5E64480'] = "Monthly";
    StepFrequencyEnum[StepFrequencyEnum["Daily"] = 'C8DD1E1D-2A9F-42C0-B387-4E14349D6DCE'] = "Daily";
    StepFrequencyEnum[StepFrequencyEnum["BiMonthly"] = 'CD875260-0811-4AEE-A5DD-7DCA6CFCFEB3'] = "BiMonthly";
    StepFrequencyEnum[StepFrequencyEnum["Cycles"] = 'CC202C07-6275-4D9B-826D-1BE0171CEA8F'] = "Cycles";
})(StepFrequencyEnum || (StepFrequencyEnum = {}));
var DetailsComponent = (function () {
    function DetailsComponent(service, route, router, dataService, dataTimeService) {
        var _this = this;
        this.service = service;
        this.route = route;
        this.router = router;
        this.dataService = dataService;
        this.dataTimeService = dataTimeService;
        this.stepTypeDetailLabelText = "";
        this.onEditComplete = new core_1.EventEmitter();
        this.onCancelComplete = new core_1.EventEmitter();
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            if (_this.stepTypesLoaded && _this.stepFrequenciesLoaded)
                _this.getDetails(_this.id);
        });
    }
    Object.defineProperty(DetailsComponent.prototype, "stepId", {
        set: function (id) {
            this.id = id;
            if (this.stepTypesLoaded && this.stepFrequenciesLoaded)
                this.getDetails(this.id);
        },
        enumerable: true,
        configurable: true
    });
    DetailsComponent.prototype.ngOnInit = function () {
        this.getStepTypes();
        this.getStepFrequencies();
        this.getTestStages();
    };
    DetailsComponent.prototype.getDetails = function (id) {
        var _this = this;
        if (id != undefined) {
            this.service.getById(id).subscribe(function (response) {
                if (response != null && response.isSuccess) {
                    _this.stepDetails = response.result;
                    _this.stepDetails.stepTypeDetailIds = _this.stepDetails.stepTypeDetailIds.$values;
                    _this.onRepeatChange(_this.stepDetails.repeatStep);
                    _this.stepDetails.repeatStep = _this.stepDetails.repeatStep.toString();
                    _this.onStepFrequencyChange();
                    _this.onStepTypeChange();
                }
            });
        }
    };
    DetailsComponent.prototype.getTestStages = function () {
        var _this = this;
        //    userRoles
        this.dataTimeService.getTestStages().subscribe(function (response) {
            _this.testStages = new Array();
            if (response != null) {
                var resultMap = new Array();
                resultMap.push({
                    label: "Select Test Stage",
                    value: null
                });
                for (var _i = 0, response_1 = response; _i < response_1.length; _i++) {
                    var template = response_1[_i];
                    var temp = {
                        label: template.name,
                        value: template.id
                    };
                    resultMap.push(temp);
                }
                _this.testStages = resultMap;
            }
        });
    };
    DetailsComponent.prototype.onStepTypeChange = function () {
        var _this = this;
        this.service.getStepTypeDetails(this.stepDetails.stepTypeId).subscribe(function (response) {
            _this.stepTypeDetailList = new Array();
            if (response != null && response.isSuccess) {
                _this.stepTypeDetailList = _this.convertToArray(response.result.data, "");
                _this.stepTypeDetailLabelText = response.result.labelText;
            }
            else {
                _this.stepTypeDetailLabelText = "";
                _this.stepTypeDetailList = null;
            }
        });
    };
    DetailsComponent.prototype.onRepeatChange = function (isRepeat) {
        if (isRepeat == true) {
            this.showRepeatDetails = true;
        }
        else {
            this.showRepeatDetails = false;
        }
    };
    DetailsComponent.prototype.onStepFrequencyChange = function () {
        if (this.stepDetails.stepFrequencyId.toUpperCase() == StepFrequencyEnum.Cycles || this.stepDetails.stepFrequencyId.toUpperCase() == StepFrequencyEnum.Test) {
            this.showTestOrCycle = true;
        }
        else {
            this.showTestOrCycle = false;
            this.stepDetails.CycleOrTestPercentages = null;
        }
    };
    DetailsComponent.prototype.getStepTypes = function () {
        var _this = this;
        //    testTypes
        this.service.getStepTypes().subscribe(function (response) {
            _this.stepTypes = new Array();
            if (response != null) {
                _this.stepTypes = _this.convertToArray(response.result, "Select Step Type");
                _this.stepTypesLoaded = true;
                if (_this.stepTypesLoaded && _this.stepFrequenciesLoaded)
                    _this.getDetails(_this.id);
            }
        });
    };
    DetailsComponent.prototype.getStepFrequencies = function () {
        var _this = this;
        this.service.getStepFrequencies().subscribe(function (response) {
            _this.stepFrequencies = new Array();
            if (response != null) {
                _this.stepFrequencies = _this.convertToArray(response.result, "Select Step Frequency");
                _this.stepFrequenciesLoaded = true;
                if (_this.stepTypesLoaded && _this.stepFrequenciesLoaded)
                    _this.getDetails(_this.id);
            }
        });
    };
    DetailsComponent.prototype.convertToArray = function (data, initialLabel) {
        var resultMap = new Array();
        if (initialLabel != "") {
            resultMap.push({
                label: initialLabel,
                value: null
            });
        }
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var template = data_1[_i];
            var temp = {
                label: template.name,
                value: template.id
            };
            resultMap.push(temp);
        }
        return resultMap;
    };
    DetailsComponent.prototype.onSubmit = function (formRef) {
        var _this = this;
        this.service.postUpdate(this.stepDetails).subscribe(function (res) {
            if (res.isSuccess) {
                if (!_this.isDisplayComponentInPopUp) {
                    _this.router.navigate(["/step/"]);
                }
                else {
                    _this.onEditComplete.emit(res.result);
                }
            }
        });
    };
    DetailsComponent.prototype.onCancel = function () {
        if (!this.isDisplayComponentInPopUp) {
            this.router.navigate(["/step/"]);
        }
        else {
            this.onCancelComplete.emit(true);
        }
    };
    __decorate([
        core_1.Input()
    ], DetailsComponent.prototype, "isDisplayComponentInPopUp", void 0);
    __decorate([
        core_1.Input()
    ], DetailsComponent.prototype, "stepId", null);
    __decorate([
        core_1.Output()
    ], DetailsComponent.prototype, "onEditComplete", void 0);
    __decorate([
        core_1.Output()
    ], DetailsComponent.prototype, "onCancelComplete", void 0);
    DetailsComponent = __decorate([
        core_1.Component({
            selector: 'details-step',
            templateUrl: 'app/body/Step/Details/details.component.html'
        })
    ], DetailsComponent);
    return DetailsComponent;
}());
exports.DetailsComponent = DetailsComponent;
