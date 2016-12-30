import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProjectStatusComponent } from "./projectStatus.component";
import { DataTableModule, MessagesModule, GrowlModule, BreadcrumbModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { GridModule} from '../../../../shared/UIComponents/GridComponent/grid.module';
import { BreadCrumbsService } from '../../../../shared/services/breadCrumbs/breadCrumbs.service';

import { ProjectStatusService } from '../../../../shared/services/projectStatus.service';

import projectStatusRoutes from "./projectStatus.routes";

@NgModule({
    imports: [CommonModule, DataTableModule, GridModule, projectStatusRoutes, MessagesModule, GrowlModule,BreadcrumbModule],
    providers: [ProjectStatusService,BreadCrumbsService],
    declarations: [ProjectStatusComponent]
})

export default class ProjectStatusModule{}