import { Component } from '@angular/core';
import { ITitanCalibrationSelectItem } from '../../../shared/services/definitions/ITitanCalibrationSelectItem';

import { CheckboxModule, DataTableModule, GrowlModule, TabViewModule, MenuItem, ButtonModule, InputTextareaModule, InputTextModule, PanelModule, DropdownModule, Message, CalendarModule } from 'primeng/primeng';
import { SelectItem } from 'primeng/primeng';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { EquipmentService } from '../../../shared/services/Containers/EquipmentService/equipment.service';
import { TestFacilityService } from '../../../shared/services/Containers/TestFacilityService/testFacility.service';
import { BreadCrumbsService } from '../../../shared/services/breadCrumbs/breadCrumbs.service';

declare var cron: any;
@Component({
    selector: 'add-equipment',
    //styleUrls: ['app/body/Equipment/Add/add.component.css'],
    templateUrl: 'app/body/Equipment/Add/add.component.html'
})

export class AddComponent {
    // name:string;
    addressLine1: string;
    addressLine2: string;
    city: string;
    state: string;
    postalCode: string;
    name: any;
    added: any;
    equipmentTypeId: any;
    serialNumber: any;
    purchaseDate: any;
    warrantyExpirationDate: any;
    description: any;
    selectedCalibrationFrequency: any;
    purchasePrice: any;
    equipmentManufacturerId: any;
    testFacilityId: any;
    equipmentManufacturers: any;
    selectedEquipmentManufacturerId: any;
    calibrationFrequencyCronExpression: any;
    selectedMaintenanceFrequency: any;
    isMaintenaceFrequencySelected: boolean;
    equipmentTypes: ITitanCalibrationSelectItem[];
    selectedEquipmentTypeId: any;
    testFacilities: any;
    selectedTestFacilityId: any;
    manufacturerName: any;
    isCronControlInitialized: boolean = false;
    manufacturerPhone: any;
    msgs: Message[] = [];
    id: string;
    entityId: string = this.id;
    manufacturerWebsite: any;
    manufacturerEmail: any;

    manufacturerFax: any;
    manufacturerAddressLine1: any;
    manufacturerAddressLine2: any;
    manufacturerPostal: any;
    manufacturerState: any;
    manufacturerCity: any;
    IsNewManufacturer: boolean;
    manufacturerId: any;
    testFacility = {
        name: '',
        address: {
            addressLine1: '',
            addressLine2: '',
            city: '',
            state: '',
            postalCode: '',
        }
    };
    //constructor(private dataService: PlatformService) {
    //        }

    constructor(
        private breadCrumbsService: BreadCrumbsService,
        private service: EquipmentService,
        private route: ActivatedRoute,
        private testfacilityservice: TestFacilityService,
        private router: Router
    ) {
        this.route.queryParams.subscribe(params => this.id = params['id']); {
            this.entityId = this.id;

            let breadC = this.breadCrumbsService.getBreadCrumbs();
            let equipmentAddBreadCrumb = breadC.filter(filter =>
                filter.pageName === 'EquipmentAddPage')[0];

            this.breadcrumbs = [];
            this.breadcrumbs = equipmentAddBreadCrumb.items;

            this.breadcrumbsHome = { routerLink: ['/'] };

        }
    }

    breadcrumbs: MenuItem[];
    breadcrumbsHome: MenuItem;
    ngOnInit() {
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

    }

    onEquipmentManufacturerChange(event) {
        if (event.value != null) {
            this.IsNewManufacturer = false;
        }
        this.selectedEquipmentManufacturerId = (event.value);
        // get all manufacturer information
        this.service.getManufaturerDetailsById(this.selectedEquipmentManufacturerId).subscribe(res => {
            this.manufacturerPhone = res.result.phoneNumber;
            this.manufacturerFax = res.result.faxNumber;
            this.manufacturerWebsite = res.result.website;
            this.manufacturerName = res.result.name;
            this.manufacturerEmail = res.result.email;
            this.manufacturerAddressLine1 = res.result.addressLine1;
            this.manufacturerAddressLine2 = res.result.addressLine2;
            this.manufacturerPostal = res.result.postal;
            this.manufacturerCity = res.result.city;
            this.manufacturerState = res.result.state;

        });

    }
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
    getEquipmentManufacturers() {
        //    userRoles
        this.service.getEquipmentManufacturers().subscribe(response => {
            this.equipmentManufacturers = new Array();
            if (response != null) {
                var resultMap = new Array();
                resultMap.push({
                    label: "--Select--",
                    value: null
                });
                for (let template of response.$values) {
                    var temp = {
                        label: template.name,
                        value: template.id
                    }
                    resultMap.push(temp);
                }
                this.equipmentManufacturers = resultMap;
            }
        });
    }

    onEquipmentTypeChange(event) {
        this.selectedEquipmentTypeId = (event.value);
        //let frequencyvar: any = this.equipmentTypes.filter(eType => eType.value === event.value)[0].frequency;
        //if (frequencyvar != null && frequencyvar != "") {
        //    this.model.calibrationFrequencyCronExpression = "0 0 1 1 *";//event.frequency;
        //    this.frequencyInit();
        //}
        //   this.EquipmentSubType.calibrationform = (event);

    }
    onTestFacilityChange(event) {
        this.selectedTestFacilityId = (event.value);
        //   this.EquipmentSubType.calibrationform = (event);

    }
    getTestFacilities() {
        //    userRoles
        this.testfacilityservice.getTestFacilities().subscribe(response => {
            this.testFacilities = new Array();
            if (response != null) {
                var resultMap = new Array();
                resultMap.push({
                    label: "Select Test Facility",
                    value: null
                });
                for (let template of response) {
                    var temp = {
                        label: template.name,
                        value: template.id
                    }
                    resultMap.push(temp);
                }
                this.testFacilities = resultMap;
            }
        });
    }
    getEquipmentTypes() {
        //    userRoles
        this.service.getEquipmentTypes().subscribe(response => {

            this.equipmentTypes = [];
            if (response != null) {
                var list = new Array();
                this.equipmentTypes.push({
                    label: "--Select--",
                    value: null,
                    frequency: null
                });
                for (let template of response.$values) {
                    var temp = {
                        label: template.name + "(" + template.frequencyDescription + ")",
                        value: template.id,
                        frequency: template.frequency
                    }
                    this.equipmentTypes.push(temp);
                }
                this.equipmentTypes = this.equipmentTypes;
            }
        });
    }
    AddManufacturer() {
        this.IsNewManufacturer = true;
        this.manufacturerName = '';
        this.manufacturerPhone = '';
        this.manufacturerFax = '';
        this.manufacturerWebsite = '';

    }
    onSubmit(formRef) {

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
        let cronexp: any;
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
        let model = {
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

        //this.msgs = [];
        //this.msgs.push({ severity: 'success', summary: 'Comment saved', detail: '' });


        this.service.postAdd(model).subscribe(res => {
            if (res.isSuccess) {

                this.router.navigate(['equipment/details/', res.result.id]);
            }
            else
            {
                this.msgs = [];
        this.msgs.push({ severity: 'warn', summary: 'This Equipment exists', detail: '' });

}
        });
    }


}
