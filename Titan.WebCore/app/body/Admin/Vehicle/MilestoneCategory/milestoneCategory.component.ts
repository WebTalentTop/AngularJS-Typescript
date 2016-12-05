import { MilestoneCategoryService } from '../../../../shared/services/milestoneCategory.service';
import { LoggerService } from '../../../../shared/services/logger.service';
import { DataTable, LazyLoadEvent, Message, MessagesModule } from 'primeng/primeng';
import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GridComponent } from '../../../../shared/UIComponents/GridComponent/grid.component'

@Component({
    selector: 'milestoneCategory-grid',
    templateUrl: 'app/body/Admin/Vehicle/MilestoneCategory/milestoneCategory.component.html'
})
export class MilestoneCategoryComponent {
    //title = "MilestoneCategory Grid";
    gridData = [];
    confInfo:any = {};
    cols = [];
    gridFilter = {};
    msgs: Message[] = [];
    added: any;
    constructor(private service: MilestoneCategoryService, private route: ActivatedRoute, private router: Router, private logger: LoggerService) {

    }
    
    ngOnInit() {
    
        this.route.queryParams.subscribe(params => {

            this.added = params['page'];
           
        });

        if (this.added == 1) {
            this.msgs = [];
            this.msgs.push({ severity: 'Success', summary: 'Success', detail: '' });
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
        this.router.navigate(['vehicle/milestoneCategory/details', id]);
    }
}