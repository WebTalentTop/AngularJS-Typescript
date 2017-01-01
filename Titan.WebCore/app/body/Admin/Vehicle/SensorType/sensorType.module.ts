import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SensorTypeComponent } from "./sensorType.component";
import { DataTableModule, MessagesModule, GrowlModule,BreadcrumbModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { GridModule} from '../../../../shared/UIComponents/GridComponent/grid.module';
import { BreadCrumbsService } from '../../../../shared/services/breadCrumbs/breadCrumbs.service';
import { SensorTypeService } from '../../../../shared/services/sensorType.service';

import sensorTypeRoutes from "./sensorType.routes";

@NgModule({
    imports: [CommonModule, DataTableModule, GridModule, sensorTypeRoutes,BreadcrumbModule, MessagesModule, GrowlModule],
    providers: [SensorTypeService,BreadCrumbsService],
    declarations: [SensorTypeComponent]
})

export default class SensorTypeModule{}