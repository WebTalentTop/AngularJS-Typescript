import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ShiftComponent } from "./shift.component";
import { DataTableModule,MessagesModule, GrowlModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { GridModule} from '../../../../shared/UIComponents/GridComponent/grid.module';

import { ShiftService } from '../../../../shared/services/shift.service';

import shiftRoutes from "./shift.routes";

@NgModule({
    imports: [CommonModule, DataTableModule, GridModule, shiftRoutes,MessagesModule, GrowlModule],
    providers: [ShiftService],
    declarations: [ShiftComponent]
})

export default class ShiftModule{}