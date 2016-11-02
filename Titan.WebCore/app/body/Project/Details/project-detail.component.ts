import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProjectService } from '../project.service'

@Component({
    moduleId: module.id,
    selector: 'project-detail',
    templateUrl: 'project-detail.component.html'
})
export class ProjectDetailComponent implements OnInit {

    public ProjectDetails:any;
    public projectId:string; 
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: ProjectService) {}


    ngOnInit() { 
        this.route.params.forEach((params: Params) => {
            this.projectId = params['projectId']; // (+) converts string 'id' to a number
            //let locale = params['locale'];

            this.service.getProjectDetails(this.projectId).subscribe(ProjectDetails => {
                this.ProjectDetails = ProjectDetails;
                this.ProjectDetails.id = this.projectId;
                console.log(this.ProjectDetails);    
            });
        });
    }

    
    onSubmit(){
        console.log("inside");

        this.service.putProjectDetails(this.ProjectDetails).subscribe(ProjectDetails => {console.log(ProjectDetails);  
            });
    }
}