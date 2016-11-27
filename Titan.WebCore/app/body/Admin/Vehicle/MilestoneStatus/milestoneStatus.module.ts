import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MilestoneStatusComponent } from "./milestoneStatus.component";
import { DataTableModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { GridModule} from '../../../../shared/UIComponents/GridComponent/grid.module';

import { MilestoneStatusService } from '../../../../shared/services/milestoneStatus.service';

import MilestoneStatusRoutes from "./milestoneStatus.routes";

@NgModule({
    imports: [CommonModule, DataTableModule, GridModule, MilestoneStatusRoutes],
    providers: [MilestoneStatusService],
    declarations: [MilestoneStatusComponent]
})

export default class MilestoneStatusModule{}