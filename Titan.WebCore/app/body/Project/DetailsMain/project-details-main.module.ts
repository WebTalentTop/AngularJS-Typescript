import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { ProjectDetailsMainComponent } from "./project-details-main.component";
//import  TorqueBookModule  from "./../TorqueBook/torque-book.module";
//import  DetailsModule  from "./../Details/details.module";
//import  TempModule  from "./../Temp/temp.module";
import { ProjectService} from './../../../shared/services/project.services';
//import { TorqueBookComponent } from "./../TorqueBook/torque-book.component"
//import { DetailsComponent } from "./../Details/details.component"

import { DataTableModule, ButtonModule, InputTextareaModule, InputTextModule, PanelModule, DropdownModule, TabViewModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import detailsRoutes from "./project-details-main.routes";

@NgModule({
    imports: [CommonModule, FormsModule, DataTableModule, InputTextareaModule, InputTextModule, PanelModule, 
        ButtonModule, DropdownModule, TabViewModule, detailsRoutes],// DetailsModule, TempModule],
    providers: [ProjectService],
    declarations: [ProjectDetailsMainComponent]//,
    //exports:  [ CommonModule]
})

export default class ProjectDetailsMainModule { }


