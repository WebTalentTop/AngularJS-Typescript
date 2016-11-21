import { ProjectService } from './../../shared/services/project.service';
import { LoggerService } from './../../shared/services/logger.service';
import { LazyLoadEvent } from 'primeng/primeng';
import { Component } from '@angular/core';
import {Router} from '@angular/router'
import { GridComponent } from '../../shared/UIComponents/GridComponent/grid.component'; 

@Component({
    selector: 'project',
    templateUrl: 'app/body/Project/project.component.html'
})

export class ProjectComponent {
    // title = "Project";
    gridData = [];
    confInfo: any = {};
    cols = [];
    gridFilter = {};
    idField:string ;

    constructor(private service: ProjectService, private router:Router, private logger: LoggerService) {

    }

    ngOnInit() {
        let resData: any;
        this.service.postGridData()
            .subscribe(res => {
                console.log("inside proj grid");
                resData = res;
                this.gridData = res.Data;
                this.cols = res.Configuration.Columns;
                this.confInfo = res.Configuration;
            });
    }
    navigateDetails(id:string){
        this.router.navigate(['project/detailsmain', id]);
    }


}