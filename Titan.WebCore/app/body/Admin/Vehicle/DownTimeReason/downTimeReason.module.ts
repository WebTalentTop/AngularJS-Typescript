import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DownTimeReasonComponent } from "./downTimeReason.component";
import { DataTableModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { GridModule} from '../../../../shared/UIComponents/GridComponent/grid.module';

import { DownTimeReasonService } from '../../../../shared/services/downTimeReason.service';

import downTimeReasonRoutes from "./downTimeReason.routes";

@NgModule({
    imports: [CommonModule, DataTableModule, GridModule, downTimeReasonRoutes],
    providers: [DownTimeReasonService],
    declarations: [DownTimeReasonComponent]
})

export default class DownTimeReasonModule{}