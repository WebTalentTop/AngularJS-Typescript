import { MarketService } from '../../../../shared/services/market.service';
import { LoggerService } from '../../../../shared/services/logger/logger.service';
import { DataTable, LazyLoadEvent, Message, MessagesModule, MenuItem } from 'primeng/primeng';
import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GridComponent } from '../../../../shared/UIComponents/GridComponent/grid.component';
import { BreadCrumbsService } from '../../../../shared/services/breadCrumbs/breadCrumbs.service';

@Component({
    selector: 'market-grid',
    templateUrl: 'app/body/Admin/Vehicle/Market/market.component.html'
})
export class MarketComponent {
    //title = "Market Grid";
    gridData = [];
    confInfo:any = {};
    cols = [];
    gridFilter = {};
    msgs: Message[] = [];
    added: any;
        
    breadcrumbs: MenuItem[];
    breadcrumbsHome: MenuItem;
    constructor(
        private breadCrumbsService: BreadCrumbsService,
        private service: MarketService, 
        private route: ActivatedRoute, 
        private router: Router, 
        private logger: LoggerService) {

    }

    ngOnInit() {
    
        this.route.queryParams.subscribe(params => {

            this.added = params['page'];
           
           let breadC = this.breadCrumbsService.getBreadCrumbs();
            let marketBreadCrumb = breadC.filter(filter =>
                filter.pageName === 'MarketHomePage'
            )[0];

            console.log("BreadC -----", breadC);
            console.log("marketBreadCrumb ---------", marketBreadCrumb);
            this.breadcrumbs = [];
            this.breadcrumbs = marketBreadCrumb.items;

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
        this.router.navigate(['admin/vehicle/market/details', id]);
    }
}