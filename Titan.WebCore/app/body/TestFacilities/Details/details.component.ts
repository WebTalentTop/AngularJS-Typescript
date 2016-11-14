import { TestFacilityService } from '../../../shared/services/testfacility.services';
import { TestFacilityRoleService } from '../../../shared/services/testFacilityRoleService';
import { ITestFacilityRole } from '../../../shared/services/definitions/ITestFacilityRole';
import { TestFacilityAttachmentService } from '../../../shared/services/testFacilityAttachmentService';
import { ITestFacilityAttachment } from '../../../shared/services/definitions/ITestFacilityAttachment';
import { ITestFacilityEquipment } from '../../../shared/services/definitions/ITestFacilityEquipment';
import { DataTable, TabViewModule, LazyLoadEvent, ButtonModule, InputTextareaModule, InputTextModule, PanelModule, FileUploadModule, Message, GrowlModule } from 'primeng/primeng';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'details-testfacility',
    templateUrl: 'app/body/TestFacilities/Details/details.component.html'
})
export class DetailsComponent {

    username: string;
    details: string;

    formConfiguration: any;
    formObject: any;
    formEquipmentObject: any;
    id: string;
    entityType: string = "TestFacility";
    entityId: string = this.id;
    filepath: string = "TestFacility";
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
                this.model = res.formObject;
                console.log("----- Result of formConfiguration -----", this.formConfiguration.fields.$values);
                console.log("----- Result of formObject -----", this.model);
            });
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

    onBeforeUpload(event) {

        for (let file of event.files) {
            this.uploadedFiles.push(file);

        }
    }
    onDelete(id) {
        this.testfacilityattachmentservice.DeleteAttachmentsById(id)
        //    .subscribe(res => {
        //      console.log('-----------  TestFacilitiesroles------------------', res);
        //  this.TestFacilityAttachments = TestFacilityAttachments;
        //   });

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