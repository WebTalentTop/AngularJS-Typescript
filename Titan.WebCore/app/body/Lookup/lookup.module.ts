import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LookupComponent } from "./lookup.component";

import { DataTableModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import lookupRoutes from "./lookup.routes";

@NgModule({
    imports: [CommonModule, DataTableModule, lookupRoutes],
    declarations: [LookupComponent]
})

export default class LookupModule{}