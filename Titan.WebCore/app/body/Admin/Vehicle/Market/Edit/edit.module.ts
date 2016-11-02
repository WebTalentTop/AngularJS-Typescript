import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EditComponent } from "./edit.component";


import { DataTableModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import editRoutes from "./edit.routes";

@NgModule({
    imports: [CommonModule, DataTableModule, editRoutes],
    declarations: [EditComponent]
})

export default class EditModule{}