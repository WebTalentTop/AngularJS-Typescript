import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EquipmentComponent } from "./equipment.component";
import { DataTableModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import equipmentRoutes from "./equipment.routes";
import { EquipmentService } from '../../../../shared/services/Containers/EquipmentService/equipment.service';
import { GridModule} from '../../../../shared/UIComponents/GridComponent/grid.module';

@NgModule({
    imports: [CommonModule, DataTableModule, GridModule, equipmentRoutes],
    providers:[EquipmentService],
    declarations: [EquipmentComponent]
})

export default class EquipmentModule{}