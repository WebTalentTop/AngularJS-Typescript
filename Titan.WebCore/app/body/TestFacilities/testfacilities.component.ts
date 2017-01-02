import { TestFacilityService } from '../../shared/services/testfacility.service';
import { LoggerService } from './../../shared/services/logger.service';
import { LazyLoadEvent, Message, MessagesModule,MenuItem } from 'primeng/primeng';
import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router'
import { GridComponent } from '../../shared/UIComponents/GridComponent/grid.component';
import { BreadCrumbsService } from '../../shared/services/breadCrumbs/breadCrumbs.service';

@Component({
    selector: 'test-Facilities',
    templateUrl: 'app/body/TestFacilities/testFacilities.component.html'
})
export class TestFacilitiesComponent {
    // title = "Test Facilities";
    gridData = [];
    confInfo:any = {};
    cols = [];
    gridFilter = {};
    idField:string;
    linkFieldId: string;
    added: any;
    msgs: Message[] = [];

    constructor(private breadCrumbsService: BreadCrumbsService,private testFacilityService: TestFacilityService, private route: ActivatedRoute, private router:Router, private logger: LoggerService) {
        this.route.queryParams.subscribe(params => {

            this.added = params['page'];
            let breadC = this.breadCrumbsService.getBreadCrumbs();
            let testFacilitiesBreadCrumb = breadC.filter(filter =>
                filter.pageName === 'TestFacilitiesHomePage'
            )[0];

            console.log("BreadC -----", breadC);
            console.log("testFacilitiesBreadCrumb ---------", testFacilitiesBreadCrumb);
            this.breadcrumbs = [];
            this.breadcrumbs = testFacilitiesBreadCrumb.items;

            console.log("breadcurmbs ------", this.breadcrumbs);

            this.breadcrumbsHome = { routerLink: ['/'] };
        });

        if (this.added == 1) {
            this.msgs = [];
            this.msgs.push({ severity: 'Success', summary: 'Success', detail: '' });
        }
    }
        breadcrumbs: MenuItem[];
        breadcrumbsHome: MenuItem;
    ngOnInit() {
        let resData:any;
        this.testFacilityService.postGridData()
            .subscribe(res => {
                resData = res;
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
        this.router.navigate(['testFacilities/details', id]);
    }

   
}