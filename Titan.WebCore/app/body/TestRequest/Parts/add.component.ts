import { TestRequestSensorService } from '../../../shared/services/testrequestsensor.service';
import { titanApiUrl } from '../../../shared/services/apiurlconst/titanapiurl';
import { EquipmentTypeService } from '../../../shared/services/equipmentType.service';
import {TestRequestService } from '../../../shared/services/testrequest.service';
import { DataTable, TabViewModule, LazyLoadEvent, ButtonModule, InputTextareaModule, CalendarModule, InputTextModule, PanelModule, FileUploadModule, Message } from 'primeng/primeng';
import { Component,AfterViewInit, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SelectItem, ConfirmationService } from 'primeng/primeng';
//import { UUID } from 'angular2-uuid'
import { Router } from '@angular/router';
declare var $: JQueryStatic;

@Component({
    selector: 'parts-add',
    templateUrl: 'app/body/TestRequest/Parts/add.component.html'
})
export class AddComponent {
   // ngAfterViewInit() {
   //   //  var editor = new Quill('#editor');
   //     var quill = new Quill('#editor-container', {
   //         modules: {
   //             toolbar: [
   //                 [{ header: [1, 2, true] }],
   //                 ['bold', 'italic', 'underline'],
   //                 ['image', 'code-block']
   //             ]
   //         },
   //         placeholder: 'Compose an epic...',
   //         theme: 'snow'  // or 'bubble'
   //     });
   //    // quill.g
   // }
   //// qui
   // username: string;
   // details:string;
    Sensors: any;
    fileData: any[] = [];
    drawingNumber: any;
    uploadedFiles: any[] = [];
   // TestFacilityAttachments: ITestFacilityAttachment[];
       // hourEntries: any;
   // downTimeReasons: any;
   // estimateDuration: any;
   // formConfiguration:any;
   // formObject:any;
   // formEquipmentObject: any;
   // TimeEntryTypeId: any;
    quantity: any;
    selectedSensorTypeId: any;
    comment: any;
    partsList: any;
    categories: any;
    materials: any;
    selectedCategoryId: any;
    selectedMaterialId: any;
    partName: any;
    partNumber: any;
    steadyRequirement: any;
    periodicRequirement: any;
   // selectedTimeEntryTypeId: any;
   // selectedDownTimeReasonId: any;
   // projectId: any;
   // selectedHourEntry: any ;
   id: any;
   entityType: any = "9F8D13F5-F0E8-452E-8D81-631FCD7A1C9A";
   entityId: any;
   formData: any;
   taskId: any;
   departmentId: any;
   // filepath: string = "TestFacility";
   // TrackingList: any;
   // startTime: any;
    // endTime: Date;
    fileInfo: any = {
   //             id:'',
        //             isDeleted:false,
         name: ''
   //             createdOn:'',
   //             modifiedOn:'',
   //             userCreatedById:'',
   //             userInChargedId:'',
   //             userModifiedById:''
    };

   // msgs:Message[];
   // uploadedFiles: any[] = [];

    constructor(
        private route:ActivatedRoute,
        private dataService: TestRequestSensorService,
        private equipmenttypeservice: EquipmentTypeService,
        private testrequestservice: TestRequestService,
        private router: Router

    ){
        this.route.params.subscribe(params => {
            this.id = params['id'];
            this.taskId = params['taskId'];
        });
          this.entityId = this.id;
          console.log("---- TF Details ID Param -----", this.id);
         // this.fileData= this.fileInfo[];
    }
   handleChange(event)
   {

       console.log('tes---',event);
       console.log('-------targetid-------',event.originalEvent.target.innerText);
   }
   ngOnInit() {

    
       //get the departmentId through taskId
       //get sensors by department and entityId
       this.dataService.getTaskDetailsById(this.taskId)
           .subscribe(taskres => {
              // this.departmentId = taskres.result.departmentId
               console.log('------------task department ------------', taskres.result.departmentId);
               //this.testrequestservice.GetAllTestRequestPartsList()
               //    .subscribe(res => {
               //        this.partsList = res.result;
               //    });
               //this.dataService.GetAllTestRequestSensors(this.entityId, taskres.result.departmentId)
               //    .subscribe(res => {
               //        this.sensorRequests = res.result;
               //    });
           });
      


   }
  
   onChange(event) {
       var files = event.files;
       //let fileList: FileList = event.target.files;
       //if (fileList.length > 0) {
       //    let file: File = fileList[0];

       //    let formData: FormData = new FormData();
       //    formData.append('degree_attachment', file, file.name);
       //this.dataService.postCommentAdd(formData).subscribe(res => {
       //    console.log("-------- Test Sensor Adding new result ----- ", res);
       //    if (res.IsSuccess) {
       //        this.router.navigate(["/testrequest/details/", this.id]);
       //    }
       //});
       for (let file of event.files) {
           // this.fileInfo.name = file.name;

           //this.fileData.push(this.fileInfo);
           this.uploadedFiles.push(file);
           // this.fileInfo.name = '';
       }
       //this.dataService.makeFileRequest('http://localhost:9998/api/testRequestSensor/post/uploadfile', [], files).subscribe(() => {
       //    console.log('sent');
       //});

       //  let headers = new Headers();
       //  headers.append('Accept', 'application/json');
       //  let options = new RequestOptions({ headers: headers });
       //this.http.post('http://url', formData, options)
       //    .map(res => res.json())
       //    .catch(error => Observable.throw(error))
       //    .subscribe(
       //    data => console.log('success'),
       //    error => console.log(error)
       //    )

   }
   onCompleteTask()
   {
       let completetaskbody =
           {
               id: this.taskId
               //entityId: this.id,
               //entityIdentifier: '756BCBA4-6FA5-4BB6-88D9-C1773471C7A0',               
               //departmentId: '8BF81DFE-FF64-2AFD-5C55-2D2D290C4490'

           }
       this.dataService.postTasksComplete(this.taskId).subscribe(res => {



       });

   }
   onBeforeUpload(event) {
       for (let file of event.files) {
           // this.fileInfo.name = file.name;

           //this.fileData.push(this.fileInfo);
           this.uploadedFiles.push(file);
          // this.fileInfo.name = '';
       }

       //this.testfacilityattachmentservice.getByIdusing(this.id)
       //    .subscribe(TestFacilityAttachments => {
       //        console.log('-----------  TestFacilitiesroles------------------', TestFacilityAttachments);
       //        this.TestFacilityAttachments = TestFacilityAttachments;
       //    });

       //this.msgs = [];
       //this.msgs.push({ severity: 'info', summary: 'File Uploaded', detail: '' });
   }
   onSensorChange(event) {
       console.log('------event------------', event)
       this.selectedSensorTypeId = (event.value);
       //   this.EquipmentSubType.calibrationform = (event);

   }
   onCategoryChange(event) {
       console.log('------event------------', event)
       this.selectedCategoryId = (event.value);
       //   this.EquipmentSubType.calibrationform = (event);

   }
   onMaterialChange(event) {
       console.log('------event------------', event)
       this.selectedMaterialId = (event.value);
       //   this.EquipmentSubType.calibrationform = (event);

   }

   //onDownTimeReasonChange(event) {
   //    console.log('------event------------', event)
   //    this.selectedDownTimeReasonId = (event.value);
   //    //   this.EquipmentSubType.calibrationform = (event);

   //}

   //onHourEntryChange(event) {
   //    console.log('------event------------', event)
   //    this.selectedTimeEntryTypeId = (event.value);
   //    //   this.EquipmentSubType.calibrationform = (event);

   //}
   getSensorList() {
        //    userRoles
       this.equipmenttypeservice.getSensorList().subscribe(response => {
           this.Sensors = new Array();
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
                this.Sensors = resultMap;
            }
            console.log(response);
        });
   }

  
   uploadFile(event)
   {
       for (let file of event.files) {

           this.formData = new FormData();
           this.formData.append('file', file);
       }

       //this.dataService.postCommentAdd(null).subscribe(res => {
       //    console.log("-------- Test Sensor Adding new result ----- ", res);
       //    if (res.IsSuccess) {
       //        this.router.navigate(["/testrequest/details/", this.id]);
       //    }
       //});

   }
   onSubmit(formRef) {
       //formRef.isDeleted = false;
       let formData: any = {
           //newly added columns

         //  DrawingNumber:this.drawingNumber,
           PartNumber: this.partNumber,
           QuantityRequired: this.quantity,
           TestId: 'CC68F2B0-A5EA-462F-B4DD-EA18140DB78B',
           Description: this.comment

       };

       this.testrequestservice.postAddPartsList(formData).subscribe(res => {
           console.log("-------- Test Sensor Adding new result ----- ", res);
           if (res.isSuccess) {
               var partsListId = res.result.id;
               //    console.log("", res.object.id); 
               this.dataService.makeFileRequest('http://localhost:9998/api/testRequestSensor/post/uploadfile', [], this.uploadedFiles, partsListId).subscribe(result => {
                   console.log('sent');
                
                   //this.testrequestservice.GetAllTestRequestPartsList('')
                   //    .subscribe(res => {
                   //        this.partsList = res.result;                         
                   //    });
               });             
           }
       });

   }

 

}