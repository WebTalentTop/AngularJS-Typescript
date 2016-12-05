import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GradeService } from '../../../../../shared/services/grade.service'
import { DataTable, TabViewModule, LazyLoadEvent, ButtonModule, InputTextareaModule, MessagesModule, InputTextModule, PanelModule, FileUploadModule, Message, GrowlModule } from 'primeng/primeng';
import { SelectItem, ConfirmationService } from 'primeng/primeng';
import { Validators } from '@angular/forms';

@Component({
    selector: 'grade-detail',
    templateUrl: 'app/body/Admin/Vehicle/Grade/Details/details.component.html'
})
export class DetailsComponent {
    username: string;
    details: string;

    id: string;
    entityType: string = "Grade";
    entityId: string = this.id;
    filepath: string = "Grade";
    grade = { name: '' };   
    formConfiguration: any;
    formObject: any;

    GradeDetails: any = {
        id: '',
        isDeleted: false,
        name: '',
        description: '',
        userCreatedById: '',
        userModifiedById: '',
        createdOn: '',
        modifiedOn: ''

    };


    msgs: Message[];
    uploadedFiles: any[] = [];


    public GradeId: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: GradeService
    )
    { }


    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.route.params.subscribe(params => console.log(params['id']));

            this.GradeId = params['id']; // (+) converts string 'id' to a number
            //let locale = params['locale'];

            this.service.getById(this.GradeId).subscribe(GradeDetails => {
                this.GradeDetails = GradeDetails.result;
              
                console.log(this.GradeDetails);
            });
        });
    }


    onSubmit(formRef) {

        this.service.postUpdate(this.GradeDetails).subscribe(GradeDetails => {
        });
         this.msgs = [];
         this.msgs.push({ severity: 'success', summary: 'Saved', detail: '' });
    }
}