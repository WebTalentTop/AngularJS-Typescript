import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StepFrequencyComponent } from "./stepFrequency.component";
import { DataTableModule, MessagesModule, GrowlModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { GridModule} from '../../../../shared/UIComponents/GridComponent/grid.module';

import { StepFrequencyService } from '../../../../shared/services/stepFrequency.service';

import stepFrequencyRoutes from "./stepFrequency.routes";

@NgModule({
    imports: [CommonModule, DataTableModule, GridModule, stepFrequencyRoutes, MessagesModule, GrowlModule],
    providers: [StepFrequencyService],
    declarations: [StepFrequencyComponent]
})

export default class StepFrequencyModule{}