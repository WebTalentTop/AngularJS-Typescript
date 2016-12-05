import { MilestoneEventService } from '../../../../shared/services/milestoneEvent.service';
import { LoggerService } from '../../../../shared/services/logger.service';
import { DataTable, LazyLoadEvent, Message, MessagesModule } from 'primeng/primeng';
import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GridComponent } from '../../../../shared/UIComponents/GridComponent/grid.component'

@Component({
    selector: 'milestoneEvent-grid',
    templateUrl: 'app/body/Admin/Vehicle/MilestoneEvent/milestoneEvent.component.html'
})
export class MilestoneEventComponent {
    //title = "MilestoneEvent Grid";
    gridData = [];
    confInfo:any = {};
    cols = [];
    gridFilter = {};
    msgs: Message[] = [];
    added: any;
    constructor(private service: MilestoneEventService, private route: ActivatedRoute, private router: Router, private logger: LoggerService) {

    }
    
    ngOnInit() {
    
        this.route.queryParams.subscribe(params => {

            this.added = params['page'];
           
        });

        if (this.added == 1) {
            this.msgs = [];
            this.msgs.push({ severity: 'success', summary: 'Added', detail: '' });
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
        this.router.navigate(['vehicle/milestoneEvent/details', id]);
    }
}