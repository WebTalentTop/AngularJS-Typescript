import { TimeEntryService } from '../../../shared/services/timeEntry.service';
//import { EquipmentTypeService } from '../../../shared/services/equipmentType.service';
import { EquipmentTypeService } from '../../../shared/services/equipmentType.service';
import { DataTable, TabViewModule, LazyLoadEvent, ButtonModule, InputTextareaModule, CalendarModule, InputTextModule, PanelModule, FileUploadModule, Message } from 'primeng/primeng';
import { Component,AfterViewInit, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GridComponent } from '../../../shared/UIComponents/GridComponent/grid.component';
import { SelectItem, ConfirmationService } from 'primeng/primeng';
import { Router } from '@angular/router';
declare var $: JQueryStatic;
declare var quilldef: Quill.Quill;
@Component({
    selector: 'details-testrequest',
    templateUrl: 'app/body/TestRequest/Details/details.component.html'
})
export class DetailsComponent implements AfterViewInit {
    ngAfterViewInit() {
      //  var editor = new Quill('#editor');
        var quill = new Quill('#editor-container', {
            modules: {
                toolbar: [
                    [{ header: [1, 2, true] }],
                    ['bold', 'italic', 'underline'],
                    ['image', 'code-block']
                ]
            },
            placeholder: 'Compose an epic...',
            theme: 'snow'  // or 'bubble'
        });
       // quill.g
    }
   // qui
    gridData = [];
    confInfo: any = {};
    cols = [];
    gridFilter = {};
    idField: string;
    linkFieldId: string;
    username: string;
    details:string;
    testStages: any;
    hourEntries: any;
    downTimeReasons: any;
    estimateDuration: any;
    formConfiguration:any;
    formObject:any;
    formEquipmentObject: any;
    TimeEntryTypeId: any;
    selectedTestStageId: any;
    selectedTimeEntryTypeId: any;
    selectedDownTimeReasonId: any;
    projectId: any;
    selectedHourEntry: any ;
    id: string;
    entityType: string = "TestFacility";
     entityId: string = this.id;
    filepath: string = "TestFacility";
    TrackingList: any;
    startTime: any;
    endTime: Date;
    model:any = {
                id:'', 
                isDeleted:false, 
                name:'', 
                createdOn:'', 
                modifiedOn:'',
                userCreatedById:'',
                userInChargedId:'',
                userModifiedById:''
    };
    msgs:Message[];
    uploadedFiles: any[] = [];

    constructor(
        private route:ActivatedRoute, 
        private dataService: TimeEntryService,
        private service: EquipmentTypeService,
        private router: Router
   
    ){
        this.route.params.subscribe(params => this.id = params['id']);
          this.entityId = this.id;
        console.log("---- TF Details ID Param -----", this.id);
    }
   handleChange(event)
   {

       console.log('tes---',event);
       console.log('-------targetid-------',event.originalEvent.target.innerText);
   }
   ngOnInit() {
       this.getTestStages();
       this.getHourEntryByEntityIdentifierId();
       this.getDownTimeReasons();
       let resData: any;
       this.service.postGridData()
           .subscribe(res => {
               resData = res;
               this.gridData = res.Data;
               this.cols = res.Configuration.Columns;
               //console.log("-------- Cols --------", this.cols);
               this.confInfo = res.Configuration;
               //console.log("------- Configuration --------", this.confInfo);
           });
       //this.dataService.GetProjectId(this.id)
       //    .subscribe(res => {
       //        this.projectId = res.$values;

       //        //this.formConfiguration = res.formConfiguration;
       //        //this.formObject = res.formObject;
       //        //this.model = res.formObject;
       //        //console.log("----- Result of formConfiguration -----", this.formConfiguration.fields.$values);
       //        //console.log("----- Result of formObject -----", this.model);
       //    });     
        this.dataService.GetTrackingListByEntityId(this.id)
            .subscribe(res =>
            {
                this.TrackingList = res.$values;
               
                //this.formConfiguration = res.formConfiguration;
                //this.formObject = res.formObject;
                //this.model = res.formObject;
                //console.log("----- Result of formConfiguration -----", this.formConfiguration.fields.$values);
                //console.log("----- Result of formObject -----", this.model);
            });     
       
   }
   onTestStageChange(event) {
       console.log('------event------------', event)
       this.selectedTestStageId = (event.value);
       //   this.EquipmentSubType.calibrationform = (event);

   }

   onDownTimeReasonChange(event) {
       console.log('------event------------', event)
       this.selectedDownTimeReasonId = (event.value);
       //   this.EquipmentSubType.calibrationform = (event);

   }

   onHourEntryChange(event) {
       console.log('------event------------', event)
       this.selectedTimeEntryTypeId = (event.value);
       //   this.EquipmentSubType.calibrationform = (event);

   }
   getTestStages() {
        //    userRoles
       this.dataService.getTestStages().subscribe(response => {
           this.testStages = new Array();
            if (response != null) {
                var resultMap = new Array();
                resultMap.push({
                    label: "--Select--",
                    value: null
                });
                for (let template of response) {
                    var temp = {
                        label: template.name,
                        value: template.id
                    }
                    resultMap.push(temp);
                }
                this.testStages = resultMap;
            }
            console.log(response);
        });
   }

   getDownTimeReasons() {
       //    userRoles
       this.dataService.GetAllDownTimeReasons().subscribe(response => {
           this.downTimeReasons = new Array();
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
               this.downTimeReasons = resultMap;
           }
           console.log(response);
       });
   }
   getHourEntryByEntityIdentifierId() {
       //    userRoles
       this.dataService.getHourEntryByEntityIdentifierId(this.id).subscribe(response => {
           this.hourEntries = new Array();
           if (response != null) {
               var resultMap = new Array();
               resultMap.push({
                   label: "--Select--",
                   value: null
               });
               for (let template of response) {
                   var temp = {
                       label: template.name,
                       value: template.id
                   }
                   resultMap.push(temp);
               }
               this.hourEntries = resultMap;
           }
          
           console.log(response);
       });
   }
    onSubmit(formRef) {
        console.log(formRef);
     //   console.log(this.testFacility.name);
        formRef.isDeleted = false;
        //let formData: any = {
        //    id: this.id,
        //    name: '',
        //    address: {

        //        id: '',
        //        addressLine1: '',
        //        addressLine2: '',
        //        city: '',
        //        state: '',
        //        postalCode: '',
        //    }
        //};
        var quill = new Quill('#editor-container');
     //   var delta = quill.getContents();
        var text = quill.getText();
       // var test = quill.setText(text);
        var format = quill.getFormat(0);
        var quilltext = quill.formatText(0, 0, format);
       
       
       
        let formData: any = {
           timeEntryTypeId: this.selectedTimeEntryTypeId,
          entityTypeId : '',
          entityId: this.id,
          startTime : this.startTime,
          endTime : this.endTime,
          userId: '',
          projectId: '53FE9592-1A9B-07D0-85D7-006A30BCD348',
          testStageId: this.selectedTestStageId,
          isDownTime: false,
          estimateDuration: this.estimateDuration,
          downTimeReasonId: this.selectedDownTimeReasonId,
          description: quill.getText(),         
          tenantId: '',
          userCreatedById: '' ,
          id : ' '

        };
       
      //  formData.id = this.id;
      //  formData.name = formRef.name;
        //formData.address.id = this.addressid;
        //formData.address.addressLine1 = formRef.addressLine1;
        //formData.address.addressLine2 = formRef.addressLine2;
        //formData.address.city = formRef.city;
        //formData.address.state = formRef.state;
        //formData.address.postalCode = formRef.postalCode;
        formData.locale = "en-us";
        console.log(formData);
        this.dataService.postAdd(formData).subscribe(res => {

           // console.log(res);
            this.TrackingList = res.$values;

            //if (!res.errorMessage) {
            //    //this.router.navigate(["/testfacilities/details/", res.result.id]);
            //}

        });
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'saved', detail: '' });

    }
    navigateDetails(id: string) {
        this.router.navigate(['testrequest/sensor/details/', id]);
    }

  

}