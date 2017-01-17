import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EquipmentComponent } from "./equipment.component";

import { CheckboxModule,DataTableModule, TabViewModule, InputTextModule, InputTextareaModule, MessagesModule, DropdownModule, 
    ButtonModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { EquipmentService } from '../../shared/services/Containers/EquipmentService/equipment.service';
import { GridModule} from '../../shared/UIComponents/GridComponent/grid.module';
import equipmentRoutes from "./equipment.routes";

@NgModule({
    imports: [CheckboxModule,CommonModule, RouterModule, DataTableModule, InputTextModule, DropdownModule, MessagesModule, 
    InputTextareaModule, TabViewModule, GridModule, ButtonModule, equipmentRoutes],
    providers:[EquipmentService],
    declarations: [EquipmentComponent]
})

export default class EquipmentModule{}