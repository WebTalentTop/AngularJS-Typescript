import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProblemTrackingComponent } from "./problemtracking.component";
import { ProblemtrackingService } from '../../shared/services/problemtracking.service';
import { DataTableModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import problemTrackingRoutes from "./problemtracking.routes";

@NgModule({
    imports: [CommonModule, DataTableModule, problemTrackingRoutes],
    providers: [ProblemtrackingService],
    declarations: [ProblemTrackingComponent]
})

export default class ProblemTrackingModule{}