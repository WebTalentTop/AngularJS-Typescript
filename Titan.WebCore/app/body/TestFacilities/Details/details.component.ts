import { TestFacilityService } from '../../../shared/services/testfacility.services';
import { DataTable, TabViewModule, LazyLoadEvent, ButtonModule, InputTextareaModule, InputTextModule, PanelModule, FileUploadModule, Message, GrowlModule } from 'primeng/primeng';
import { Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
    selector: 'details-testfacility',
    templateUrl: 'app/body/TestFacilities/Details/details.component.html'
})
export class DetailsComponent {
    username: string;
    details:string;

    formConfiguration:any;
    formObject:any;

    id:string;

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
        private dataService: TestFacilityService
    ){
        this.route.params.subscribe(params => this.id = params['id']);
        console.log("---- TF Details ID Param -----", this.id);
    }

    ngOnInit() {
        this.dataService.getById(this.id)
            .subscribe(res =>
            {
                this.formConfiguration = res.formConfiguration;
                this.formObject = res.formObject;
                this.model = res.formObject;
                console.log("----- Result of formConfiguration -----", this.formConfiguration.fields.$values);
                console.log("----- Result of formObject -----", this.model);
            });
    }
    onBeforeUpload(event){
        console.log("---------- onBeforeUpload ---------",event);
        event.formData.append("id", this.id);
    }
    onUpload(event) {
        for(let file of event.files){
            this.uploadedFiles.push(file);
        }

        
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'File Uploaded', detail: ''});
    }

}