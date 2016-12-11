import { ProcedureService } from './../../shared/services/procedure.service';
import { LoggerService } from './../../shared/services/logger.service';
import { LazyLoadEvent } from 'primeng/primeng';
import { Component } from '@angular/core';
import {Router} from '@angular/router'
import { GridComponent } from '../../shared/UIComponents/GridComponent/grid.component';

@Component({
    selector: 'test-template',
    templateUrl: 'app/body/Procedure/procedure.component.html'
})
export class ProcedureComponent {
    // title = "Test Template";
    gridData = [];
    confInfo:any = {};
    cols = [];
    gridFilter = {};
    idField:string;
    linkFieldId:string;

    constructor(private service: ProcedureService, private router:Router,  private logger: LoggerService) {

    }

    ngOnInit() {
        let resData:any;
        this.service.postGridData()
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
        console.log("----- Procedure Navigate Details -----", id);
        this.router.navigate(['procedure/details', id]);
    }

   
}