import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { VehicleComponent } from "./vehicle.component";

import { RouterModule } from "@angular/router";
import vehicleRoutes from "./vehicle.routes";

@NgModule({
    imports: [CommonModule, vehicleRoutes],
    declarations: [VehicleComponent]
})

export default class VehicleModule{}