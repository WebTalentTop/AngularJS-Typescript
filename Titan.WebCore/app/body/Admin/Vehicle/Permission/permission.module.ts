import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PermissionComponent } from "./permission.component";
import { ButtonModule, DataTableModule,MessagesModule, GrowlModule,BreadcrumbModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { GridModule} from '../../../../shared/UIComponents/GridComponent/grid.module';
import { BreadCrumbsService } from '../../../../shared/services/breadCrumbs/breadCrumbs.service';
import { PermissionService } from '../../../../shared/services/permission.service';

import permissionRoutes from "./permission.routes";

@NgModule({
    imports: [ButtonModule, CommonModule, DataTableModule, GridModule, permissionRoutes,MessagesModule, GrowlModule,BreadcrumbModule],
    providers: [PermissionService,BreadCrumbsService],
    declarations: [PermissionComponent]
})

export default class PermissionModule{}