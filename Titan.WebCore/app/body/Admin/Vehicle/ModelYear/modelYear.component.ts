import { ModelYearService } from '../../../../shared/services/modelYear.service';
import { LoggerService } from '../../../../shared/services/logger/logger.service';
import { DataTable, LazyLoadEvent, Message, MessagesModule,MenuItem } from 'primeng/primeng';
import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GridComponent } from '../../../../shared/UIComponents/GridComponent/grid.component';
import { BreadCrumbsService } from '../../../../shared/services/breadCrumbs/breadCrumbs.service';

@Component({
    selector: 'modelYear-grid',
    templateUrl: 'app/body/Admin/Vehicle/ModelYear/modelYear.component.html'
})
export class ModelYearComponent {
    //title = "ModelYear Grid";
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
        private service: ModelYearService, 
        private route: ActivatedRoute, 
        private router: Router, 
        private logger: LoggerService
        ) {

    }
    
    ngOnInit() {
    
        this.route.queryParams.subscribe(params => {

            this.added = params['page'];
           let breadC = this.breadCrumbsService.getBreadCrumbs();
            let modelYearBreadCrumb = breadC.filter(filter =>
                filter.pageName === 'ModelYearHomePage'
            )[0];

            console.log("BreadC -----", breadC);
            console.log("modelYearBreadCrumb ---------", modelYearBreadCrumb);
            this.breadcrumbs = [];
            this.breadcrumbs = modelYearBreadCrumb.items;

            console.log("breadcurmbs ------", this.breadcrumbs);

            this.breadcrumbsHome = { routerLink: ['/'] };
        });

        if (this.added == 1) {
            this.msgs = [];
            this.msgs.push({ severity: 'Success', summary: 'Added', detail: '' });
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
        this.router.navigate(['admin/vehicle/modelYear/details', id]);
    }
}