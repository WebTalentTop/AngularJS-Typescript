import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {EquipmentComponent } from "./equipment.component";

import { CheckboxModule,DataTableModule, TabViewModule, InputTextModule, DialogModule, FileUploadModule, CalendarModule, InputTextareaModule, DropdownModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { EquipmentService } from '../../shared/services/equipment.service';
import { GridModule } from '../../shared/UIComponents/GridComponent/grid.module';
import equipmentRoutes from "./equipment.routes";

@NgModule({
    imports: [CheckboxModule,CommonModule, RouterModule, DataTableModule, DialogModule, InputTextModule, DropdownModule, CalendarModule, InputTextareaModule, TabViewModule, GridModule, equipmentRoutes],
     providers:[EquipmentService],
    declarations: [EquipmentComponent]
})

export default class EquipmentModule{}
