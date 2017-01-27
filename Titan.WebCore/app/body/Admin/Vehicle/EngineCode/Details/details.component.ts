import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { EngineCodeService } from '../../../../../shared/services/engineCode.service'
import { DataTable, TabViewModule, LazyLoadEvent, ButtonModule, InputTextareaModule, MessagesModule, InputTextModule, PanelModule, FileUploadModule, Message, GrowlModule } from 'primeng/primeng';
import { SelectItem, ConfirmationService, MenuItem } from 'primeng/primeng';
import { Validators } from '@angular/forms';
import { BreadCrumbsService } from '../../../../../shared/services/breadCrumbs/breadCrumbs.service';

@Component({
    selector: 'engineCode-detail',
    templateUrl: 'app/body/Admin/Vehicle/EngineCode/Details/details.component.html'
})
export class DetailsComponent {
    username: string;
    details: string;

    id: string;
    entityType: string = "EngineCode";
    entityId: string = this.id;
    filepath: string = "EngineCode";
    engineCode = { name: '' };   
    formConfiguration: any;
    formObject: any;

    EngineCodeDetails: any = {
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

    public EngineCodeId: string;

    breadcrumbs: MenuItem[];
    breadcrumbsHome: MenuItem;

    constructor(
        private breadCrumbsService: BreadCrumbsService,
        private route: ActivatedRoute,
        private router: Router,
        private service: EngineCodeService
    )
    { }
    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.route.params.subscribe(params => console.log(params['id']));

            this.EngineCodeId = params['id']; // (+) converts string 'id' to a number
            //let locale = params['locale'];

            let breadC = this.breadCrumbsService.getBreadCrumbs();
            let engineCodeDetailsBreadCrumb = breadC.filter(filter =>
                filter.pageName === 'EngineCodeDetailsPage'
            )[0];

            console.log("BreadC -----", breadC);
            console.log("engineCodeDetailsBreadCrumb ---------", engineCodeDetailsBreadCrumb);
            this.breadcrumbs = [];
            this.breadcrumbs = engineCodeDetailsBreadCrumb.items;

            console.log("breadcurmbs ------", this.breadcrumbs);

            this.breadcrumbsHome = { routerLink: ['/'] };
            });

            this.service.getById(this.EngineCodeId).subscribe(EngineCodeDetails => {
                this.EngineCodeDetails = EngineCodeDetails.result;
              
                console.log(this.EngineCodeDetails);
        });
    }


    onSubmit(formRef) {

        this.service.postUpdate(this.EngineCodeDetails).subscribe(EngineCodeDetails => {
           // console.log(EngineCodeDetails);
        });
         this.msgs = [];
         this.msgs.push({ severity: 'success', summary: 'Saved', detail: '' });
    }
}