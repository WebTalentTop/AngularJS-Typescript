import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RoleComponent } from "./role.component";
import { ButtonModule, DataTableModule, MessagesModule, GrowlModule, BreadcrumbModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { GridModule} from '../../../../shared/UIComponents/GridComponent/grid.module';
import { BreadCrumbsService } from '../../../../shared/services/breadCrumbs/breadCrumbs.service';
import { RoleService } from '../../../../shared/services/role.service';

import roleRoutes from "./role.routes";

@NgModule({
    imports: [ButtonModule, CommonModule, DataTableModule, GridModule, roleRoutes, MessagesModule, GrowlModule, BreadcrumbModule],
    providers: [RoleService, BreadCrumbsService],
    declarations: [RoleComponent]
})

export default class RoleModule{}