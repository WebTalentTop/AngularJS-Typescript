import { TestTemplateService } from '../../shared/services/Containers/TestTemplateService/testTemplate.service';
import { LoggerService } from './../../shared/services/logger/logger.service';
import { LazyLoadEvent, MenuItem } from 'primeng/primeng';
import { Component } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router'
import { GridComponent } from '../../shared/UIComponents/GridComponent/grid.component';
import { BreadCrumbsService } from '../../shared/services/breadCrumbs/breadCrumbs.service';

@Component({
    selector: 'test-Template',
    templateUrl: 'app/body/TestTemplate/testTemplate.component.html'
})
export class TestTemplateComponent {
    // title = "Test Template";
    gridData = [];
    confInfo:any = {};
    cols = [];
    gridFilter = {};
    idField:string;
    linkFieldId:string;
     added: any;

    constructor(
        private breadCrumbsService: BreadCrumbsService,
        private service: TestTemplateService, 
        private router:Router,  
        private route: ActivatedRoute, 
        private logger: LoggerService) {
            this.route.queryParams.subscribe(params => {

            this.added = params['page'];
            let breadC = this.breadCrumbsService.getBreadCrumbs();
            let testTemplateBreadCrumb = breadC.filter(filter =>
                filter.pageName === 'TestTemplateHomePage')[0];

            this.breadcrumbs = [];
            this.breadcrumbs = testTemplateBreadCrumb.items;

            this.breadcrumbsHome = { routerLink: ['/'] };
        });

    }
    breadcrumbs: MenuItem[];
    breadcrumbsHome: MenuItem;

    ngOnInit() {
        let resData:any;
        this.service.postGridData()
            .subscribe(res => {
                resData = res;
                this.gridData = res.Data;
                this.cols = res.Configuration.Columns;
                this.confInfo = res.Configuration;
            });
    }

    navigateDetails(id:string){
        this.router.navigate(['testTemplate/details', id]);
    }


}
