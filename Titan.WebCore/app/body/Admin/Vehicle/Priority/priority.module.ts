import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PriorityComponent } from "./priority.component";
import { DataTableModule, MessagesModule, GrowlModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { GridModule} from '../../../../shared/UIComponents/GridComponent/grid.module';

import { PriorityService } from '../../../../shared/services/priority.service';

import priorityRoutes from "./priority.routes";

@NgModule({
    imports: [CommonModule, DataTableModule, GridModule, priorityRoutes, MessagesModule, GrowlModule],
    providers: [PriorityService],
    declarations: [PriorityComponent]
})

export default class PriorityModule{}