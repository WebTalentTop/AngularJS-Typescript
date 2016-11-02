import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WorkRequestComponent } from "./workrequest.component";

import { DataTableModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import workRequestRoutes from "./workrequest.routes";

@NgModule({
    imports: [CommonModule, DataTableModule, workRequestRoutes],
    declarations: [WorkRequestComponent]
})

export default class WorkRequestModule{}