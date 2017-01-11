import { TestFacilityService } from '../../shared/services/Containers/TestFacilityService/testFacility.service';
import { UserService } from '../../shared/services/user.service';
import { LoggerService } from './../../shared/services/logger/logger.service';
import { PanelModule, LazyLoadEvent, Message, MessagesModule } from 'primeng/primeng';
import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router'

import { titanApiUrl } from './../../shared/services/apiurlconst/titanapiurl';

@Component({
    selector: 'user',
    templateUrl: 'app/body/User/user.component.html'
})
export class UserComponent {
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
    allUsers: any;
    msgs: Message[] = [];
    constructor(private service: TestFacilityService, private userservice: UserService, private route: ActivatedRoute, private router: Router) {
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
        let tenantId = "FDC1A91F-75F4-4B2F-BA8A-9C2D731EBE4D";
        this.userservice.getUsersByTenantId(tenantId)
            .subscribe(res => {                               
                    this.allUsers = res.result.$values;                 
            });

    }

    navigateDetails(id:string){
        this.router.navigate(['user/details', id]);
    }


}
