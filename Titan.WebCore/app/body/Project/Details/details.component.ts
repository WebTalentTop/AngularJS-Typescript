import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProjectService } from './../../../shared/services/Containers/ProjectService/project.service'

@Component({    
    selector: 'project-detail',
    templateUrl: 'app/body/Project/Details/details.component.html'
})
export class DetailsComponent {

    public ProjectDetails:any;
    public projectId:string; 
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: ProjectService) {}


    ngOnInit() { 
        this.route.params.forEach((params: Params) => {
            this.route.params.subscribe(params => console.log(params['id']));

            this.projectId = params['id']; // (+) converts string 'id' to a number
            //let locale = params['locale'];

            this.service.getProjectDetails(this.projectId).subscribe(ProjectDetails => {
                this.ProjectDetails = ProjectDetails.result;
                this.ProjectDetails.plannedStartDate = new Date(this.ProjectDetails.plannedStartDate);
                this.ProjectDetails.plannedEndDate = new Date(this.ProjectDetails.plannedEndDate);
                this.ProjectDetails.id = this.projectId;    
            });
        });
    }

    
    onSubmit(){
        this.service.putProjectDetails(this.ProjectDetails).subscribe(ProjectDetails => {console.log(ProjectDetails);  
            });
    }
}