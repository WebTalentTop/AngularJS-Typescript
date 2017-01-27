import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DataTable, SelectItem, Header, Footer, TabViewModule, LazyLoadEvent, ButtonModule, InputTextareaModule, InputTextModule, PanelModule, FileUploadModule, MessagesModule, Message, DropdownModule, GrowlModule, MenuItem } from 'primeng/primeng';
import { MarketService } from '../../../shared/services/market.service'
import { ModelYearService } from '../../../shared/services/modelYear.service'
import { ModelNameService } from '../../../shared/services/modelName.service'
import { GradeService } from '../../../shared/services/grade.service'
import { PlatformService } from '../../../shared/services/platform.service'
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
    public selectedPlatformId: any;
    msgs: Message[] = [];
    markets: SelectItem[];
    modelYears: any;
    modelNames: any;
    grades: any;
    platforms: any;
   
    public ProjectDetails:any;
    public projectId:string; 
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: ProjectService,
        private gradeService: GradeService,
        private marketService: MarketService,
        private modelNameService: ModelNameService,
        private modelYearService: ModelYearService,
        private platformservice: PlatformService
      


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
            this.getPlatforms();
            this.service.getProjectDetails(this.projectId).subscribe(ProjectDetails => {
                this.ProjectDetails = ProjectDetails.result;
                this.ProjectDetails.plannedStartDate = new Date(this.ProjectDetails.plannedStartDate);
                this.ProjectDetails.plannedEndDate = new Date(this.ProjectDetails.plannedEndDate);
                this.ProjectDetails.actualStartDate = new Date(this.ProjectDetails.actualStartDate);
                this.ProjectDetails.actualEndDate = new Date(this.ProjectDetails.actualEndDate);
                this.selectedGradeId = this.ProjectDetails.gradeId;
                this.selectedModelYearId = this.ProjectDetails.modelYearId;
                this.selectedModelNameId = this.ProjectDetails.modelNameId;
                this.selectedPlatformId = this.ProjectDetails.platformId;
                this.ProjectDetails.id = this.projectId;
               
                this.service.getMarketListById(this.projectId).subscribe(projectMarkets => {
                    // if (projectMarkets.$values.) {
                   // string[] sc = new string[];
                   // this.selectedMarketId.forEach(s)
                 //   let stringArray = new Array<string>();
                   // stringArray = projectMarkets.$values;
                    //stringArray.forEach(s=>s.)
                    this.selectedMarketId = projectMarkets.$values;
                   // }
                });

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
                //resultMap.push({
                //    label: "--Select--",
                //    value: null
                //});
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
    onPlatformChange(event) {
        this.selectedPlatformId = event.value;
    }
    getPlatforms() {
        //    userRoles
        this.platformservice.getAllPlatforms().subscribe(response => {
            this.platforms = new Array();
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
                this.platforms = resultMap;
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
  
    onSubmit() {

        this.ProjectDetails.gradeId = this.selectedGradeId;
        this.ProjectDetails.modelYearId = this.selectedModelYearId;
        this.ProjectDetails.modelNameId = this.selectedModelNameId;
        this.ProjectDetails.platformId = this.selectedPlatformId;
        this.service.putProjectDetails(this.ProjectDetails).subscribe(ProjectDetails => {
            console.log(ProjectDetails);
            this.service.postAddMarket(this.projectId, this.selectedMarketId).subscribe(res => {
                console.log(res);
                if (res.isSuccess)
                {
                    this.msgs = [];
                    this.msgs.push({ severity: 'success', summary: 'Saved', detail: '' });
                }

            });
            });
    }
}