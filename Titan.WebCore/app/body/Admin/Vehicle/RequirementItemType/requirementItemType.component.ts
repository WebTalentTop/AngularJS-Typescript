import { RequirementItemTypeService } from '../../../../shared/services/requirementItemType.service';
import { LoggerService } from '../../../../shared/services/logger/logger.service';
import { DataTable, LazyLoadEvent, Message, MessagesModule,MenuItem } from 'primeng/primeng';
import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GridComponent } from '../../../../shared/UIComponents/GridComponent/grid.component';
import { BreadCrumbsService } from '../../../../shared/services/breadCrumbs/breadCrumbs.service';

@Component({
    selector: 'requirementItemType-grid',
    templateUrl: 'app/body/Admin/Vehicle/RequirementItemType/requirementItemType.component.html'
})
export class RequirementItemTypeComponent {
    //title = "RequirementItemType Grid";
    gridData = [];
    confInfo:any = {};
    cols = [];
    gridFilter = {};
    msgs: Message[] = [];
    added: any;
    constructor(private breadCrumbsService: BreadCrumbsService,private service: RequirementItemTypeService, private route: ActivatedRoute, private router: Router, private logger: LoggerService) {

    }
    breadcrumbs: MenuItem[];
    breadcrumbsHome: MenuItem;
    ngOnInit() {
    
        this.route.queryParams.subscribe(params => {

            this.added = params['page'];
           let breadC = this.breadCrumbsService.getBreadCrumbs();
            let requirementItemTypeBreadCrumb = breadC.filter(filter =>
                filter.pageName === 'RequirementItemTypeHomePage'
            )[0];

            console.log("BreadC -----", breadC);
            console.log("requirementItemTypeBreadCrumb ---------", requirementItemTypeBreadCrumb);
            this.breadcrumbs = [];
            this.breadcrumbs = requirementItemTypeBreadCrumb.items;

            console.log("breadcurmbs ------", this.breadcrumbs);

            this.breadcrumbsHome = { routerLink: ['/'] };
        });

        if (this.added == 1) {
            this.msgs = [];
            this.msgs.push({ severity: 'Success', summary: 'Success', detail: '' });
        }
       
        let resData:any;
        this.service.postGridData()
            .subscribe(res => {
                resData = res;
                console.log("Inside of Service Call in BodyComponent: ", resData);

                this.gridData = res.Data;
                this.cols = res.Configuration.Columns;
                //console.log("-------- Cols --------", this.cols);
                this.confInfo = res.Configuration;
                //console.log("------- Configuration --------", this.confInfo);
            });
        console.log("The Whole MyValues After Service Call: ", this.gridData);
        console.log("The Whole configuration Info values: ", this.confInfo);
        
    }
    navigateDetails(id:string){
        this.router.navigate(['admin/vehicle/requirementItemType/details', id]);
    }
}