import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OperatingHoursComponent } from "./operatingHours.component";
import { ButtonModule, DataTableModule, MessagesModule, GrowlModule,BreadcrumbModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { GridModule} from '../../../../shared/UIComponents/GridComponent/grid.module';
import { BreadCrumbsService } from '../../../../shared/services/breadCrumbs/breadCrumbs.service';
import { OperatingHoursService } from '../../../../shared/services/operatingHours.service';

import operatingHoursRoutes from "./operatingHours.routes";

@NgModule({
    imports: [ButtonModule, CommonModule, DataTableModule, GridModule, operatingHoursRoutes, MessagesModule, GrowlModule,BreadcrumbModule],
    providers: [OperatingHoursService,BreadCrumbsService],
    declarations: [OperatingHoursComponent]
})

export default class ProjectStatusModule{}