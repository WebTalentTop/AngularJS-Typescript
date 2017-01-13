import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TaskComponent } from "./task.component";

import { DataTableModule, TabViewModule, InputTextModule, InputTextareaModule, MessagesModule, PanelModule, DropdownModule, ButtonModule } from 'primeng/primeng';
import {EditorModule,SharedModule} from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { TestFacilityService } from '../../shared/services/Containers/TestFacilityService/testfacility.service';
import { TaskService } from '../../shared/services/task.service';
import taskRoutes from "./task.routes";

@NgModule({
    imports: [EditorModule, SharedModule, CommonModule, RouterModule, DataTableModule, InputTextModule, PanelModule, DropdownModule, MessagesModule, ButtonModule, InputTextareaModule, TabViewModule, taskRoutes],
    providers:[TestFacilityService, TaskService],
    declarations: [TaskComponent]
})

export default class TaskModule{}
