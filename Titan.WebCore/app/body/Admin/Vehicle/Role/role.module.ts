import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RoleComponent } from "./role.component";
import { DataTableModule, MessagesModule, GrowlModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { GridModule} from '../../../../shared/UIComponents/GridComponent/grid.module';

import { RoleService } from '../../../../shared/services/role.service';

import roleRoutes from "./role.routes";

@NgModule({
    imports: [CommonModule, DataTableModule, GridModule, roleRoutes, MessagesModule, GrowlModule],
    providers: [RoleService],
    declarations: [RoleComponent]
})

export default class RoleModule{}