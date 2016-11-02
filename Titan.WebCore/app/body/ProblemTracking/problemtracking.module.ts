import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProblemTrackingComponent } from "./problemtracking.component";

import { DataTableModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import problemTrackingRoutes from "./problemtracking.routes";

@NgModule({
    imports: [CommonModule, DataTableModule, problemTrackingRoutes],
    declarations: [ProblemTrackingComponent]
})

export default class ProblemTrackingModule{}