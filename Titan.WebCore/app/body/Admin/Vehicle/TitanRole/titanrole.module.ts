import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TitanRoleComponent } from "./titanRole.component";
import { DataTableModule, MessagesModule, GrowlModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { GridModule} from '../../../../shared/UIComponents/GridComponent/grid.module';

import { TitanRoleService } from '../../../../shared/services/titanRole.service';

import titanRoleRoutes from "./titanRole.routes";

@NgModule({
    imports: [CommonModule, DataTableModule, GridModule, titanRoleRoutes, MessagesModule, GrowlModule],
    providers: [TitanRoleService],
    declarations: [TitanRoleComponent]
})

export default class TitanRoleModule{}