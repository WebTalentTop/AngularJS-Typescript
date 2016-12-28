import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TaskComponent } from "./task.component";

import { DataTableModule, TabViewModule, InputTextModule, InputTextareaModule, MessagesModule, DropdownModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { TestFacilityService } from '../../shared/services/testfacility.service';
import { TaskService } from '../../shared/services/task.service';
import { GridModule} from '../../shared/UIComponents/GridComponent/grid.module';
import taskRoutes from "./task.routes";

@NgModule({
    imports: [CommonModule, RouterModule, DataTableModule, InputTextModule, DropdownModule, MessagesModule, InputTextareaModule, TabViewModule,GridModule, taskRoutes],
    providers:[TestFacilityService, TaskService],
    declarations: [TaskComponent]
})

export default class TaskModule{}