import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SelectItem, ConfirmationService } from 'primeng/primeng';

import { EquipmentService } from '../../../shared/services/equipment.service';
import { TestFacilityService } from '../../../shared/services/testfacility.service';
import { DataTable, TabViewModule, LazyLoadEvent, ButtonModule, InputTextareaModule, InputTextModule, PanelModule, FileUploadModule, Message, GrowlModule } from 'primeng/primeng';
declare var cron: any;
declare var useGentleSelect: any;
@Component({
    selector: 'details-equipment',
    templateUrl: 'app/body/Equipment/Details/details.component.html'
})
export class DetailsComponent {

    username: string;
    details:string;
    equipmentManufacturers: any;
    selectedEquipmentManufacturerId: any;
    equipmentTypes: any;
    selectedCalibrationFrequency: any;
    selectedEquipmentTypeId: any;
    testFacilities: any;
    selectedTestFacilityId: any;
    formConfiguration:any;
    formObject:any;
    formEquipmentObject:any;
    id: string;
    equipmentId: any;
    entityType: string = "TestFacility";
     entityId: string = this.id;
    filepath: string = "TestFacility";
 
    model:any = {
            id: '',
            name: '',
            equipmentTypeId: '',
            serialNumber: '',
            modelNumber: '' ,
            purchaseDate:'' ,
            warrantyExpiration: '',
            lastCalibrationDate: '',
            description: '' ,
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
    msgs:Message[];
    uploadedFiles: any[] = [];

    constructor(
        private route: ActivatedRoute,
        private testfacilityservice: TestFacilityService,
        private service: EquipmentService
   
    ){
        this.route.params.subscribe(params => this.id = params['id']);
        this.equipmentId = this.id;
        this.model.id = this.id;
    }
   handleChange(event)
   {

   }
   ngOnInit() {
       this.getEquipmentManufacturers();
       this.getEquipmentTypes();
       this.getTestFacilities();
     
        this.service.getById(this.id)
            .subscribe(res =>
            {
                this.model = res.result;
                this.model.purchaseDate = new Date(res.result.purchaseDate);
                this.model.warrantyExpiration = new Date(res.result.warrantyExpiration);
                this.model.lastCalibrationDate = new Date(res.result.lastCalibrationDate);
                //this.formConfiguration = res.formConfiguration;
                //this.formObject = res.formObject;
               
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
            });
       

        // this.dataService.getEquipmentsByIdusing(this.id)
          //  .subscribe(res =>
            //{
              //  this.TestFacilityEquipments = res;
                                       
           // });
    }

   onEquipmentManufacturerChange(event) {
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
   onEquipmentSave(formRef) {   
     //  formRef.isDeleted = false;
       
       let modeldata = {
           Id: this.id,
           Name: formRef.name,
           ModelNumber: formRef.modelNumber,
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
       this.service.postUpdate(modeldata).subscribe(res => {

           if (res.isSuccess) {
               this.msgs = [];
               this.msgs.push({ severity: 'info', summary: 'saved', detail: '' });

               // this.router.navigate(["/testfacilities/details/", res.result.id]);
           }

       });
       this.msgs = [];
       this.msgs.push({ severity: 'info', summary: 'saved', detail: '' });

   }

}