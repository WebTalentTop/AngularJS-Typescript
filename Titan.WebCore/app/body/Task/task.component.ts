import { TestFacilityService } from '../../shared/services/Containers/TestFacilityService/testfacility.service';
import { TaskService } from '../../shared/services/task.service';
import { LoggerService } from './../../shared/services/logger/logger.service';
import { PanelModule, LazyLoadEvent, Message, MessagesModule } from 'primeng/primeng';
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
    hasThermoTasks: boolean = false;
    hasPartsTasks: boolean = false;
    idField:string;
    linkFieldId: string;
    testNumber: string;
    taskId: any;
    added: any;
    pendingThermoTasks: any;
    pendingPartsTasks: any;
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
    onDelete(id) {
        console.log('------event------------', event)
        this.taskservice.onDeletetask(id).subscribe(res => {
            if (res.success)
            {
                this.getTaskDetailsByUserId();
            }
        });       
    }
    getTaskDetailsByUserId()
    {
        this.taskservice.gettasksbyuserid()
            .subscribe(res => {
                if (res.result.pendingTasks.$values.length != 0) {
                    if (((res.result.pendingTasks.$values).filter(pt => pt.showModule == "SensorModule")).length > 0) {
                        this.hasThermoTasks = true;
                        this.pendingThermoTasks = res.result.pendingTasks.$values;
                    }
                    if (((res.result.pendingTasks.$values).filter(pt => pt.showModule === "PartsModule")).length > 0) {
                        this.hasPartsTasks = true;
                        this.pendingPartsTasks = res.result.pendingTasks.$values;
                    }

                }

                this.allTasks = res.result.allTasks.$values;
                this.testRequestId = res.result[0].entityId;

            });
    }
    ngOnInit() {
        let resData: any;
        this.getTaskDetailsByUserId();
    }

    navigateDetails(id:string){
        this.router.navigate(['testfacilities/details', id]);
    }


}
