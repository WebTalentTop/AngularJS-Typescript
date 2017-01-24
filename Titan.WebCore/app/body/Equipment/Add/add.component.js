"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var AddComponent = (function () {
    //constructor(private dataService: PlatformService) {
    //        }
    function AddComponent(service, testfacilityservice, router) {
        this.service = service;
        this.testfacilityservice = testfacilityservice;
        this.router = router;
        this.isCronControlInitialized = false;
        this.msgs = [];
        this.testFacility = {
            name: '',
            address: {
                addressLine1: '',
                addressLine2: '',
                city: '',
                state: '',
                postalCode: '',
            } };
    }
    AddComponent.prototype.ngOnInit = function () {
        this.getEquipmentManufacturers();
        this.getEquipmentTypes();
        this.getTestFacilities();
        //  this.frequencyInit();
        // $("#selector").cron({
        //
        //     initial: "* * * * *",
        //     onChange: function () {
        //
        //         this.selectedCalibrationFrequency = $(this).cron("value");
        //         // $('#selector-val').text($(this).cron("value"));
        //     },
        //     effectOpts: {
        //         openEffect: "fade",
        //         openSpeed: "slow"
        //     },
        //     useGentleSelect: true
        // })
    };
    AddComponent.prototype.onEquipmentManufacturerChange = function (event) {
        var _this = this;
        if (event.value != null) {
            this.IsNewManufacturer = false;
        }
        this.selectedEquipmentManufacturerId = (event.value);
        // get all manufacturer information
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
    };
    //frequencyInit() {
    //    if (this.calibrationFrequencyCronExpression != null) {
    //        this.selectedMaintenanceFrequency = this.calibrationFrequencyCronExpression;
    //        this.isMaintenaceFrequencySelected = true;
    //        $("#selector").cron({
    //            initial: this.selectedMaintenanceFrequency,
    //            onChange: function () {
    //                this.selectedMaintenanceFrequency = $(this).cron("value");
    //            }, useGentleSelect: false
    //        });
    //        this.isCronControlInitialized = true;
    //    }
    //    else {
    //        this.selectedMaintenanceFrequency = "0 0 1 1 *";
    //        this.isMaintenaceFrequencySelected = false;
    //    }
    //}
    //showHideCronPicker() {
    //    console.log("--inside cronpicker show hide");
    //    debugger;
    //    if (this.isMaintenaceFrequencySelected) {
    //       // if (!this.isCronControlInitialized) {
    //            $("#selector").cron({
    //                initial: this.selectedMaintenanceFrequency,
    //                onChange: function () {
    //                    this.selectedMaintenanceFrequency = $(this).cron("value");
    //                }, useGentleSelect: false
    //            });
    //      //  }
    //    } else {
    //        // Hide the cron
    //    }
    //}
    AddComponent.prototype.getEquipmentManufacturers = function () {
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
    AddComponent.prototype.onEquipmentTypeChange = function (event) {
        this.selectedEquipmentTypeId = (event.value);
        //let frequencyvar: any = this.equipmentTypes.filter(eType => eType.value === event.value)[0].frequency;
        //if (frequencyvar != null && frequencyvar != "") {
        //    this.model.calibrationFrequencyCronExpression = "0 0 1 1 *";//event.frequency;
        //    this.frequencyInit();
        //}
        //   this.EquipmentSubType.calibrationform = (event);
    };
    AddComponent.prototype.onTestFacilityChange = function (event) {
        this.selectedTestFacilityId = (event.value);
        //   this.EquipmentSubType.calibrationform = (event);
    };
    AddComponent.prototype.getTestFacilities = function () {
        var _this = this;
        //    userRoles
        this.testfacilityservice.getTestFacilities().subscribe(function (response) {
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
    AddComponent.prototype.getEquipmentTypes = function () {
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
    AddComponent.prototype.AddManufacturer = function () {
        this.IsNewManufacturer = true;
        this.manufacturerName = '';
        this.manufacturerPhone = '';
        this.manufacturerFax = '';
        this.manufacturerWebsite = '';
    };
    AddComponent.prototype.onSubmit = function (formRef) {
        var _this = this;
        if (this.name == null || this.name == "") {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: 'Please enter Name', detail: '' });
            return null;
        }
        if (this.selectedEquipmentTypeId == null || this.selectedEquipmentTypeId == undefined) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: 'Please select Equipment Type', detail: '' });
            return null;
        }
        formRef.isDeleted = false;
        var cronexp;
        if (this.isMaintenaceFrequencySelected) {
            cronexp = $('#selector').cron("value");
        }
        else {
            cronexp = '';
        }
        if (!this.IsNewManufacturer) {
            this.manufacturerId = this.selectedEquipmentManufacturerId;
        }
        else {
            this.manufacturerId = '';
        }
        var model = {
            Name: formRef.name,
            ModelNumber: formRef.modelNumber,
            // LastCalibrationDate: formRef.lastCalibrationDate,
            // CalibrationFrequencyCronExpression: cronexp,
            EquipmentTypeId: this.selectedEquipmentTypeId,
            SerialNumber: formRef.serialNumber,
            PurchaseDate: formRef.purchaseDate,
            WarrantyExpiration: formRef.warrantyExpiration,
            Description: formRef.description,
            PurchasePrice: formRef.purchasePrice,
            TestFacilityId: this.selectedTestFacilityId,
            EquipmentManufacturerId: this.manufacturerId,
            ManufacturerName: this.manufacturerName,
            ManufacturerPhone: this.manufacturerPhone,
            ManufacturerFax: this.manufacturerFax,
            ManufacturerWebsite: this.manufacturerWebsite,
            ManufacturerEmail: this.manufacturerEmail,
            ManufacturerAddress: {
                addressLine1: this.manufacturerAddressLine1,
                addressLine2: this.manufacturerAddressLine2,
                city: this.manufacturerCity,
                state: this.manufacturerState,
                postalCode: this.manufacturerPostal,
            }
        };
        this.service.postAdd(model).subscribe(function (res) {
            if (res.isSuccess) {
                _this.router.navigate(['equipment/details/', res.result.id]);
            }
        });
    };
    AddComponent = __decorate([
        core_1.Component({
            selector: 'add-equipment',
            //styleUrls: ['app/body/Equipment/Add/add.component.css'],
            templateUrl: 'app/body/Equipment/Add/add.component.html'
        })
    ], AddComponent);
    return AddComponent;
}());
exports.AddComponent = AddComponent;
