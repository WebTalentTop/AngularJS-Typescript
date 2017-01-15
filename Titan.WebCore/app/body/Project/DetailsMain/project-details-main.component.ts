import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProjectService } from './../../../shared/services/Containers/ProjectService/project.service';
import { TemplatesComponent} from '../Templates/templates.component';
import { TeamInformationComponent} from '../TeamInformation/teaminformation.component';
//import { DetailsComponent } from "./../Details/details.component"
import { ProjectScheduleComponent } from '../ProjectSchedule/projectSchedule.component';

@Component({
    //moduleId: module.id,
    selector: 'project-detail-main',
    templateUrl: 'app/body/Project/DetailsMain/project-details-main.component.html'
})
export class ProjectDetailsMainComponent {
    id:string;
    //public ProjectDetails:any;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: ProjectService) {}


    ngOnInit() {
          this.route.params.subscribe(params => this.id = params['id']);
        // this.route.params.forEach((params: Params) => {
        //     let projectId = params['projectId']; // (+) converts string 'id' to a number
        //     //let locale = params['locale'];

        //     this.service.getProjectDetails(projectId).subscribe(ProjectDetails => {this.ProjectDetails = ProjectDetails
        //         console.log(this.ProjectDetails);
        //     });
        // });
    }
}
