"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var AddComponent = (function () {
    function AddComponent(route, dataService, router) {
        var _this = this;
        this.route = route;
        this.dataService = dataService;
        this.router = router;
        this.EquipmentSubType = new PrimeEquipmentSubType('', '', '', '', '', '', '');
        this.CalibrationForm = new PrimeCalibrationForm('', '', '', '');
        this.EquipmentsubTypes = [];
        this.CalibrationForms = [];
        this.entityType = '';
        this.entityId = '';
        this.emptyguid = "00000000-0000-0000-0000-000000000000";
        this.selectedCalibration = '';
        this.selectedstring = null;
        this.model = {
            id: '',
            // isdeleted: '0',
            parentId: '',
            description: '',
            name: ''
        };
        this.uploadedFiles = [];
        this.CalibrationForms = [];
        this.CalibrationForms.push({ id: '1', name: 'Audi', description: 'Audi', calibrationFrequencyCronExpression: '' });
        this.CalibrationForms.push({ id: '2', name: 'BMW', description: 'BMW', calibrationFrequencyCronExpression: '' });
        this.CalibrationForms.push({ id: '3', name: 'Fiat', description: 'Fiat', calibrationFrequencyCronExpression: '' });
        this.CalibrationForms.push({ id: '4', name: 'Ford', description: 'Ford', calibrationFrequencyCronExpression: '' });
        this.CalibrationForms.push({ id: '5', name: 'Honda', description: 'Honda', calibrationFrequencyCronExpression: '' });
        this.CalibrationForms.push({ id: '6', name: 'Jaguar', description: 'Jaguar', calibrationFrequencyCronExpression: '' });
        this.CalibrationForms.push({ id: '7', name: 'Mercedes', description: 'Mercedes', calibrationFrequencyCronExpression: '' });
        this.CalibrationForms.push({ id: '8', name: 'Renault', description: 'Renault', calibrationFrequencyCronExpression: '' });
        this.CalibrationForms.push({ id: '9', name: 'VW', description: 'VW', calibrationFrequencyCronExpression: '' });
        this.CalibrationForms.push({ id: '10', name: 'Volvo', description: 'Volvo', calibrationFrequencyCronExpression: '' });
        // this.selectedCalibration="BMW";
        this.route.params.subscribe(function (params) { return _this.id = params['id']; });
        this.model.id = this.id;
    }
    AddComponent.prototype.handleChange = function (event) {
    };
    AddComponent.prototype.ngOnInit = function () {
        //this.dataService.getById(this.id)
        //    .subscribe(res => {
        //        //this.formConfiguration = res.formConfiguration;
        //        //this.formObject = res.formObject;
        //        this.model = res;
        //        this.model.id = res.id;
        //        this.model.parentId = res.parentId;
        //        this.model.name = res.name;
        //        this.model.description = res.description;
        //        this.dataService.getSubTypesById(this.model.id)
        //            .subscribe(result => {
        //                this.EquipmentsubTypes = result.$values;
        //            });
        //    });
        //   this.EquipmentSubType = { name:'', description: '', calibrationform: '', frequency: ''}
    };
    AddComponent.prototype.onSubmit = function (formRef) {
        var _this = this;
        formRef.isDeleted = false;
        //let cronexp: any;
        //if (this.isMaintenaceFrequencySelected) {
        //    cronexp = $('#selector').cron("value");
        //}
        //else {
        //    cronexp = '';
        //}
        //if (!this.IsNewManufacturer) {
        //    this.manufacturerId = this.selectedEquipmentManufacturerId;
        //}
        //else {
        //    this.manufacturerId = '';
        //}
        var model = {
            Name: formRef.name,
            ParentId: null,
            Description: formRef.description
        };
        this.dataService.postAdd(model).subscribe(function (res) {
            if (res.isSuccess) {
                _this.router.navigate(['equipmenttype/details/', res.result.id]);
            }
        });
    };
    AddComponent.prototype.onEdit = function () {
        var _this = this;
        this.dataService.postUpdate(this.model)
            .subscribe(function (res) {
            //this.model = res;
            //this.model.name = res.name;
            //this.model.description = res.description;
            //this.msgs = [];
            //this.msgs.push({ severity: 'info', summary: 'File Uploaded', detail: '' });
        });
        this.EquipmentsubTypes.forEach(function (subtype) {
            // if (subtype.isdeleted =='' )
            _this.dataService.postAdd(subtype)
                .subscribe(function (res1) {
            });
        });
        this.EquipmentsubTypes.forEach(function (subtype) {
            _this.dataService.postUpdate(subtype)
                .subscribe(function (res2) {
            });
        });
    };
    AddComponent.prototype.showDialogToAdd = function () {
        this.newsubType = true;
        this.selectedCalibration = null;
        this.EquipmentSubType = new PrimeEquipmentSubType('', '', '', '', '', '', this.id);
        this.displayDialog = true;
        // this.IsSubType= true;
    };
    AddComponent.prototype.showDialogToAddForm = function () {
        this.displayDialogForm = true;
        this.selectedCalibration = null;
        this.CalibrationForm = new PrimeCalibrationForm('', '', '', '');
        //this.IsSubType= false;
    };
    AddComponent.prototype.ok = function () {
        this.CalibrationForms.push(this.CalibrationForm);
        this.EquipmentSubType.calibrationform = this.CalibrationForm.name;
        this.selectedCalibration = this.CalibrationForm.name;
        this.displayDialogForm = false;
    };
    AddComponent.prototype.cancel = function () {
        this.displayDialogForm = false;
    };
    AddComponent.prototype.save = function () {
        //   this.EquipmentSubType = EquipmentSubType.name;
        if (this.newsubType)
            this.EquipmentsubTypes.push(this.EquipmentSubType);
        else
            this.EquipmentsubTypes[this.findSelectedCarIndex()] = this.EquipmentSubType;
        this.EquipmentSubType = null;
        this.displayDialog = false;
    };
    AddComponent.prototype.onCalibrationFormChange = function (event) {
        //   this.selectedCalibration=(event.target.selectedOptions[0].innerText);
        // this.EquipmentSubType.calibrationform= (event.target.selectedOptions[0].innerText);
        this.selectedCalibration = (event);
        this.EquipmentSubType.calibrationform = (event);
    };
    AddComponent.prototype.delete = function () {
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
    AddComponent.prototype.onRowSelect = function (event) {
        this.newsubType = false;
        this.EquipmentSubType = this.clonesubType(event.data);
        this.EquipmentSubType.calibrationform = event.data.calibrationform;
        this.selectedCalibration = event.data.calibrationform;
        this.displayDialog = true;
    };
    AddComponent.prototype.clonesubType = function (sub) {
        var newType = new PrimeEquipmentSubType(sub.id, sub.isdeleted, sub.name, sub.description, sub.calibrationform, sub.frequency, sub.parentId);
        for (var prop in sub) {
            newType[prop] = sub[prop];
        }
        return newType;
    };
    AddComponent.prototype.findSelectedCarIndex = function () {
        return this.EquipmentsubTypes.indexOf(this.selectedsubType);
    };
    AddComponent = __decorate([
        core_1.Component({
            selector: 'add-equipmenttype',
            templateUrl: 'app/body/equipmenttype/Add/add.component.html'
        })
    ], AddComponent);
    return AddComponent;
}());
exports.AddComponent = AddComponent;
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
