import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StepTypeComponent } from "./stepType.component";
import { ButtonModule, DataTableModule, MessagesModule, GrowlModule,BreadcrumbModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { GridModule} from '../../../../shared/UIComponents/GridComponent/grid.module';
import { BreadCrumbsService } from '../../../../shared/services/breadCrumbs/breadCrumbs.service';
import { StepTypeService } from '../../../../shared/services/stepType.service';

import stepTypeRoutes from "./stepType.routes";

@NgModule({
    imports: [ButtonModule, CommonModule, DataTableModule, GridModule, stepTypeRoutes, MessagesModule,BreadcrumbModule, GrowlModule],
    providers: [StepTypeService,BreadCrumbsService],
    declarations: [StepTypeComponent]
})

export default class StepTypeModule{}