import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MilestoneTypeComponent } from "./milestoneType.component";
import { DataTableModule, MessagesModule, GrowlModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { GridModule} from '../../../../shared/UIComponents/GridComponent/grid.module';

import { MilestoneTypeService } from '../../../../shared/services/milestoneType.service';

import milestoneTypeRoutes from "./milestoneType.routes";

@NgModule({
    imports: [CommonModule, DataTableModule, GridModule, milestoneTypeRoutes, MessagesModule, GrowlModule],
    providers: [MilestoneTypeService],
    declarations: [MilestoneTypeComponent]
})

export default class MilestoneTypeModule{}