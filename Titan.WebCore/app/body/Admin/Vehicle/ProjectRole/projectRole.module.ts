import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProjectRoleComponent } from "./projectRole.component";
import { DataTableModule,MessagesModule,BreadcrumbModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { GridModule} from '../../../../shared/UIComponents/GridComponent/grid.module';
import { BreadCrumbsService } from '../../../../shared/services/breadCrumbs/breadCrumbs.service';
import { ProjectRoleService } from '../../../../shared/services/projectRole.service';

import projectRoleRoutes from "./projectRole.routes";

@NgModule({
    imports: [CommonModule, DataTableModule, GridModule, projectRoleRoutes, MessagesModule,BreadcrumbModule],
    providers: [ProjectRoleService, BreadCrumbsService],
    declarations: [ProjectRoleComponent]
})

export default class ProjectRoleModule{}