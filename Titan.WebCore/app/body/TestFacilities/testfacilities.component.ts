import { TestFacilityService } from '../../shared/services/TestFacilityService/testfacility.service';
import { LoggerService } from './../../shared/services/logger/logger.service';
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
                filter.pageName === 'TestFacilitiesHomePage')[0];

            this.breadcrumbs = [];
            this.breadcrumbs = testFacilitiesBreadCrumb.items;

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
                this.confInfo = res.Configuration;
            });
    }

    navigateDetails(id:string){
        this.router.navigate(['testFacilities/details', id]);
    }

   
}