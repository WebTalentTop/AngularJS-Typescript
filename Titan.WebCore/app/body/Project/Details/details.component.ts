import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DataTable, Header, Footer, TabViewModule, LazyLoadEvent, ButtonModule, InputTextareaModule, InputTextModule, PanelModule, FileUploadModule, MessagesModule, Message, DropdownModule, GrowlModule, MenuItem } from 'primeng/primeng';
import { MarketService } from '../../../shared/services/market.service'
import { ModelYearService } from '../../../shared/services/modelYear.service'
import { ModelNameService } from '../../../shared/services/modelName.service'
import { GradeService } from '../../../shared/services/grade.service'

import { ProjectService } from './../../../shared/services/Containers/ProjectService/project.service';

@Component({    
    selector: 'project-detail',
    templateUrl: 'app/body/Project/Details/details.component.html'
})
export class DetailsComponent {

    public selectedMarketId: any;
    public selectedModelYearId: any;
    public selectedModelNameId: any;
    public selectedGradeId: any;
   
    markets: any;
    modelYears: any;
    modelNames: any;
    grades: any;
   
    public ProjectDetails:any;
    public projectId:string; 
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: ProjectService,
        private gradeService: GradeService,
        private marketService: MarketService,
        private modelNameService: ModelNameService,
        private modelYearService: ModelYearService
      


    ) { }


    ngOnInit() { 
        this.route.params.forEach((params: Params) => {
            this.route.params.subscribe(params => console.log(params['id']));

            this.projectId = params['id']; // (+) converts string 'id' to a number
            //let locale = params['locale'];
            this.getMarkets();
            this.getModelYears();
            this.getModelNames();
            this.getGrades();
           
            this.service.getProjectDetails(this.projectId).subscribe(ProjectDetails => {
                this.ProjectDetails = ProjectDetails.result;
                this.ProjectDetails.plannedStartDate = new Date(this.ProjectDetails.plannedStartDate);
                this.ProjectDetails.plannedEndDate = new Date(this.ProjectDetails.plannedEndDate);
                this.ProjectDetails.actualStartDate = new Date(this.ProjectDetails.actualStartDate);
                this.ProjectDetails.actualEndDate = new Date(this.ProjectDetails.actualEndDate);

                this.ProjectDetails.id = this.projectId;    
            });
        });
    }
    onMarketChange(event) {
        this.selectedMarketId = event.value;
    }
    getMarkets() {
        //    userRoles
        this.marketService.getAllMarkets().subscribe(response => {
            this.markets = new Array();
            if (response != null) {
                var resultMap = new Array();
                resultMap.push({
                    label: "--Select--",
                    value: null
                });
                for (let template of response.$values) {
                    var temp = {
                        label: template.name,
                        value: template.id
                    }
                    resultMap.push(temp);
                }
                this.markets = resultMap;
            }
            console.log(response);
        });
    }
    onModelYearChange(event) {
        this.selectedModelYearId = event.value;
    }
    getModelYears() {
        //    userRoles
        this.modelYearService.getAllModelYear().subscribe(response => {
            this.modelYears = new Array();
            if (response != null) {
                var resultMap = new Array();
                resultMap.push({
                    label: "--Select--",
                    value: null
                });
                for (let template of response.$values) {
                    var temp = {
                        label: template.name,
                        value: template.id
                    }
                    resultMap.push(temp);
                }
                this.modelYears = resultMap;
            }
            console.log(response);
        });
    }
    onModelNameChange(event) {
        this.selectedModelNameId = event.value;
    }
    getModelNames() {
        //    userRoles
        this.modelNameService.getAllModelNames().subscribe(response => {
            this.modelNames = new Array();
            if (response != null) {
                var resultMap = new Array();
                resultMap.push({
                    label: "--Select--",
                    value: null
                });
                for (let template of response.$values) {
                    var temp = {
                        label: template.name,
                        value: template.id
                    }
                    resultMap.push(temp);
                }
                this.modelNames = resultMap;
            }
            console.log(response);
        });
    }
    onGradeChange(event) {
        this.selectedGradeId = event.value;
    }
    getGrades() {
        //    userRoles
        this.gradeService.getAllGrades().subscribe(response => {
            this.grades = new Array();
            if (response != null) {
                var resultMap = new Array();
                resultMap.push({
                    label: "--Select--",
                    value: null
                });
                for (let template of response.$values) {
                    var temp = {
                        label: template.name,
                        value: template.id
                    }
                    resultMap.push(temp);
                }
                this.grades = resultMap;
            }
            console.log(response);
        });
    }
  
    onSubmit(){
        this.service.putProjectDetails(this.ProjectDetails).subscribe(ProjectDetails => {console.log(ProjectDetails);  
            });
    }
}