import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FrameNumberComponent } from "./framenumber.component";

import { DataTableModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import framenumberRoutes from "./framenumber.routes";

@NgModule({
    imports: [CommonModule, DataTableModule, framenumberRoutes],
    declarations: [FrameNumberComponent]
})

export default class FrameNumberModule{}