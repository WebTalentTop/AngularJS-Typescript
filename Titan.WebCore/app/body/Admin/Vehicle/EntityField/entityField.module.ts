import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EntityFieldComponent } from "./entityField.component";
import { DataTableModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { GridModule} from '../../../../shared/UIComponents/GridComponent/grid.module';

import { EntityFieldService } from '../../../../shared/services/entityField.service';

import entityFieldRoutes from "./entityField.routes";

@NgModule({
    imports: [CommonModule, DataTableModule, GridModule, entityFieldRoutes],
    providers: [EntityFieldService],
    declarations: [EntityFieldComponent]
})

export default class EntityFieldModule{}