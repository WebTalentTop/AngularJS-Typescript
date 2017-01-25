//import {bootstrap} from '@angular/platform-browser-dynamic';
//import {AppComponent} from '../../../../app/app.component'
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var DetailsComponent = (function () {
    function DetailsComponent(route, dataService, entityIdentifierService, formSchemaCategoryService, ls) {
        var _this = this;
        this.route = route;
        this.dataService = dataService;
        this.entityIdentifierService = entityIdentifierService;
        this.formSchemaCategoryService = formSchemaCategoryService;
        this.ls = ls;
        this.entityIdentifierName = "Equipment";
        this.EquipmentSubType = new PrimeEquipmentSubType('', '', '', '', '', '', '');
        this.CalibrationForm = new PrimeCalibrationForm('', '', '', '');
        this.EquipmentsubTypes = [];
        this.CalibrationForms = [];
        this.cronInitialized = false;
        this.entityType = '';
        this.entityId = '';
        this.filepath = "TestFacility";
        this.emptyguid = "00000000-0000-0000-0000-000000000000";
        this.selectedCalibration = '';
        this.selectedstring = null;
        this.model = {
            id: '',
            // isdeleted: '0',
            parentId: '',
            description: '',
            name: '',
            frequency: ''
        };
        this.uploadedFiles = [];
        this.ls.setShow(true);
        //region Default values for Calibration Form Dropdown. This is going to be deleted
        /*this.CalibrationForms = [];

        this.CalibrationForms.push({
            id: '1',
            name: 'Audi',
            description: 'Audi',
            calibrationFrequencyCronExpression: ''
        });
        this.CalibrationForms.push({ id: '1', name: 'Audi', description: 'Audi', calibrationFrequencyCronExpression: '' });
        this.CalibrationForms.push({ id: '2', name: 'BMW', description: 'BMW', calibrationFrequencyCronExpression: '' });
        this.CalibrationForms.push({ id: '3', name: 'Fiat', description: 'Fiat', calibrationFrequencyCronExpression: '' });
        this.CalibrationForms.push({ id: '4', name: 'Ford', description: 'Ford', calibrationFrequencyCronExpression: ''});
        this.CalibrationForms.push({ id: '5', name: 'Honda', description: 'Honda', calibrationFrequencyCronExpression: '' });
        this.CalibrationForms.push({ id: '6', name: 'Jaguar', description: 'Jaguar', calibrationFrequencyCronExpression: '' });
        this.CalibrationForms.push({ id: '7', name: 'Mercedes', description: 'Mercedes', calibrationFrequencyCronExpression: '' });
        this.CalibrationForms.push({ id: '8', name: 'Renault', description: 'Renault', calibrationFrequencyCronExpression: '' });
        this.CalibrationForms.push({ id: '9', name: 'VW', description: 'VW', calibrationFrequencyCronExpression: '' });
        this.CalibrationForms.push({ id: '10', name: 'Volvo', description: 'Volvo', calibrationFrequencyCronExpression: ''});
        */
        this.route.params.subscribe(function (params) { return _this.id = params['id']; });
        this.model.id = this.id;
    }
    DetailsComponent.prototype.handleChange = function (event) {
    };
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.entityIdentifierService.getByNameForForms(this.entityIdentifierName)
            .subscribe(function (res) {
            _this.ls.logConsole("EntityIdentifier Data By Name ----------", res);
        });
        this.dataService.getById(this.id)
            .subscribe(function (res) {
            //this.formConfiguration = res.formConfiguration;
            //this.formObject = res.formObject;
            _this.model = res;
            _this.model.id = res.id;
            _this.model.parentId = res.parentId;
            _this.model.name = res.name;
            _this.model.description = res.description;
            _this.frequencyInit();
            _this.onCronInit();
            _this.dataService.getSubTypesById(_this.model.id)
                .subscribe(function (result) {
                _this.EquipmentsubTypes = result.$values;
            });
        });
        //   this.EquipmentSubType = { name:'', description: '', calibrationform: '', frequency: ''}
    };
    DetailsComponent.prototype.onEdit = function () {
        var _this = this;
        var modelbody = {
            id: this.model.id,
            parentId: null,
            description: this.model.description,
            name: this.model.name,
            frequency: this.selectedMaintenanceFrequency
        };
        this.EquipmentsubTypes.forEach(function (subtype) {
            // if (subtype.isdeleted =='' )
            _this.dataService.postAdd(subtype)
                .subscribe(function (res1) {
                _this.EquipmentsubTypes.forEach(function (subtype) {
                    _this.dataService.postUpdate(subtype)
                        .subscribe(function (res2) {
                        _this.dataService.postUpdate(modelbody)
                            .subscribe(function (res) {
                            //this.model = res;
                            //this.model.name = res.name;
                            //this.model.description = res.description;
                            //this.msgs = [];
                            //this.msgs.push({ severity: 'info', summary: 'File Uploaded', detail: '' });
                        });
                    });
                });
            });
        });
    };
    DetailsComponent.prototype.frequencyInit = function () {
        var options = {
            initial: this.selectedMaintenanceFrequency,
            onChange: function () {
                this.selectedMaintenanceFrequency = $(this).cron("value");
            }
        };
        if (this.model.frequency != null && this.model.frequency != "") {
            this.selectedMaintenanceFrequency = this.model.frequency;
            $("#selector").cron(options);
        }
        else {
            options.initial = this.selectedMaintenanceFrequency = "0 0 1 1 *";
            $("#selector").cron(options);
        }
    };
    DetailsComponent.prototype.showDialogToAdd = function () {
        this.newsubType = true;
        this.selectedCalibration = null;
        this.EquipmentSubType = new PrimeEquipmentSubType('', '', '', '', '', '', this.id);
        this.displayDialog = true;
        this.selectedSubTypeMaintenanceFrequency = "0 0 1 1 *";
        if (this.EquipmentSubType.frequency != null && this.EquipmentSubType.frequency != "" && !this.cronInitialized) {
            this.cronInitialized = true;
        }
        else {
            if (this.model.frequency != null && this.model.frequency != "" && !this.cronInitialized) {
                this.cronInitialized = true;
            }
            else {
                this.cronInitialized = true;
                this.onCronAdd();
                // $("#add").add("")
                $("#cronselector").cron({
                    initial: this.selectedSubTypeMaintenanceFrequency,
                });
            }
        }
        // this.IsSubType= true;
    };
    DetailsComponent.prototype.onCronAdd = function () {
        $("body").append("#cronselector");
        //  $("#cronselector").u
        //  $("#cronselector").remove();
    };
    DetailsComponent.prototype.showDialogToAddForm = function () {
        this.displayDialogForm = true;
        this.selectedCalibration = null;
        this.CalibrationForm = new PrimeCalibrationForm('', '', '', '');
        //this.IsSubType= false;
    };
    DetailsComponent.prototype.ok = function () {
        this.CalibrationForms.push(this.CalibrationForm);
        this.EquipmentSubType.calibrationform = this.CalibrationForm.name;
        this.selectedCalibration = this.CalibrationForm.name;
        this.displayDialogForm = false;
    };
    DetailsComponent.prototype.cancel = function () {
        this.displayDialogForm = false;
    };
    DetailsComponent.prototype.save = function () {
        //   this.EquipmentSubType = EquipmentSubType.name;
        if (this.newsubType) {
            this.EquipmentSubType.frequency = this.selectedSubTypeMaintenanceFrequency;
            this.EquipmentsubTypes.push(this.EquipmentSubType);
        }
        else
            this.EquipmentsubTypes[this.findSelectedCarIndex()] = this.EquipmentSubType;
        this.EquipmentSubType = null;
        this.displayDialog = false;
    };
    DetailsComponent.prototype.onCalibrationFormChange = function (event) {
        //   this.selectedCalibration=(event.target.selectedOptions[0].innerText);
        // this.EquipmentSubType.calibrationform= (event.target.selectedOptions[0].innerText);
        this.selectedCalibration = (event);
        this.EquipmentSubType.calibrationform = (event);
    };
    DetailsComponent.prototype.delete = function () {
        var _this = this;
        this.EquipmentsubTypes.splice(this.findSelectedCarIndex(), 1);
        this.dataService.DeleteEquipmentsById(this.selectedsubType.id)
            .subscribe(function (res) {
            // call get method to refresh grid
            _this.dataService.getSubTypesById(_this.model.id)
                .subscribe(function (result) {
                _this.EquipmentsubTypes = result.$values;
            });
        });
        // this.EquipmentSubType = null;
        this.displayDialog = false;
    };
    DetailsComponent.prototype.onCronInit = function () {
        if (this.EquipmentSubType.frequency != null && this.EquipmentSubType.frequency != "") {
            this.selectedSubTypeMaintenanceFrequency = this.EquipmentSubType.frequency;
            $("#selector").cron({
                initial: this.selectedSubTypeMaintenanceFrequency,
                onChange: function () {
                    this.selectedMaintenanceFrequency = $(this).cron("value");
                }, useGentleSelect: false
            });
        }
        else {
            this.selectedSubTypeMaintenanceFrequency = "0 0 1 1 *";
            $("#selector").cron({
                initial: this.selectedSubTypeMaintenanceFrequency,
                onChange: function () {
                    this.selectedSubTypeMaintenanceFrequency = $(this).cron("value");
                }, useGentleSelect: false
            });
        }
    };
    DetailsComponent.prototype.onRowSelect = function (event) {
        this.newsubType = false;
        this.selectedSubTypeMaintenanceFrequency = "0 0 1 1 *";
        this.EquipmentSubType = this.clonesubType(event.data);
        //   if (!this.cronInitialized) {
        //     this.cronInitialized = true;
        if (this.EquipmentSubType.frequency != null && this.EquipmentSubType.frequency != "") {
            this.EquipmentSubType.frequency = this.EquipmentSubType.frequency;
            this.selectedSubTypeMaintenanceFrequency = this.EquipmentSubType.frequency;
        }
        else {
            // this.cronInitialized = false;
            this.EquipmentSubType.frequency = "0 0 1 1 *";
            if (!this.cronInitialized) {
                this.cronInitialized = true;
            }
        }
        //}
        //else
        //{
        //    this.selectedSubTypeMaintenanceFrequency = "0 0 1 1 *";
        //    this.EquipmentSubType.frequency = "0 0 1 1 *";
        //}
        //if (this.EquipmentSubType.frequency != null && this.EquipmentSubType.frequency != "" && !this.cronInitialized) {
        //    this.cronInitialized = true;
        //    this.onCronInit(this.EquipmentSubType.frequency);
        //    //$("#cronselector").cron({
        //    //    initial: this.EquipmentSubType.frequency,
        //    //    onChange: function () {
        //    //        //this.EquipmentSubType.frequency = $(this).cron("value");
        //    //        this.selectedSubTypeMaintenanceFrequency = $(this).cron("value");
        //    //    }, useGentleSelect: false
        //    //});
        //}
        //else
        //{
        //    this.cronInitialized = true;
        //    this.selectedSubTypeMaintenanceFrequency = "0 0 1 1 *";
        //    this.onCronInit(this.selectedSubTypeMaintenanceFrequency);
        //    //$("#cronselector").cron({
        //    //    initial: this.selectedSubTypeMaintenanceFrequency,
        //    //    onChange: function () {
        //    ////this.EquipmentSubType.frequency = $(this).cron("value");
        //    //                this.selectedSubTypeMaintenanceFrequency = $(this).cron("value");
        //    //    }, useGentleSelect: false
        //    //});
        //}
        //if ($("#cronselector") == undefined)
        //{  }
        this.EquipmentSubType.calibrationform = event.data.calibrationform;
        this.selectedCalibration = event.data.calibrationform;
        this.displayDialog = true;
    };
    DetailsComponent.prototype.clonesubType = function (sub) {
        var newType = new PrimeEquipmentSubType(sub.id, sub.isdeleted, sub.name, sub.description, sub.calibrationform, sub.frequency, sub.parentId);
        for (var prop in sub) {
            newType[prop] = sub[prop];
        }
        return newType;
    };
    DetailsComponent.prototype.findSelectedCarIndex = function () {
        return this.EquipmentsubTypes.indexOf(this.selectedsubType);
    };
    DetailsComponent = __decorate([
        core_1.Component({
            selector: 'details-testfacility',
            templateUrl: 'app/body/equipmenttype/Details/details.component.html'
        })
    ], DetailsComponent);
    return DetailsComponent;
}());
exports.DetailsComponent = DetailsComponent;
var PrimeEquipmentSubType = (function () {
    function PrimeEquipmentSubType(id, isdeleted, name, description, calibrationform, frequency, parentId) {
        this.id = id;
        this.isdeleted = isdeleted;
        this.name = name;
        this.description = description;
        this.calibrationform = calibrationform;
        this.frequency = frequency;
        this.parentId = parentId;
    }
    return PrimeEquipmentSubType;
}());
var PrimeCalibrationForm = (function () {
    function PrimeCalibrationForm(id, name, description, calibrationFrequencyCronExpression) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.calibrationFrequencyCronExpression = calibrationFrequencyCronExpression;
    }
    return PrimeCalibrationForm;
}());
