import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaintenanceFrequencyComponent } from "./maintenanceFrequency.component";
import { DataTableModule, MessagesModule, GrowlModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { GridModule} from '../../../../shared/UIComponents/GridComponent/grid.module';

import { MaintenanceFrequencyService } from '../../../../shared/services/maintenanceFrequency.service';

import maintenanceFrequencyRoutes from "./maintenanceFrequency.routes";

@NgModule({
    imports: [CommonModule, DataTableModule, GridModule, maintenanceFrequencyRoutes, MessagesModule, GrowlModule],
    providers: [MaintenanceFrequencyService],
    declarations: [MaintenanceFrequencyComponent]
})

export default class MaintenanceFrequencyModule{}