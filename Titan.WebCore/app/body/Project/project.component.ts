import { ProjectService } from './../../shared/services/project.service';
import { LoggerService } from '../../shared/services/logger/logger.service';
import { LazyLoadEvent } from 'primeng/primeng';
import { Component } from '@angular/core';
import {Router} from '@angular/router'
import { GridComponent } from '../../shared/UIComponents/GridComponent/grid.component'; 
import { TitanUserProfileService } from '../../shared/services/titanUserProfile.service';
import {IUserProfile} from "../../shared/services/definitions/IUserProfile";
@Component({
    selector: 'project',
    templateUrl: 'app/body/Project/project.component.html'
})

export class ProjectComponent {
    // title = "Project";
    currentUser:IUserProfile;
    gridData = [];
    confInfo: any = {};
    cols = [];
    gridFilter = {};
    idField:string ;

    constructor(
        private service: ProjectService,
        private router:Router,
        private logger: LoggerService,
        private titanUserProfileService:TitanUserProfileService) {
            this.titanUserProfileService.getCurrentUserProfile()
                .subscribe(res => {
                    this.currentUser = res.result;
                })
    }

    ngOnInit() {
        let resData: any;
        this.service.postGridData()
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