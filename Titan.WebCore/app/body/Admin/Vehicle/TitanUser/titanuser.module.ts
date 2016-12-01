import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TitanUserComponent } from "./titanUser.component";
import { DataTableModule, MessagesModule, GrowlModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { GridModule} from '../../../../shared/UIComponents/GridComponent/grid.module';

import { TitanUserService } from '../../../../shared/services/titanUser.service';

import titanUserRoutes from "./titanUser.routes";

@NgModule({
    imports: [CommonModule, DataTableModule, GridModule, titanUserRoutes, MessagesModule, GrowlModule],
    providers: [TitanUserService],
    declarations: [TitanUserComponent]
})

export default class TitanUserModule{}