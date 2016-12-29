import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StepComponent } from "./step.component";
import { DataTableModule, MessagesModule, GrowlModule, BreadcrumbModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { GridModule} from '../../../../shared/UIComponents/GridComponent/grid.module';
import { BreadCrumbsService } from '../../../../shared/services/breadCrumbs/breadCrumbs.service';

import { StepService } from '../../../../shared/services/step.service';

import stepRoutes from "./step.routes";

@NgModule({
    imports: [CommonModule, DataTableModule, GridModule, stepRoutes, MessagesModule, BreadcrumbModule, GrowlModule],
    providers: [StepService],
    declarations: [StepComponent]
})

export default class StepModule{}