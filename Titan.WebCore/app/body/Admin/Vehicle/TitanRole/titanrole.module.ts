import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TitanRoleComponent } from "./titanrole.component";
import { DataTableModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import TitanRoleRoutes from "./titanrole.routes";
import { GridModule} from '../../../../shared/UIComponents/GridComponent/grid.module';

@NgModule({
    imports: [CommonModule, DataTableModule, GridModule, TitanRoleRoutes],
    declarations: [TitanRoleComponent]
})

export default class TitanRoleModule{}