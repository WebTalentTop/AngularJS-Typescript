import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PriorityComponent } from "./priority.component";
import { ButtonModule, DataTableModule, MessagesModule, GrowlModule,BreadcrumbModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { GridModule} from '../../../../shared/UIComponents/GridComponent/grid.module';
import { BreadCrumbsService } from '../../../../shared/services/breadCrumbs/breadCrumbs.service';
import { PriorityService } from '../../../../shared/services/priority.service';

import priorityRoutes from "./priority.routes";

@NgModule({
    imports: [ButtonModule, CommonModule, DataTableModule, GridModule, priorityRoutes, MessagesModule,BreadcrumbModule ,GrowlModule],
    providers: [PriorityService,BreadCrumbsService],
    declarations: [PriorityComponent]
})

export default class PriorityModule{}