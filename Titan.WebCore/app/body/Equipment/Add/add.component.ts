import { Component } from '@angular/core';
import { DataTableModule,TabViewModule, ButtonModule, InputTextareaModule,InputTextModule, PanelModule, DropdownModule } from 'primeng/primeng';
import { SelectItem } from 'primeng/primeng';
import { Router } from '@angular/router';

import { EquipmentService } from '../../../shared/services/equipment.service';
import { TestFacilityService } from '../../../shared/services/testfacility.service';

@Component({
    selector: 'add-equipment',
    //styleUrls: ['app/body/Equipment/Add/add.component.css'], 
    templateUrl: 'app/body/Equipment/Add/add.component.html'
})

export class AddComponent {
    name:string;
    addressLine1:string;
    addressLine2:string;
    city:string;
    state:string;
    postalCode: string;
    equipmentManufacturers: any;
    selectedEquipmentManufacturerId: any;
    equipmentTypes: any;
    selectedEquipmentTypeId: any;
    testFacilities: any;
    selectedTestFacilityId: any;

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
        //this.getEquipmentManufacturers();
        //this.getEquipmentTypes();
        //this.getTestFacilities();


    }
    onEquipmentManufacturerChange(event) {
        console.log('------event------------', event)
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
            console.log(response);
        });
    }

    onEquipmentTypeChange(event) {
        console.log('------event------------', event)
        this.selectedEquipmentTypeId = (event.value);
        //   this.EquipmentSubType.calibrationform = (event);

    }
    onTestFacilityChange(event) {
        console.log('------event------------', event)
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
            console.log(response);
        });
    }
    getEquipmentTypes() {
        //    userRoles
        this.service.getEquipmentManufacturers().subscribe(response => {
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
            console.log(response);
        });
    }
    onSubmit(formRef) {
        console.log(formRef);
        console.log(this.testFacility.name);
        formRef.isDeleted = false;
        let formData: any = {name: '', 
                    address:{
                        addressLine1:'',
                        addressLine2:'',
                        city:'',
                        state:'',
                        postalCode:'',
                    }};
        formData.name = formRef.name;
        formData.address.addressLine1 = formRef.addressLine1;
        formData.address.addressLine2 = formRef.addressLine2;
        formData.address.city = formRef.city;
        formData.address.state = formRef.state;
        formData.address.postalCode = formRef.postalCode;
        formData.locale = "en-us";
        console.log(formData);
        this.service.postAdd(formData).subscribe(res => { 
            console.log("-------- Test Facility Adding new result ----- ",res); 
            if (res.isSuccess) {

                this.router.navigate(["./testfacilities"], { queryParams: { page: 1 } });
            }
        });
    }
   

}
