import { TestTemplateService } from './../../shared/services/testTemplate.service';
import { LoggerService } from './../../shared/services/logger/logger.service';
import { LazyLoadEvent } from 'primeng/primeng';
import { Component } from '@angular/core';
import {Router} from '@angular/router'
import { GridComponent } from '../../shared/UIComponents/GridComponent/grid.component';

@Component({
    selector: 'test-template',
    templateUrl: 'app/body/TestTemplate/testtemplate.component.html'
})
export class TestTemplateComponent {
    // title = "Test Template";
    gridData = [];
    confInfo:any = {};
    cols = [];
    gridFilter = {};
    idField:string;
    linkFieldId:string;

    constructor(private service: TestTemplateService, private router:Router,  private logger: LoggerService) {

    }

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
        this.router.navigate(['testtemplate/details', id]);
    }

   
}