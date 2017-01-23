import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MilestoneEventComponent } from "./milestoneEvent.component";
import { BreadcrumbModule, DataTableModule,MessagesModule, GrowlModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { GridModule} from '../../../../shared/UIComponents/GridComponent/grid.module';

import { MilestoneEventService } from '../../../../shared/services/milestoneEvent.service';

import milestoneEventRoutes from "./milestoneEvent.routes";

@NgModule({
    imports: [BreadcrumbModule, CommonModule, DataTableModule, GridModule, milestoneEventRoutes, MessagesModule, GrowlModule],
    providers: [MilestoneEventService],
    declarations: [MilestoneEventComponent]
})

export default class MilestoneEventModule{}