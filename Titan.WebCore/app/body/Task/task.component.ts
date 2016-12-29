import { TestFacilityService } from '../../shared/services/testfacility.service';
import { TaskService } from '../../shared/services/task.service';
import { LoggerService } from './../../shared/services/logger.service';
import { LazyLoadEvent, Message, MessagesModule } from 'primeng/primeng';
import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router'

import { titanApiUrl } from './../../shared/services/apiurlconst/titanapiurl';

@Component({
    selector: 'test-facilities',
    templateUrl: 'app/body/Task/task.component.html'
})
export class TaskComponent {
    // title = "Test Facilities";
    gridData = [];
    confInfo:any = {};
    cols = [];
    gridFilter = {};
    testRequestId: any;
    HasTasks: boolean = false;
    idField:string;
    linkFieldId: string;
    testNumber: string;
    taskId: any;
    added: any;
    pendingTasks: any;
    allTasks: any;
    msgs: Message[] = [];
    constructor(private service: TestFacilityService, private taskservice: TaskService, private route: ActivatedRoute, private router: Router) {
        //this.route.queryParams.subscribe(params => {

        //    this.added = params['page'];

        //});

        //if (this.added == 1) {
        //    this.msgs = [];
        //    this.msgs.push({ severity: 'Success', summary: 'Success', detail: '' });
        //}
    }

    ngOnInit() {
        let resData: any;
        this.taskservice.gettasksbyuserid()
            .subscribe(res => {
                if (res.result.pendingTasks.$values.length != 0) {
                    this.HasTasks = true
                }
                    this.pendingTasks = res.result.pendingTasks.$values;
                    this.allTasks = res.result.allTasks.$values;
                  //  this.taskId = res.result.id;
                    this.testRequestId = res.result[0].entityId; 
                    
                
                //resData = res;
                //this.gridData = res.Data;
                //this.cols = res.Configuration.Columns;
                ////console.log("-------- Cols --------", this.cols);
                //this.confInfo = res.Configuration;
                //console.log("------- Configuration --------", this.confInfo);
            });
       
    }

    navigateDetails(id:string){
        this.router.navigate(['testfacilities/details', id]);
    }

   
}