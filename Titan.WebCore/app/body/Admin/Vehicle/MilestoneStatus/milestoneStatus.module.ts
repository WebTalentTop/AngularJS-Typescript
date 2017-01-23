import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MilestoneStatusComponent } from "./milestoneStatus.component";
import { ButtonModule, DataTableModule,MessagesModule, GrowlModule, BreadcrumbModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { GridModule} from '../../../../shared/UIComponents/GridComponent/grid.module';
import { BreadCrumbsService } from '../../../../shared/services/breadCrumbs/breadCrumbs.service';

import { MilestoneStatusService } from '../../../../shared/services/milestoneStatus.service';

import milestoneStatusRoutes from "./milestoneStatus.routes";

@NgModule({
    imports: [ButtonModule, CommonModule, DataTableModule, GridModule, milestoneStatusRoutes, MessagesModule, GrowlModule, BreadcrumbModule],
    providers: [MilestoneStatusService,BreadCrumbsService],
    declarations: [MilestoneStatusComponent]
})

export default class MilestoneStatusModule{}