import { TestFacilityService } from '../../shared/services/Containers/TestFacilityService/testFacility.service';
import { UserService } from '../../shared/services/user.service';
import { UserProfileService } from '../../shared/services/userProfile.service';
import { IUserProfile } from '../../shared/services/definitions/IUserProfile';
import { LoggerService } from './../../shared/services/logger/logger.service';
import { PanelModule, LazyLoadEvent, Message, MessagesModule, MenuItem } from 'primeng/primeng';
import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { BreadCrumbsService } from '../../shared/services/breadCrumbs/breadCrumbs.service';

import { titanApiUrl } from './../../shared/services/apiurlconst/titanapiurl';

@Component({
    selector: 'user',
    templateUrl: 'app/body/User/user.component.html'
})
export class UserComponent {
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
    currentUser: IUserProfile;
    pendingTasks: any;
    allUsers: any;
    msgs: Message[] = [];

    breadcrumbs: MenuItem[];
    breadcrumbsHome: MenuItem;

    constructor(
        private breadCrumbsService: BreadCrumbsService,
        private service: TestFacilityService, 
        private userservice: UserService, 
        private userprofileservice: UserProfileService, 
        private route: ActivatedRoute, 
        private router: Router) {

            this.route.queryParams.subscribe(params => {

            this.added = params['page'];
            let breadC = this.breadCrumbsService.getBreadCrumbs();
            let userBreadCrumb = breadC.filter(filter =>
                filter.pageName === 'UserHomePage')[0];

            this.breadcrumbs = [];
            this.breadcrumbs = userBreadCrumb.items;

            this.breadcrumbsHome = { routerLink: ['/'] };
        });
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
        this.currentUser = this.userprofileservice.getCurrentUserProfile();
        let tenantId = this.currentUser.defaultTenantId;
        this.userservice.getUsersByTenantId(tenantId)
            .subscribe(res => {                               
                    this.allUsers = res.result.members.$values;                 
            });

    }

    navigateDetails(id:string){
        this.router.navigate(['user/details', id]);
    }


}
