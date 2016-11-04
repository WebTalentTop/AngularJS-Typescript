import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TitanUserComponent } from "./titanuser.component";
import { DataTableModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import TitanUserRoutes from "./titanuser.routes";
import { GridModule} from '../../../../shared/UIComponents/GridComponent/grid.module';

@NgModule({
    imports: [CommonModule, DataTableModule, GridModule, TitanUserRoutes],
    declarations: [TitanUserComponent]
})

export default class TitanUserModule{}