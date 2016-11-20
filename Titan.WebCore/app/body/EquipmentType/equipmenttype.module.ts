import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {EquipmentTypeComponent } from "./equipmenttype.component";

import { DataTableModule, TabViewModule, InputTextModule,DialogModule,FileUploadModule, InputTextareaModule, DropdownModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { EquipmentTypeService } from '../../shared/services/equipmentType.service';
import { GridModule } from '../../shared/UIComponents/GridComponent/grid.module';
import equipmenttypeRoutes from "./equipmenttype.routes";

@NgModule({
    imports: [CommonModule,RouterModule, DataTableModule, DialogModule,InputTextModule,DropdownModule, InputTextareaModule, TabViewModule,GridModule, equipmenttypeRoutes],
    providers:[EquipmentTypeService],
    declarations: [EquipmentTypeComponent]
})

export default class EquipmenttypeModule{}