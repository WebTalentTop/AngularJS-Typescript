import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BuildLevelsComponent } from "./buildlevels.component";

import { DataTableModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import buildlevelsRoutes from "./buildlevels.routes";

@NgModule({
    imports: [CommonModule, DataTableModule, buildlevelsRoutes],
    declarations: [BuildLevelsComponent]
})

export default class BuildLevelsModule{}