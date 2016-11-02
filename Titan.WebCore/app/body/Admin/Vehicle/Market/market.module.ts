import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MarketComponent } from "./market.component";

import { DataTableModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import marketRoutes from "./market.routes";

@NgModule({
    imports: [CommonModule, DataTableModule, marketRoutes],
    declarations: [MarketComponent]
})

export default class MarketModule{}