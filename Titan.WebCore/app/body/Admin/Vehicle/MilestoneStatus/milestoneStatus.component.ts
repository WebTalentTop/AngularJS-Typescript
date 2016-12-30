import { MilestoneStatusService } from '../../../../shared/services/milestoneStatus.service';
import { LoggerService } from '../../../../shared/services/logger.service';
import { DataTable, LazyLoadEvent, Message, MessagesModule, MenuItem } from 'primeng/primeng';
import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GridComponent } from '../../../../shared/UIComponents/GridComponent/grid.component';
import { BreadCrumbsService } from '../../../../shared/services/breadCrumbs/breadCrumbs.service';

@Component({
    selector: 'milestoneStatus-grid',
    templateUrl: 'app/body/Admin/Vehicle/MilestoneStatus/milestoneStatus.component.html'
})
export class MilestoneStatusComponent {
    //title = "MilestoneStatus Grid";
    gridData = [];
    confInfo:any = {};
    cols = [];
    gridFilter = {};
    msgs: Message[] = [];
    added: any;
    constructor(private breadCrumbsService: BreadCrumbsService, private service: MilestoneStatusService, private route: ActivatedRoute, private router: Router, private logger: LoggerService) {

    }

    breadcrumbs: MenuItem[];
    breadcrumbsHome: MenuItem;    
    ngOnInit() {
    
        this.route.queryParams.subscribe(params => {

            this.added = params['page'];
            let breadC = this.breadCrumbsService.getBreadCrumbs();
            let milestoneStatusBreadCrumb = breadC.filter(filter =>
                filter.pageName === 'MilestoneStatusHomePage'
            )[0];

            console.log("BreadC -----", breadC);
            console.log("milestoneStatusBreadCrumb ---------", milestoneStatusBreadCrumb);
            this.breadcrumbs = [];
            this.breadcrumbs = milestoneStatusBreadCrumb.items;

            console.log("breadcurmbs ------", this.breadcrumbs);

            this.breadcrumbsHome = { routerLink: ['/'] };           
        });

        if (this.added == 1) {
            this.msgs = [];
            this.msgs.push({ severity: 'success', summary: 'Added', detail: '' });
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
        this.router.navigate(['vehicle/milestoneStatus/details', id]);
    }
}