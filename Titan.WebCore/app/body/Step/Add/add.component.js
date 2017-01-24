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
var AddComponent = (function () {
    function AddComponent(service, router, dataService) {
        this.service = service;
        this.router = router;
        this.dataService = dataService;
        this.stepTypeDetailLabelText = "";
        this.onAddComplete = new core_1.EventEmitter();
        this.onCancelComplete = new core_1.EventEmitter();
    }
    AddComponent.prototype.ngOnInit = function () {
        this.stepDetails = new Object();
        this.getStepTypes();
        this.getStepFrequencies();
        this.getTestStages();
    };
    AddComponent.prototype.onStepTypeChange = function () {
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
    AddComponent.prototype.onRepeatChange = function (isRepeat) {
        if (isRepeat == true) {
            this.showRepeatDetails = true;
        }
        else {
            this.showRepeatDetails = false;
        }
    };
    AddComponent.prototype.onStepFrequencyChange = function () {
        if (this.stepDetails.stepFrequencyId.toUpperCase() == StepFrequencyEnum.Cycles || this.stepDetails.stepFrequencyId.toUpperCase() == StepFrequencyEnum.Test) {
            this.showTestOrCycle = true;
        }
        else {
            this.showTestOrCycle = false;
            this.stepDetails.CycleOrTestPercentages = null;
        }
    };
    AddComponent.prototype.getStepTypes = function () {
        var _this = this;
        //    testTypes
        this.service.getStepTypes().subscribe(function (response) {
            _this.stepTypes = new Array();
            if (response != null) {
                _this.stepTypes = _this.convertToArray(response.result, "Select Step Type");
            }
        });
    };
    AddComponent.prototype.getStepFrequencies = function () {
        var _this = this;
        this.service.getStepFrequencies().subscribe(function (response) {
            _this.stepFrequencies = new Array();
            if (response != null) {
                _this.stepFrequencies = _this.convertToArray(response.result, "Select Step Frequency");
            }
        });
    };
    AddComponent.prototype.convertToArray = function (data, initialLabel) {
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
    AddComponent.prototype.onSubmit = function (formRef) {
        var _this = this;
        this.service.postAdd(this.stepDetails).subscribe(function (res) {
            if (res.isSuccess) {
                if (!_this.isDisplayComponentInPopUp) {
                    _this.router.navigate(["/step/details/", res.result]);
                }
                else {
                    _this.onAddComplete.emit(res.result);
                }
            }
        });
    };
    AddComponent.prototype.getTestStages = function () {
        var _this = this;
        //    userRoles
        this.dataService.getTestStages().subscribe(function (response) {
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
    AddComponent.prototype.onCancel = function () {
        if (!this.isDisplayComponentInPopUp) {
            this.router.navigate(["/step/"]);
        }
        else {
            this.onCancelComplete.emit(true);
        }
    };
    __decorate([
        core_1.Input()
    ], AddComponent.prototype, "isDisplayComponentInPopUp", void 0);
    __decorate([
        core_1.Output()
    ], AddComponent.prototype, "onAddComplete", void 0);
    __decorate([
        core_1.Output()
    ], AddComponent.prototype, "onCancelComplete", void 0);
    AddComponent = __decorate([
        core_1.Component({
            selector: 'add-step',
            styleUrls: ['app/body/Step/Add/add.component.css'],
            templateUrl: 'app/body/Step/Add/add.component.html'
        })
    ], AddComponent);
    return AddComponent;
}());
exports.AddComponent = AddComponent;
