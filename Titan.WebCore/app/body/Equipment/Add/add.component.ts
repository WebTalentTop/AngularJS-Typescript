import { Component } from '@angular/core';
import { DataTableModule,TabViewModule, ButtonModule, InputTextareaModule,InputTextModule, PanelModule, DropdownModule } from 'primeng/primeng';
import { SelectItem } from 'primeng/primeng';
import { Router } from '@angular/router';

import { EquipmentService } from '../../../shared/services/equipment.service';
import { TestFacilityService } from '../../../shared/services/testfacility.service';
declare var cron: any;
@Component({
    selector: 'add-equipment',
    //styleUrls: ['app/body/Equipment/Add/add.component.css'], 
    templateUrl: 'app/body/Equipment/Add/add.component.html'
})

export class AddComponent {
   // name:string;
    addressLine1:string;
    addressLine2:string;
    city:string;
    state:string;
    postalCode: string;
    name: any;
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
    equipmentTypes: any;
    selectedEquipmentTypeId: any;
    testFacilities: any;
    selectedTestFacilityId: any;
    manufacturerName: any;

    manufacturerPhone: any;

    manufacturerWebsite: any;

    manufacturerFax: any;

    IsNewManufacturer: boolean;
    manufacturerId: any;
    testFacility = {
                    name:'', 
                    address:{
                        addressLine1:'',
                        addressLine2:'',
                        city:'',
                        state:'',
                        postalCode:'',
                    }};
    //constructor(private dataService: PlatformService) {
    //        }

    constructor(private service: EquipmentService, private testfacilityservice: TestFacilityService, private router: Router) {

    }

    ngOnInit() {
        this.getEquipmentManufacturers();
        this.getEquipmentTypes();
        this.getTestFacilities();
        $("#selector").cron({

            initial: "* * * * *",
            onChange: function () {

                this.selectedCalibrationFrequency = $(this).cron("value");
                // $('#selector-val').text($(this).cron("value"));
            },
            effectOpts: {
                openEffect: "fade",
                openSpeed: "slow"
            },
            useGentleSelect: true
        })

    }
   
    onEquipmentManufacturerChange(event) {
        if (event.value != null) {
            this.IsNewManufacturer = false;
        }
        this.selectedEquipmentManufacturerId = (event.value);
        //   this.EquipmentSubType.calibrationform = (event);

    }
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
            this.equipmentTypes = new Array();
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
                this.equipmentTypes = resultMap;
            }
        });
    }
    AddManufacturer()
    {
        this.IsNewManufacturer = true;
        this.manufacturerName = '';
        this.manufacturerPhone = '';
        this.manufacturerFax = '';
        this.manufacturerWebsite = '';

    }
    onSubmit(formRef) {
        formRef.isDeleted = false;
        if (!this.IsNewManufacturer) {
            this.manufacturerId = this.selectedEquipmentManufacturerId;
        }
        else
        {
            this.manufacturerId = '';
        }
        let model = {
            Name: formRef.name,
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
             ManufacturerWebsite: this.manufacturerWebsite

        };

        this.service.postAdd(model).subscribe(res => { 
            if (res.isSuccess) {

                this.router.navigate(["./equipment"], { queryParams: { page: 1 } });
            }
        });
    }
   

}
