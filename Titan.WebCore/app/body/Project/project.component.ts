import { ProjectService } from './../../shared/services/Containers/ProjectService/project.service';
import { LoggerService } from '../../shared/services/logger/logger.service';
import { LazyLoadEvent, Message, MenuItem } from 'primeng/primeng';
import { Component } from '@angular/core';
import {Router} from '@angular/router'
import { titanApiUrl } from '../../shared/services/apiurlconst/titanapiurl';
import { GridComponent } from '../../shared/UIComponents/GridComponent/grid.component';
import { TitanUserProfileService } from '../../shared/services/titanUserProfile.service';
import {IUserProfile} from "../../shared/services/definitions/IUserProfile";
import { UserProfileService } from "../../shared/services/userProfile.service";
import { BreadCrumbsService } from '../../shared/services/breadCrumbs/breadCrumbs.service';
@Component({
    selector: 'project',
    templateUrl: 'app/body/Project/project.component.html'
})

export class ProjectComponent {
    // title = "Project";
    currentUser: IUserProfile;
    gridData = [];
    confInfo: any = {};
    cols = [];
    gridFilter = {};
	idField: string;
    msgs: Message[];
  
    uploadedFiles: any[] = [];
    breadcrumbs: MenuItem[];
    breadcrumbsHome: MenuItem;

    constructor(
        private breadCrumbsService: BreadCrumbsService,
        private service: ProjectService,
        private router: Router,
        private logger: LoggerService,
        private userProfileService: UserProfileService) {
        
        this.currentUser = this.userProfileService.userProfile;
        console.log(this.currentUser);
    }

    ngOnInit() {
        this.logger.logConsole("Project is loaded --------", "yippie");
        let resData: any;
        this.service.postGridData()
            .subscribe(res => {
                resData = res;
                this.gridData = res.Data;
                this.cols = res.Configuration.Columns;
                this.confInfo = res.Configuration;
            });
            let breadC = this.breadCrumbsService.getBreadCrumbs();
            let projectBreadCrumb = breadC.filter(filter =>
                filter.pageName === 'ProjectHomePage')[0];

            this.breadcrumbs = [];
            this.breadcrumbs = projectBreadCrumb.items;

            this.breadcrumbsHome = { routerLink: ['/'] };
    }
    downloadAttachment(attachment) {

        window.open(titanApiUrl + '/ImportExport/downloadtemplate');
    }
    navigateDetails(id: string) {
        this.router.navigate(['project/detailsmain', id]);
    }
    onUpload(event) {
          this.msgs = [];
          this.msgs.push({ severity: 'info', summary: 'File Uploaded', detail: '' });

      }
}
