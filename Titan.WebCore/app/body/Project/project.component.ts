import { ProjectService } from './../../shared/services/project.services';
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
    title = "Project Grid";
    gridData = [];
    confInfo: any = {};
    cols = [];
    gridFilter = {};
    idField:string ;

    constructor(private dataService: ProjectService, private router:Router, private logger: LoggerService) {

    }

    onProjectDetailsClick(){
        let projectId = '53FE9592-1A9B-07D0-85D7-006A30BCD348';
        console.log(projectId);
        // Pass along the hero id if available
        // so that the HeroList component can select that hero.
        //this.router.navigate(['/hero', hero.id]);
        this.router.navigate(['/detailsmain', { projectId: projectId }]);
    }

    ngOnInit() {
        let resData: any;
        this.dataService.postGridData()
            .subscribe(res => {
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