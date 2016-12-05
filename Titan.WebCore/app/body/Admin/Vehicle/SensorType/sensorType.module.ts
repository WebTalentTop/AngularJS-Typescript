import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SensorTypeComponent } from "./sensorType.component";
import { DataTableModule, MessagesModule, GrowlModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { GridModule} from '../../../../shared/UIComponents/GridComponent/grid.module';

import { SensorTypeService } from '../../../../shared/services/sensorType.service';

import sensorTypeRoutes from "./sensorType.routes";

@NgModule({
    imports: [CommonModule, DataTableModule, GridModule, sensorTypeRoutes, MessagesModule, GrowlModule],
    providers: [SensorTypeService],
    declarations: [SensorTypeComponent]
})

export default class SensorTypeModule{}