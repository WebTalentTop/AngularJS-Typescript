import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UnitsComponent } from "./units.component";
import { DataTableModule, MessagesModule, GrowlModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { GridModule} from '../../../../shared/UIComponents/GridComponent/grid.module';

import { UnitsService } from '../../../../shared/services/units.service';

import unitsRoutes from "./units.routes";

@NgModule({
    imports: [CommonModule, DataTableModule, GridModule, unitsRoutes, MessagesModule, GrowlModule],
    providers: [UnitsService],
    declarations: [UnitsComponent]
})

export default class UnitsModule{}