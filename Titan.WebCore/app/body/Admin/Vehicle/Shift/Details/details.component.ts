import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ShiftService } from '../../../../../shared/services/shift.service'
import { DataTable, TabViewModule, LazyLoadEvent, ButtonModule, InputTextareaModule, MessagesModule, InputTextModule, PanelModule, FileUploadModule, Message, GrowlModule } from 'primeng/primeng';
import { SelectItem, ConfirmationService, MenuItem } from 'primeng/primeng';
import { Validators } from '@angular/forms';
import { BreadCrumbsService } from '../../../../../shared/services/breadCrumbs/breadCrumbs.service';

@Component({
    selector: 'shift-detail',
    templateUrl: 'app/body/Admin/Vehicle/Shift/Details/details.component.html'
})
export class DetailsComponent {
    username: string;
    details: string;

    id: string;
    entityType: string = "Shift";
    entityId: string = this.id;
    filepath: string = "Shift";
    shift = { name: '' };   
    formConfiguration: any;
    formObject: any;

    public ShiftDetails: any = {
        id: '',
        isDeleted: false,
        name: '',
        startTime:'',
        endTime:'',
        userCreatedById: '',
        userModifiedById: '',
        createdOn: '',
        modifiedOn: ''
    };

    msgs: Message[];
    uploadedFiles: any[] = [];

    public ShiftId: string;
    breadcrumbs: MenuItem[];
    breadcrumbsHome: MenuItem;

    constructor(
        private breadCrumbsService: BreadCrumbsService,
        private route: ActivatedRoute,
        private router: Router,
        private service: ShiftService
    )
    { }
    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.route.params.subscribe(params => console.log(params['id']));

            this.ShiftId = params['id']; // (+) converts string 'id' to a number
            //let locale = params['locale'];
            
            let breadC = this.breadCrumbsService.getBreadCrumbs();
            let shiftDetailsBreadCrumb = breadC.filter(filter =>
                filter.pageName === 'ShiftDetailsPage'
            )[0];

            console.log("BreadC -----", breadC);
            console.log("shiftDetailsBreadCrumb ---------", shiftDetailsBreadCrumb);
            this.breadcrumbs = [];
            this.breadcrumbs = shiftDetailsBreadCrumb.items;

            console.log("breadcurmbs ------", this.breadcrumbs);

            this.breadcrumbsHome = { routerLink: ['/'] };
            });

            this.service.getById(this.ShiftId).subscribe(ShiftDetails => {
                this.ShiftDetails = ShiftDetails.result;
                this.ShiftDetails.id = this.ShiftId;
                console.log(this.ShiftDetails);
            
        });
    }


   onSubmit(formRef) {

        this.service.postUpdate(this.ShiftDetails).subscribe(ShiftDetails => {
        });
         this.msgs = [];
         this.msgs.push({ severity: 'success', summary: 'Saved', detail: '' });
    }
}