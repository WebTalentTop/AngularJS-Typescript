import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ModelYearComponent } from "./modelYear.component";
import { DataTableModule, MessagesModule, GrowlModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { GridModule} from '../../../../shared/UIComponents/GridComponent/grid.module';

import { ModelYearService } from '../../../../shared/services/modelYear.service';

import modelYearRoutes from "./modelYear.routes";

@NgModule({
    imports: [CommonModule, DataTableModule, GridModule, modelYearRoutes, MessagesModule, GrowlModule],
    providers: [ModelYearService],
    declarations: [ModelYearComponent]
})

export default class ModelYearModule{}