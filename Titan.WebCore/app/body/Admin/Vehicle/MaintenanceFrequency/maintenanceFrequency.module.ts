import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaintenanceFrequencyComponent } from "./maintenanceFrequency.component";
import { ButtonModule, DataTableModule, MessagesModule, GrowlModule,BreadcrumbModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { GridModule} from '../../../../shared/UIComponents/GridComponent/grid.module';
import { BreadCrumbsService } from '../../../../shared/services/breadCrumbs/breadCrumbs.service';
import { MaintenanceFrequencyService } from '../../../../shared/services/maintenanceFrequency.service';

import maintenanceFrequencyRoutes from "./maintenanceFrequency.routes";

@NgModule({
    imports: [ButtonModule, CommonModule, DataTableModule, GridModule, maintenanceFrequencyRoutes,BreadcrumbModule, MessagesModule, GrowlModule],
    providers: [MaintenanceFrequencyService,BreadCrumbsService],
    declarations: [MaintenanceFrequencyComponent]
})

export default class MaintenanceFrequencyModule{}