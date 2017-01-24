import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StepFrequencyComponent } from "./stepFrequency.component";
import { ButtonModule, DataTableModule, MessagesModule, GrowlModule,BreadcrumbModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { GridModule} from '../../../../shared/UIComponents/GridComponent/grid.module';
import { BreadCrumbsService } from '../../../../shared/services/breadCrumbs/breadCrumbs.service';
import { StepFrequencyService } from '../../../../shared/services/stepFrequency.service';

import stepFrequencyRoutes from "./stepFrequency.routes";

@NgModule({
    imports: [ButtonModule, CommonModule, DataTableModule, GridModule, stepFrequencyRoutes, MessagesModule,BreadcrumbModule, GrowlModule],
    providers: [StepFrequencyService,BreadCrumbsService],
    declarations: [StepFrequencyComponent]
})

export default class StepFrequencyModule{}