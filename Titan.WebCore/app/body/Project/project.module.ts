import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProjectComponent } from "./project.component";
//import { DetailsComponent } from "./Details/details.component";
import { RouterModule } from "@angular/router";
import { DataTableModule } from 'primeng/primeng';
import { BreadCrumbsService } from '../../shared/services/breadCrumbs/breadCrumbs.service';
import { ProjectService } from '../../shared/services/Containers/ProjectService/project.service';
import { GridModule} from '../../shared/UIComponents/GridComponent/grid.module';
//import {router} from './project-routing.module';
import projectRoutes from "./project.routes";
import { FormsModule, Validator} from '@angular/forms';
import { BreadcrumbModule, GrowlModule, FileUploadModule, CalendarModule, ButtonModule, InputTextareaModule, InputTextModule, PanelModule, DropdownModule,
    TabViewModule, TreeTableModule, TreeNode, SharedModule, DialogModule, Header, Footer } from 'primeng/primeng';
import {UserProfileService} from "../../shared/services/userProfile.service";
//import { TorqueBookComponent } from "./TorqueBook/torque-book.component";
//import { TemplatesComponent } from "./Templates/templates.component";
//import { TorquesheetService } from './../../shared/services/torquesheet.service'

@NgModule({
    imports: [BreadcrumbModule, GrowlModule, FileUploadModule, CalendarModule, DropdownModule, GridModule, TabViewModule, ButtonModule, InputTextareaModule, InputTextModule,
        PanelModule, CommonModule, DataTableModule, projectRoutes, FormsModule, TreeTableModule,
        SharedModule, DialogModule],
    declarations: [ProjectComponent],
    providers: [ProjectService,UserProfileService, BreadCrumbsService]
})

export default class ProjectModule { }
