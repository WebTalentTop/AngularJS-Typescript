import { PlatformService } from '../../../../shared/services/platform.service';
import { LoggerService } from '../../../../shared/services/logger/logger.service';
import { DataTable, LazyLoadEvent, Message, MessagesModule, MenuItem } from 'primeng/primeng';
import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GridComponent } from '../../../../shared/UIComponents/GridComponent/grid.component';
import { BreadCrumbsService } from '../../../../shared/services/breadCrumbs/breadCrumbs.service';

@Component({
    selector: 'platform-grid',
    templateUrl: 'app/body/Admin/Vehicle/Platform/platform.component.html'
})
export class PlatformComponent {
    //title = "Platform Grid";
    gridData = [];
    confInfo:any = {};
    cols = [];
    gridFilter = {};
    msgs: Message[] = [];
    added: any;
    constructor(private breadCrumbsService: BreadCrumbsService,private service: PlatformService, private route: ActivatedRoute, private router: Router, private logger: LoggerService) {

    }
    breadcrumbs: MenuItem[];
    breadcrumbsHome: MenuItem;
    ngOnInit() {
    
        this.route.queryParams.subscribe(params => {

            this.added = params['page'];
            let breadC = this.breadCrumbsService.getBreadCrumbs();
            let platformBreadCrumb = breadC.filter(filter =>
                filter.pageName === 'PlatformHomePage'
            )[0];

            console.log("BreadC -----", breadC);
            console.log("platformBreadCrumb ---------", platformBreadCrumb);
            this.breadcrumbs = [];
            this.breadcrumbs = platformBreadCrumb.items;

            console.log("breadcurmbs ------", this.breadcrumbs);

            this.breadcrumbsHome = { routerLink: ['/'] };
            
           
        });

        if (this.added == 1) {
            this.msgs = [];
            this.msgs.push({ severity: 'info', summary: 'Added', detail: '' });
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
        this.router.navigate(['admin/vehicle/platform/details', id]);
    }
}