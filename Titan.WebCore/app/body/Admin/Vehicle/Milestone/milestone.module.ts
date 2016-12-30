import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MilestoneComponent } from "./milestone.component";
import { DataTableModule, MessagesModule, GrowlModule, BreadcrumbModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { GridModule} from '../../../../shared/UIComponents/GridComponent/grid.module';
import { BreadCrumbsService } from '../../../../shared/services/breadCrumbs/breadCrumbs.service';

import { MilestoneService } from '../../../../shared/services/milestone.service';

import milestoneRoutes from "./milestone.routes";

@NgModule({
    imports: [CommonModule, DataTableModule, GridModule, milestoneRoutes, MessagesModule, GrowlModule, BreadcrumbModule],
    providers: [MilestoneService,BreadCrumbsService],
    declarations: [MilestoneComponent]
})

export default class MilestoneModule{}