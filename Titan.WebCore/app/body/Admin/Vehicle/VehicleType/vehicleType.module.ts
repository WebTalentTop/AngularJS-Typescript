import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { VehicleTypeComponent } from "./vehicleType.component";
import { DataTableModule, MessagesModule, GrowlModule,BreadcrumbModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { GridModule} from '../../../../shared/UIComponents/GridComponent/grid.module';
import { BreadCrumbsService } from '../../../../shared/services/breadCrumbs/breadCrumbs.service';
import { VehicleTypeService } from '../../../../shared/services/vehicleType.service';

import vehicleTypeRoutes from "./vehicleType.routes";

@NgModule({
    imports: [CommonModule, DataTableModule, GridModule, vehicleTypeRoutes, MessagesModule,BreadcrumbModule, GrowlModule],
    providers: [VehicleTypeService,BreadCrumbsService],
    declarations: [VehicleTypeComponent]
})

export default class VehicleTypeModule{}