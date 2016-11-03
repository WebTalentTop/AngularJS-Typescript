import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { ProjectDetailsMainComponent } from "./project-details-main.component";
 import  DetailsModule  from "./../Details/details.module";
// import  TorqueBookModule  from "./../TorqueBook/torque-book.module";
import { ProjectService} from '../project.service';

import { DataTableModule, ButtonModule, InputTextareaModule, InputTextModule, PanelModule, DropdownModule, TabViewModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import detailsRoutes from "./project-details-main.routes";

@NgModule({
    imports: [CommonModule, FormsModule, DataTableModule, InputTextareaModule, InputTextModule, PanelModule, 
        ButtonModule, DropdownModule, TabViewModule,DetailsModule//, TorqueBookModule
        , detailsRoutes],
    providers: [ProjectService],
    declarations: [ProjectDetailsMainComponent]
})

export default class ProjectDetailsMainModule { }


