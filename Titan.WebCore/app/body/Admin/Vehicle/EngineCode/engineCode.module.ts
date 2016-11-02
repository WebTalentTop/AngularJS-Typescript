import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EngineCodeComponent } from "./enginecode.component";

import { DataTableModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import enginecodeRoutes from "./enginecode.routes";

@NgModule({
    imports: [CommonModule, DataTableModule, enginecodeRoutes],
    declarations: [EngineCodeComponent]
})

export default class EngineCodeModule{}