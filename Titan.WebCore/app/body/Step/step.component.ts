import { StepService } from '../../shared/services/step.service';
import { LoggerService } from '../../shared/services/logger/logger.service';
import { LazyLoadEvent } from 'primeng/primeng';
import { Component } from '@angular/core';
import {Router} from '@angular/router'
import { GridComponent } from '../../shared/UIComponents/GridComponent/grid.component';


@Component({
    selector: 'step',
    templateUrl: 'app/body/Step/step.component.html'
})
export class StepComponent {
    // title = "Test Facilities";
    gridData = [];
    confInfo:any = {};
    cols = [];
    gridFilter = {};
    idField:string;
    linkFieldId:string;

    constructor(private service: StepService, private router:Router) {

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
        this.router.navigate(['step/details', id]);
    }

   
}