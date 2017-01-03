import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MarketService } from '../../../../../shared/services/market.service'
import { DataTable, TabViewModule, LazyLoadEvent, ButtonModule, InputTextareaModule,  InputTextModule, PanelModule, FileUploadModule, Message } from 'primeng/primeng';
import { SelectItem, ConfirmationService, MenuItem } from 'primeng/primeng';
import { Validators } from '@angular/forms';
import { BreadCrumbsService } from '../../../../../shared/services/breadCrumbs/breadCrumbs.service';
@Component({
    selector: 'market-detail',
    templateUrl: 'app/body/Admin/Vehicle/Market/Details/details.component.html'
})
export class DetailsComponent {
    username: string;
    details: string;

    id: string;
    entityType: string = "Market";
    entityId: string = this.id;
    filepath: string = "Market";
    market = { name: '' };   
    formConfiguration: any;
    formObject: any;

    MarketDetails: any = {
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

    //public MarketDetails: any;
    public MarketId: string;

    constructor(
        private breadCrumbsService: BreadCrumbsService,
        private route: ActivatedRoute,
        private router: Router,
        private service: MarketService
    )
    { }
        breadcrumbs: MenuItem[];
        breadcrumbsHome: MenuItem;
    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.route.params.subscribe(params => console.log(params['id']));

            this.MarketId = params['id']; // (+) converts string 'id' to a number
            //let locale = params['locale'];

            let breadC = this.breadCrumbsService.getBreadCrumbs();
            let marketDetailsBreadCrumb = breadC.filter(filter =>
                filter.pageName === 'MarketDetailsPage'
            )[0];

            console.log("BreadC -----", breadC);
            console.log("marketDetailsBreadCrumb ---------", marketDetailsBreadCrumb);
            this.breadcrumbs = [];
            this.breadcrumbs = marketDetailsBreadCrumb.items;

            console.log("breadcurmbs ------", this.breadcrumbs);

            this.breadcrumbsHome = { routerLink: ['/'] };
            });

            this.service.getById(this.MarketId).subscribe(MarketDetails => {
                this.MarketDetails = MarketDetails.result;
               
                console.log(this.MarketDetails);
        });
    }

    onSubmit(formRef) {
        this.service.postUpdate(this.MarketDetails).subscribe(MarketDetails => {
        });
         this.msgs = [];
         this.msgs.push({ severity: 'success', summary: 'Saved', detail: '' });
    }
}