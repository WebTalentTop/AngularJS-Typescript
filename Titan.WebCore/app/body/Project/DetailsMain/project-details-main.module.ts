import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { ProjectDetailsMainComponent } from "./project-details-main.component";
import {DetailsModule} from '../Details/details.module';
import {TorqueBookModule} from '../TorqueBook/torque-book.module';
import {TemplatesModule} from '../Templates/templates.module';
//import  TorqueBookModule  from "./../TorqueBook/torque-book.module";
//import  DetailsModule  from "./../Details/details.module";
//import  TempModule  from "./../Temp/temp.module";
import { ProjectService} from './../../../shared/services/project.service';
//import { TorqueBookComponent } from "./../TorqueBook/torque-book.component"
//import { DetailsComponent } from "./../Details/details.component"

import { DataTableModule, ButtonModule, InputTextareaModule, InputTextModule, PanelModule, DropdownModule, TabViewModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import detailsRoutes from "./project-details-main.routes";

@NgModule({
    imports: [CommonModule, FormsModule, DataTableModule, InputTextareaModule, InputTextModule, PanelModule, 
        ButtonModule, DropdownModule, TabViewModule, DetailsModule, TemplatesModule, TorqueBookModule, detailsRoutes],// DetailsModule, TempModule],
    providers: [ProjectService],
    declarations: [ProjectDetailsMainComponent],
    exports:  [DetailsModule, TorqueBookModule,TemplatesModule, CommonModule]
})

export default class ProjectDetailsMainModule { }


