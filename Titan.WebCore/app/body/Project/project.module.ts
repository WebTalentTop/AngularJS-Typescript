//import { NgModule } from "@angular/core";
//import { CommonModule } from "@angular/common";
//import { ProjectComponent } from "./project.component";
//import { RouterModule } from "@angular/router";
//import { DataTableModule } from 'primeng/primeng';
//import { GridModule} from '../../shared/UIComponents/GridComponent/grid.module';
//import projectRoutes from './project.routes';
//import {ProjectService} from './project.service'
////import ProjectDetailsMainModule from './DetailsMain/project-details-main.module'
//import {ProjectDetailsMainComponent} from './DetailsMain/project-details-main.component'
//import {DetailsComponent} from './Details/details.component'
//import {  ButtonModule, InputTextareaModule, InputTextModule, PanelModule, DropdownModule, TabViewModule } from 'primeng/primeng';

//@NgModule({
//    imports: [CommonModule, DataTableModule, GridModule,//ProjectDetailsMainModule, 
//        projectRoutes, ButtonModule, InputTextareaModule, InputTextModule, PanelModule, DropdownModule, TabViewModule],
//    declarations: [ProjectComponent, ProjectDetailsMainComponent, DetailsComponent],
//    providers:[ProjectService] 
//})

//export default class ProjectModule { }

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProjectComponent } from "./project.component";
import { DetailsComponent } from "./Details/details.component";
import { ProjectDetailsMainComponent } from "./DetailsMain/project-details-main.component";
import { RouterModule } from "@angular/router";
import { DataTableModule } from 'primeng/primeng';

import { ProjectService } from '../../shared/services/project.services';
import { GridModule} from '../../shared/UIComponents/GridComponent/grid.module';
//import {router} from './project-routing.module';
import projectRoutes from "./project.routes";
import { FormsModule, Validator} from '@angular/forms';
import { CalendarModule, ButtonModule, InputTextareaModule, InputTextModule, PanelModule, DropdownModule,
    TabViewModule, TreeTableModule, TreeNode, SharedModule, DialogModule, Header, Footer } from 'primeng/primeng';
import { TorqueBookComponent } from "./TorqueBook/torque-book.component";
import { TemplatesComponent } from "./Templates/templates.component";
import { TorquesheetService } from './../../shared/services/torquesheet.service'

@NgModule({
    imports: [CalendarModule, DropdownModule, GridModule, TabViewModule, ButtonModule, InputTextareaModule, InputTextModule,
        PanelModule, CommonModule, DataTableModule, projectRoutes, FormsModule, TreeTableModule,
        SharedModule, DialogModule],
    declarations: [ProjectComponent, DetailsComponent, TemplatesComponent, ProjectDetailsMainComponent, TorqueBookComponent],
    providers: [ProjectService, TorquesheetService] 
})

export default class ProjectModule {  }

