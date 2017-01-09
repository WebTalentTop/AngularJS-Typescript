import { BuildLevelService } from '../../../../shared/services/buildLevel.service';
import { LoggerService } from '../../../../shared/services/logger/logger.service';
import { DataTable, LazyLoadEvent, Message, MenuItem } from 'primeng/primeng';
import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GridComponent } from '../../../../shared/UIComponents/GridComponent/grid.component';
import { BreadCrumbsService } from '../../../../shared/services/breadCrumbs/breadCrumbs.service';
@Component({
    selector: 'buildLevel-grid',
    templateUrl: 'app/body/Admin/Vehicle/BuildLevels/buildLevel.component.html'
})
export class BuildLevelComponent {
    //title = "BuildLevel Grid";
    gridData = [];
    confInfo:any = {};
    cols = [];
    gridFilter = {};
    msgs: Message[] = [];
    added: any;
    constructor(private breadCrumbsService: BreadCrumbsService,private service: BuildLevelService, private route: ActivatedRoute, private router: Router, private logger: LoggerService) {

    }
    
    breadcrumbs: MenuItem[];
    breadcrumbsHome: MenuItem;
    ngOnInit() {
    
        this.route.queryParams.subscribe(params => {

            this.added = params['page'];
            let breadC = this.breadCrumbsService.getBreadCrumbs();
            let buildLevelsBreadCrumb = breadC.filter(filter =>
                filter.pageName === 'BuildLevelsHomePage'
            )[0];

            console.log("BreadC -----", breadC);
            console.log("buildLevelsBreadCrumb ---------", buildLevelsBreadCrumb);
            this.breadcrumbs = [];
            this.breadcrumbs = buildLevelsBreadCrumb.items;

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
        this.router.navigate(['vehicle/buildLevel/details', id]);
    }
}