import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StepTypeComponent } from "./stepType.component";
import { DataTableModule, MessagesModule, GrowlModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { GridModule} from '../../../../shared/UIComponents/GridComponent/grid.module';

import { StepTypeService } from '../../../../shared/services/stepType.service';

import stepTypeRoutes from "./stepType.routes";

@NgModule({
    imports: [CommonModule, DataTableModule, GridModule, stepTypeRoutes, MessagesModule, GrowlModule],
    providers: [StepTypeService],
    declarations: [StepTypeComponent]
})

export default class StepTypeModule{}