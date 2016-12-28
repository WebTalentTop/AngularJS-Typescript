import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TorqueSheetComponent } from "./torque-sheet.component";

import { DataTableModule, TabViewModule, InputTextModule, InputTextareaModule, DropdownModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { TorquesheetService } from '../../shared/services/torquesheet.service';
import { GridModule} from '../../shared/UIComponents/GridComponent/grid.module';
import TorqueSheetRoutes from "./torque-sheet.routes";

@NgModule({
    imports: [CommonModule, RouterModule, DataTableModule, InputTextModule, DropdownModule, InputTextareaModule,
        TabViewModule, GridModule, TorqueSheetRoutes],
    providers: [TorquesheetService],
    declarations: [TorqueSheetComponent]
})

export default class TorqueSheetModule{}