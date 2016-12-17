import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MilestoneStatusComponent } from "./milestoneStatus.component";
import { DataTableModule,MessagesModule, GrowlModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { GridModule} from '../../../../shared/UIComponents/GridComponent/grid.module';

import { MilestoneStatusService } from '../../../../shared/services/milestoneStatus.service';

import milestoneStatusRoutes from "./milestoneStatus.routes";

@NgModule({
    imports: [CommonModule, DataTableModule, GridModule, milestoneStatusRoutes, MessagesModule, GrowlModule],
    providers: [MilestoneStatusService],
    declarations: [MilestoneStatusComponent]
})

export default class MilestoneStatusModule{}