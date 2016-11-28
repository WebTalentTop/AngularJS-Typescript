import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ShiftComponent } from "./shift.component";
import { DataTableModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { GridModule} from '../../../../shared/UIComponents/GridComponent/grid.module';

import { ShiftService } from '../../../../shared/services/shift.service';

import shiftRoutes from "./shift.routes";

@NgModule({
    imports: [CommonModule, DataTableModule, GridModule, shiftRoutes],
    providers: [ShiftService],
    declarations: [ShiftComponent]
})

export default class ShiftModule{}