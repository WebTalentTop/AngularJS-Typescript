import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GradeComponent } from "./grade.component";

import { DataTableModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import gradeRoutes from "./grade.routes";

@NgModule({
    imports: [CommonModule, DataTableModule, gradeRoutes],
    declarations: [GradeComponent]
})

export default class GradeModule{}