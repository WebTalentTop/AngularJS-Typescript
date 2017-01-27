import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { VehicleComponent } from "./vehicle.component";
import { VehicleService } from './../../shared/services/vehicle.service';
import { DataTableModule, BreadcrumbModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import vehicleRoutes from "./vehicle.routes";
import { BreadCrumbsService } from '../../shared/services/breadCrumbs/breadCrumbs.service';

@NgModule({
    imports: [CommonModule, DataTableModule, vehicleRoutes, BreadcrumbModule],
    providers: [VehicleService, BreadCrumbsService],
    declarations: [VehicleComponent]
})

export default class VehicleModule{}