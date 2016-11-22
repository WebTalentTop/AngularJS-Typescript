import { TestFacilityService } from '../../../shared/services/testfacility.service';
import { TestFacilityRoleService } from '../../../shared/services/testFacilityRole.service';
import { ITestFacilityRole } from '../../../shared/services/definitions/ITestFacilityRole';
import { TestFacilityAttachmentService } from '../../../shared/services/testFacilityAttachment.service';
import { ITestFacilityAttachment } from '../../../shared/services/definitions/ITestFacilityAttachment';
import { ITestFacilityEquipment } from '../../../shared/services/definitions/ITestFacilityEquipment';
import { DataTable, TabViewModule, LazyLoadEvent, ButtonModule, InputTextareaModule,MessagesModule, InputTextModule, PanelModule, FileUploadModule, Message, GrowlModule } from 'primeng/primeng';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
    selector: 'details-testfacility',
    templateUrl: 'app/body/TestFacilities/Details/details.component.html'
})
export class DetailsComponent {

    username: string;
    details: string;

    notificationMsgs: Message[] = [];
    notifications:any;

    formConfiguration: any;
    formObject: any;
    formEquipmentObject: any;
    id: string;
    addressid: any;
    entityType: string = "TestFacility";
    entityId: string = this.id;
    filepath: string = "TestFacility";
    testFacility = { name: '' };
    address = { addressLine1: '', addressLine2: '', city: '', state: '', postalCode: '' };
    TestFacilityAttachments: ITestFacilityAttachment[];
    TestFacilityRoles: ITestFacilityRole[];
    TestFacilityEquipments: ITestFacilityEquipment[];

    model: any = {
        id: '',
        isDeleted: false,
        name: '',
        createdOn: '',
        modifiedOn: '',
        userCreatedById: '',
        userInChargedId: '',
        userModifiedById: ''
    };

    msgs: Message[];
    uploadedFiles: any[] = [];

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private dataService: TestFacilityService,
        private testfacilityroleservice: TestFacilityRoleService,
        private testfacilityattachmentservice: TestFacilityAttachmentService
    ) {
        this.route.params.subscribe(params => this.id = params['id']);
        this.entityId = this.id;
        console.log("---- TF Details ID Param -----", this.id);
    }
    handleChange(event) {

        console.log('tes---', event);
        console.log('-------targetid-------', event.originalEvent.target.innerText);
    }
    ngOnInit() {
        this.dataService.getById(this.id)
            .subscribe(res => {
                this.formConfiguration = res.formConfiguration;
                this.formObject = res.formObject;
                this.address = res.address;
                this.addressid = res.address.id
                this.testFacility = res.testFacility;
                this.model = res.formObject;
                console.log("----- Result of formConfiguration -----", this.formConfiguration.fields.$values);
                console.log("----- Result of formObject -----", this.model);
            });
            if(this.id){
                this.dataService.getNotifications(this.id)
                    .subscribe(res => {
                        if(res){
                            this.notifications = res;
                        }

                        this.notifications.forEach(x=> {
                            this.notificationMsgs.push({severity: 'warn', summary: x.ruleMessage, detail: x.description});
                        })
                    })
            }
        this.testfacilityroleservice.getByIdusing(this.id)
            .subscribe(TestFacilityRoles => {
                console.log('-----------  TestFacilitiesroles------------------', TestFacilityRoles);
                this.TestFacilityRoles = TestFacilityRoles;
            });

        this.testfacilityattachmentservice.getByIdusing(this.id)
            .subscribe(TestFacilityAttachments => {
                console.log('-----------  TestFacilitiesroles------------------', TestFacilityAttachments);
                this.TestFacilityAttachments = TestFacilityAttachments;
            });

        this.dataService.getEquipmentsByIdusing(this.id)
            .subscribe(res => {
                this.TestFacilityEquipments = res;

            });
    }
    onSubmit(formRef) {
        console.log(formRef);
        console.log(this.testFacility.name);
        formRef.isDeleted = false;
        let formData: any = {
            id:this.id,
            name: '',
            address: {
                
                id:'',
                addressLine1: '',
                addressLine2: '',
                city: '',
                state: '',
                postalCode: '',
            }
        };
        formData.id = this.id;
        formData.name = formRef.name;
        formData.address.id = this.addressid;
        formData.address.addressLine1 = formRef.addressLine1;
        formData.address.addressLine2 = formRef.addressLine2;
        formData.address.city = formRef.city;
        formData.address.state = formRef.state;
        formData.address.postalCode = formRef.postalCode;
        formData.locale = "en-us";
        console.log(formData);
        this.dataService.postUpdate(formData).subscribe(res => {
           
            if (!res.errorMessage) {
                this.router.navigate(["/testfacilities/details/", res.result.id]);
            }
          
        });
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'saved', detail: '' });
       
    }

    onBeforeUpload(event) {

        for (let file of event.files) {
            this.uploadedFiles.push(file);

        }
    }
    onDelete(TestFacilityAttachment: ITestFacilityAttachment) {
        console.log('--------------TestFacilityAttachment id0------------', TestFacilityAttachment);
        this.testfacilityattachmentservice.DeleteAttachmentsById(TestFacilityAttachment.id)
            .subscribe(res => {

                this.testfacilityattachmentservice.getByIdusing(this.id)
                    .subscribe(TestFacilityAttachments => {
                        console.log('-----------  TestFacilitiesroles------------------', TestFacilityAttachments);
                        this.TestFacilityAttachments = TestFacilityAttachments;
                    });
            });
    }
         

    selectAttachment(TestFacilityAttachment: ITestFacilityAttachment) {
        console.log('---------------buttonclick---------------', TestFacilityAttachment);
        // return this.http.get(`${TestFacilityApiUrl.getfilesByIdUrl}/${path}`, { headers: this.headers })
        //   this.msgs = [];
        // this.msgs.push({severity:'info', summary:'Attachment Select', detail:'',  + TestFacilityAttachment.$values.path});


    }

    onUpload(event) {
        for (let file of event.files) {

            this.uploadedFiles.push(file);

        }

        this.testfacilityattachmentservice.getByIdusing(this.id)
            .subscribe(TestFacilityAttachments => {
                console.log('-----------  TestFacilitiesroles------------------', TestFacilityAttachments);
                this.TestFacilityAttachments = TestFacilityAttachments;
            });

        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'File Uploaded', detail: '' });
    }


}