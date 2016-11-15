import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TitanRoleComponent } from "./titanrole.component";
import { DataTableModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import TitanRoleRoutes from "./titanrole.routes";
import { GridModule} from '../../../../shared/UIComponents/GridComponent/grid.module';
import { TitanRoleService } from '../../../../shared/services/titanrole.service';

@NgModule({
    imports: [CommonModule, DataTableModule, GridModule, TitanRoleRoutes],
    providers: [TitanRoleService],
    declarations: [TitanRoleComponent]
})

export default class TitanRoleModule{}