import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PermissionComponent } from "./permission.component";
import { DataTableModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { GridModule} from '../../../../shared/UIComponents/GridComponent/grid.module';

import { PermissionService } from '../../../../shared/services/permission.service';

import permissionRoutes from "./permission.routes";

@NgModule({
    imports: [CommonModule, DataTableModule, GridModule, permissionRoutes],
    providers: [PermissionService],
    declarations: [PermissionComponent]
})

export default class PermissionModule{}