import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EquipmentTypeComponent } from "./equipmenttype.component";
import { DataTableModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import equipmenttypeRoutes from "./equipmenttype.routes";
import { GridModule} from '../../../../shared/UIComponents/GridComponent/grid.module';

@NgModule({
    imports: [CommonModule, DataTableModule, GridModule, equipmenttypeRoutes],
    declarations: [EquipmentTypeComponent]
})

export default class EquipmentTypeModule{}