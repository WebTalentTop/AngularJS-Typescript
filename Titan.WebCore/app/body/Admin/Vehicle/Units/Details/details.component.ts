import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UnitsService } from '../../../../../shared/services/units.service';
import { DataTable, TabViewModule, LazyLoadEvent, ButtonModule, InputTextareaModule, MessagesModule, InputTextModule, PanelModule, FileUploadModule, Message, GrowlModule } from 'primeng/primeng';
import { SelectItem, ConfirmationService, MenuItem } from 'primeng/primeng';
import { Validators } from '@angular/forms';
import { BreadCrumbsService } from '../../../../../shared/services/breadCrumbs/breadCrumbs.service';
import {LoggerService} from "../../../../../shared/services/logger/logger.service";

@Component({
    selector: 'units-detail',
    templateUrl: 'app/body/Admin/Vehicle/Units/Details/details.component.html'
})
export class DetailsComponent {
    username: string;
    details: string;

    id: string;
    entityType: string = "Units";
    entityId: string = this.id;
    filepath: string = "Units";
    units = { name: '' };   
    formConfiguration: any;
    formObject: any;

    UnitsDetails: any = {
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


    public UnitsId: string;

    constructor(
        private breadCrumbsService: BreadCrumbsService,
        private ls: LoggerService,
        private route: ActivatedRoute,
        private router: Router,
        private service: UnitsService
    )
    { }
        breadcrumbs: MenuItem[];
        breadcrumbsHome: MenuItem;
    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.route.params.subscribe(params => console.log(params['id']));

            this.UnitsId = params['id']; // (+) converts string 'id' to a number
            //let locale = params['locale'];

            let breadC = this.breadCrumbsService.getBreadCrumbs();
            let unitsDetailsBreadCrumb = breadC.filter(filter =>
                filter.pageName === 'UnitsDetailsPage'
            )[0];

            console.log("BreadC -----", breadC);
            console.log("unitsDetailsBreadCrumb ---------", unitsDetailsBreadCrumb);
            this.breadcrumbs = [];
            this.breadcrumbs = unitsDetailsBreadCrumb.items;

            console.log("breadcurmbs ------", this.breadcrumbs);

            this.breadcrumbsHome = { routerLink: ['/'] };
            });

            this.service.getById(this.UnitsId).subscribe(UnitsDetails => {
                this.UnitsDetails = UnitsDetails.result;
              
                console.log(this.UnitsDetails);
        });
    }


    onSubmit(formRef) {

        this.service.postUpdate(this.UnitsDetails).subscribe(unitsDetails => {
            
        });
         this.msgs = [];
         this.msgs.push({ severity: 'success', summary: 'Saved', detail: '' });
    }
}