import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProjectService } from '../project.service'

@Component({
    moduleId: module.id,
    selector: 'project-detail-main',
    templateUrl: 'project-detail-main.component.html'
})
export class ProjectDetailMainComponent implements OnInit {

    //public ProjectDetails:any;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: ProjectService) {}


    ngOnInit() { 
        // this.route.params.forEach((params: Params) => {
        //     let projectId = params['projectId']; // (+) converts string 'id' to a number
        //     //let locale = params['locale'];

        //     this.service.getProjectDetails(projectId).subscribe(ProjectDetails => {this.ProjectDetails = ProjectDetails
        //         console.log(this.ProjectDetails);    
        //     });
        // });
    }
}