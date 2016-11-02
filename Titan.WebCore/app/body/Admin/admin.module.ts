import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminComponent } from "./admin.component";
import { DataTableModule } from 'primeng/primeng';
import { FormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import adminRoutes from "./admin.routes";

import { InputTextareaModule, InputTextModule, PanelModule, DropdownModule } from 'primeng/primeng';

@NgModule({
    imports: [CommonModule, DataTableModule, adminRoutes, FormsModule, InputTextModule, PanelModule, adminRoutes],
    declarations: [AdminComponent]
})

export default class AdminModule{}