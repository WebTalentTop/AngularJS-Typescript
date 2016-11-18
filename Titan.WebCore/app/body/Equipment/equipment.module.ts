import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {EquipmentComponent } from "./equipment.component";

import { DataTableModule, TabViewModule, InputTextModule,FileUploadModule, InputTextareaModule, DropdownModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { EquipmentService } from '../../shared/services/equipment.service';
import { GridModule } from '../../shared/UIComponents/GridComponent/grid.module';
import equipmentRoutes from "./equipment.routes";

@NgModule({
    imports: [CommonModule,RouterModule, DataTableModule, InputTextModule,DropdownModule, InputTextareaModule, TabViewModule,GridModule,equipmentRoutes],
     providers:[EquipmentService],
    declarations: [EquipmentComponent]
})

export default class EquipmentModule{}