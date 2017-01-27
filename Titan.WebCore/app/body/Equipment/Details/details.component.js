"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var DetailsComponent = (function () {
    function DetailsComponent(route, testfacilityservice, service) {
        var _this = this;
        this.route = route;
        this.testfacilityservice = testfacilityservice;
        this.service = service;
        this.IsKeepOpen = false;
        this.displayAssignManufacturerDialog = false;
        this.selectedEquipmentTypeId = '';
        this.entityType = "TestFacility";
        this.entityId = this.id;
        this.filepath = "TestFacility";
        this.manufacturerName = '';
        this.manufacturerPhone = '';
        this.selectedEquipmentObj = {
            id: '',
            name: '',
            frequency: ''
        };
        this.selectedEquipmentTypeName = '';
        this.manufacturerWebsite = '';
        this.manufacturerEmail = '';
        this.manufacturerFax = '';
        this.manufacturerAddressLine1 = '';
        this.manufacturerAddressLine2 = '';
        this.manufacturerPostal = '';
        this.manufacturerState = '';
        this.manufacturerCity = '';
        this.model = {
            id: '',
            name: '',
            equipmentTypeId: '',
            calibrationFrequencyCronExpression: '',
            serialNumber: '',
            modelNumber: '',
            purchaseDate: '',
            warrantyExpiration: '',
            lastCalibrationDate: '',
            description: '',
            purchasePrice: '',
            testFacilityId: '',
            equipmentManufacturerId: '',
            manufacturerName: '',
            manufacturerPhone: '',
            manufacturerFax: '',
            manufacturerWebsite: '',
            manufacturerEmail: '',
            manufacturerAddress: {
                addressLine1: '',
                addressLine2: '',
                city: '',
                state: '',
                postalCode: ''
            }
        };
        this.uploadedFiles = [];
        this.route.params.subscribe(function (params) { return _this.id = params['id']; });
        this.equipmentId = this.id;
        this.model.id = this.id;
    }
    DetailsComponent.prototype.handleChange = function (event) {
    };
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getEquipmentManufacturers();
        this.getEquipmentTypes();
        this.getTestFacilities();
        this.GetLogCommentsByEquipmentId();
        this.service.getById(this.id)
            .subscribe(function (res) {
            _this.model = res.result;
            _this.selectedEquipmentManufacturerId = res.result.equipmentManufacturerId;
            //   this.selectedEquipmentTypeName = "Analog";
            _this.selectedTestFacilityId = res.result.testFacilityId;
            //    this.selectedEquipmentObj.id = res.result.equipmentTypeId;
            // this.selectedEquipmentObj.name = "Analog";
            //  this.selectedEquipmentObj.frequency = "generic"; //res.result.calibrationFrequencyCronExpression;
            _this.model.equipmentTypeId = res.result.equipmentTypeId;
            if (res.result.purchaseDate == null)
                _this.model.purchaseDate = null;
            else
                _this.model.purchaseDate = new Date(res.result.purchaseDate);
            if (res.result.warrantyExpiration == null)
                _this.model.warrantyExpiration = null;
            else
                _this.model.warrantyExpiration = new Date(res.result.warrantyExpiration);
            if (res.result.lastCalibrationDate == null)
                _this.model.lastCalibrationDate = null;
            else
                _this.model.lastCalibrationDate = new Date(res.result.lastCalibrationDate);
            _this.frequencyInit();
            _this.model.calibrationFrequencyCronExpression = res.result.calibrationFrequencyCronExpression;
            //if (res.testFacility.nextMaintenanceDate != null) {
            //    this.hasNextMaintenanceDate = true;
            //}
            if (_this.selectedEquipmentManufacturerId != "00000000-0000-0000-0000-000000000000") {
                _this.service.getManufaturerDetailsById(_this.selectedEquipmentManufacturerId).subscribe(function (res) {
                    _this.manufacturerPhone = res.result.phoneNumber;
                    _this.manufacturerFax = res.result.faxNumber;
                    _this.manufacturerWebsite = res.result.website;
                    _this.manufacturerName = res.result.name;
                    _this.manufacturerEmail = res.result.email;
                    _this.manufacturerAddressLine1 = res.result.addressLine1;
                    _this.manufacturerAddressLine2 = res.result.addressLine2;
                    _this.manufacturerPostal = res.result.postal;
                    _this.manufacturerCity = res.result.city;
                    _this.manufacturerState = res.result.state;
                });
            }
            else {
                _this.selectedEquipmentManufacturerId = null;
            }
            //this.formConfiguration = res.formConfiguration;
            //this.formObject = res.formObject;
            //$("#selector").cron({
            //    initial: "* * * * *",
            //    onChange: function () {
            //        this.selectedCalibrationFrequency = $(this).cron("value");
            //        // $('#selector-val').text($(this).cron("value"));
            //    },
            //    effectOpts: {
            //        openEffect: "fade",
            //        openSpeed: "slow"
            //    },
            //     useGentleSelect: true
            //})
        });
        // this.dataService.getEquipmentsByIdusing(this.id)
        //  .subscribe(res =>
        //{
        //  this.TestFacilityEquipments = res;
        // });
    };
    DetailsComponent.prototype.frequencyInit = function () {
        if (this.model.calibrationFrequencyCronExpression != null) {
            this.selectedMaintenanceFrequency = this.model.calibrationFrequencyCronExpression;
            this.isMaintenaceFrequencySelected = true;
            $("#selector").cron({
                initial: this.selectedMaintenanceFrequency,
                onChange: function () {
                    this.selectedMaintenanceFrequency = $(this).cron("value");
                }, useGentleSelect: false
            });
            this.isCronControlInitialized = true;
        }
        else {
            this.selectedMaintenanceFrequency = "0 0 1 1 *";
            this.isMaintenaceFrequencySelected = false;
        }
    };
    DetailsComponent.prototype.showHideCronPicker = function () {
        console.log("--inside cronpicker show hide");
        if (this.isMaintenaceFrequencySelected) {
            if (!this.isCronControlInitialized) {
                $("#selector").cron({
                    initial: this.selectedMaintenanceFrequency,
                    onChange: function () {
                        this.selectedMaintenanceFrequency = $(this).cron("value");
                    }, useGentleSelect: false
                });
            }
        }
        else {
        }
    };
    DetailsComponent.prototype.displayAssignManufacturerDialogBox = function () {
        this.displayAssignManufacturerDialog = true;
        this.selectedEquipmentManufacturerId = null;
        this.IsNewManufacturer = true;
        this.manufacturerName = '';
        this.manufacturerPhone = '';
        this.manufacturerFax = '';
        this.manufacturerWebsite = '';
        this.manufacturerEmail = '';
        this.manufacturerAddressLine1 = '';
        this.manufacturerAddressLine2 = '';
        this.manufacturerCity = '';
        this.manufacturerPostal = '';
        this.manufacturerState = '';
        this.manufacturerCity = '';
    };
    DetailsComponent.prototype.GetLogCommentsByEquipmentId = function () {
        var _this = this;
        this.service.getLogComments(this.id)
            .subscribe(function (res) {
            _this.equipmentLogComments = res;
        });
    };
    DetailsComponent.prototype.onMaintenanceFrequencyChange = function (event) {
        this.selectedMaintenanceFrequency = (event.value);
    };
    DetailsComponent.prototype.AddLogComment = function () {
        var _this = this;
        if (this.comment == null || this.comment == '') {
            this.msgs = [];
            this.msgs.push({ severity: 'warn', summary: 'Please write any comment', detail: '' });
            return null;
        }
        this.service.PostLogComments(this.id, JSON.stringify(this.comment)).subscribe(function (filteredList) {
            _this.service.getLogComments(_this.id)
                .subscribe(function (res) {
                _this.equipmentLogComments = res;
            });
        });
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Comment saved', detail: '' });
    };
    DetailsComponent.prototype.displayClear = function () {
        this.displayAssignManufacturerDialog = true;
        this.selectedEquipmentManufacturerId = null;
        this.IsNewManufacturer = true;
        this.manufacturerName = '';
        this.manufacturerPhone = '';
        this.manufacturerFax = '';
        this.manufacturerWebsite = '';
        this.manufacturerEmail = '';
        this.manufacturerAddressLine1 = '';
        this.manufacturerAddressLine2 = '';
        this.manufacturerCity = '';
        this.manufacturerPostal = '';
        this.manufacturerState = '';
        this.manufacturerCity = '';
    };
    DetailsComponent.prototype.onAddManufacturer = function () {
        var _this = this;
        if (this.manufacturerName == null || this.manufacturerName == "") {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: 'Please enter Manufacturer Name', detail: '' });
            return null;
        }
        var equipmentmanufacturermodel = {
            EquipmentId: this.id,
            EquipmentManufacturerDetails: {
                Name: this.manufacturerName,
                PhoneNumber: this.manufacturerPhone,
                FaxNumber: this.manufacturerFax,
                Website: this.manufacturerWebsite,
                Email: this.manufacturerEmail
            },
            ManufacturerAddress: {
                addressLine1: this.manufacturerAddressLine1,
                addressLine2: this.manufacturerAddressLine2,
                city: this.manufacturerCity,
                state: this.manufacturerState,
                postalCode: this.manufacturerPostal,
            }
        };
        this.service.postManufacturerAdd(equipmentmanufacturermodel).subscribe(function (res) {
            if (res.isSuccess) {
                _this.getEquipmentManufacturers();
                _this.selectedEquipmentManufacturerId = res.result.equipmentManufacturerDetails.id;
                _this.displayAssignManufacturerDialog = false;
            }
        });
    };
    DetailsComponent.prototype.onEquipmentManufacturerChange = function (event) {
        var _this = this;
        this.selectedEquipmentManufacturerId = (event.value);
        this.service.getManufaturerDetailsById(this.selectedEquipmentManufacturerId).subscribe(function (res) {
            _this.manufacturerPhone = res.result.phoneNumber;
            _this.manufacturerFax = res.result.faxNumber;
            _this.manufacturerWebsite = res.result.website;
            _this.manufacturerName = res.result.name;
            _this.manufacturerEmail = res.result.email;
            _this.manufacturerAddressLine1 = res.result.addressLine1;
            _this.manufacturerAddressLine2 = res.result.addressLine2;
            _this.manufacturerPostal = res.result.postal;
            _this.manufacturerCity = res.result.city;
            _this.manufacturerState = res.result.state;
        });
        //   this.EquipmentSubType.calibrationform = (event);
    };
    DetailsComponent.prototype.getEquipmentManufacturers = function () {
        var _this = this;
        //    userRoles
        this.service.getEquipmentManufacturers().subscribe(function (response) {

            _this.equipmentManufacturers = new Array();
            if (response != null) {
                var resultMap = new Array();
                resultMap.push({
                    label: "--Select--",
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
                _this.equipmentManufacturers = resultMap;
            }
        });
    };
    DetailsComponent.prototype.onEquipmentTypeChange = function (event) {
        this.selectedEquipmentTypeId = (event.value);
        var frequencyvar = this.equipmentTypes.filter(function (eType) { return eType.value === event.value; })[0].frequency;
        if (frequencyvar != null && frequencyvar != "") {
            this.model.calibrationFrequencyCronExpression = "0 0 1 1 *"; //event.frequency;
            this.frequencyInit();
        }
        // this.selectedCalibrationFrequency = event.
        //   this.EquipmentSubType.calibrationform = (event);
    };
    DetailsComponent.prototype.onTestFacilityChange = function (event) {
        this.selectedTestFacilityId = (event.value);
        //   this.EquipmentSubType.calibrationform = (event);
    };
    DetailsComponent.prototype.getTestFacilities = function () {
        var _this = this;
        //    userRoles
        this.testfacilityservice.getTestFacilities().subscribe(function (response) {
            debugger;
            _this.testFacilities = new Array();
            if (response != null) {
                var resultMap = new Array();
                resultMap.push({
                    label: "Select Test Facility",
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
                _this.testFacilities = resultMap;
            }
        });
    };
    DetailsComponent.prototype.getEquipmentTypes = function () {
        var _this = this;
        //    userRoles
        this.service.getEquipmentTypes().subscribe(function (response) {
            _this.equipmentTypes = [];
            if (response != null) {
                var list = new Array();
                _this.equipmentTypes.push({
                    label: "--Select--",
                    value: null,
                    frequency: null
                });
                for (var _i = 0, _a = response.$values; _i < _a.length; _i++) {
                    var template = _a[_i];
                    var temp = {
                        label: template.name + "(" + template.frequency + ")",
                        value: template.id,
                        frequency: template.frequency
                    };
                    _this.equipmentTypes.push(temp);
                }
                _this.equipmentTypes = _this.equipmentTypes;
            }
        });
    };
    DetailsComponent.prototype.onEquipmentSave = function (formRef) {
        var _this = this;
        if (formRef.name == null || formRef.name == "") {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: 'Please enter Name', detail: '' });
            return null;
        }
        if (this.selectedEquipmentTypeId == null || this.selectedEquipmentTypeId == undefined) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: 'Please select Equipment Type', detail: '' });
            return null;
        }
        //  formRef.isDeleted = false;
        var cronexp;
        if (this.isMaintenaceFrequencySelected) {
            cronexp = $('#selector').cron("value");
        }
        else {
            cronexp = '';
        }
        var modeldata = {
            Id: this.id,
            Name: formRef.name,
            ModelNumber: formRef.modelNumber,
            CalibrationFrequencyCronExpression: cronexp,
            LastCalibrationDate: formRef.lastCalibrationDate,
            EquipmentTypeId: this.selectedEquipmentTypeId,
            SerialNumber: formRef.serialNumber,
            PurchaseDate: formRef.purchaseDate,
            WarrantyExpiration: formRef.warrantyExpiration,
            Description: formRef.description,
            PurchasePrice: formRef.purchasePrice,
            TestFacilityId: this.selectedTestFacilityId,
            EquipmentManufacturerId: this.selectedEquipmentManufacturerId
        };
        //formData.id = this.id;
        //formData.name = formRef.name;
        //formData.address.id = this.addressid;
        //formData.address.addressLine1 = formRef.addressLine1;
        //formData.address.addressLine2 = formRef.addressLine2;
        //formData.address.city = formRef.city;
        //formData.address.state = formRef.state;
        //formData.address.postalCode = formRef.postalCode;
        //formData.locale = "en-us";
        this.service.postUpdate(modeldata).subscribe(function (res) {
            if (res.isSuccess) {
                _this.msgs = [];
                _this.msgs.push({ severity: 'info', summary: 'saved', detail: '' });
            }
        });
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'saved', detail: '' });
    };
    DetailsComponent = __decorate([
        core_1.Component({
            selector: 'details-equipment',
            templateUrl: 'app/body/Equipment/Details/details.component.html'
        })
    ], DetailsComponent);
    return DetailsComponent;
}());
exports.DetailsComponent = DetailsComponent;
