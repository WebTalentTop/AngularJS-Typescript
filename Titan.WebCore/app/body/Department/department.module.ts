import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DepartmentComponent } from "./department.component";

import { DataTableModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import departmentRoutes from "./department.routes";

@NgModule({
    imports: [CommonModule, DataTableModule, departmentRoutes],
    declarations: [DepartmentComponent]
})

export default class DepartmentModule{}