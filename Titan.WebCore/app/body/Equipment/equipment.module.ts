import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EquipmentComponent } from "./equipment.component";

import { DataTableModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import equipmentRoutes from './equipment.routes';

@NgModule({
    imports: [CommonModule, DataTableModule, equipmentRoutes],
    declarations: [EquipmentComponent]
})

export default class EquipmentModule{}