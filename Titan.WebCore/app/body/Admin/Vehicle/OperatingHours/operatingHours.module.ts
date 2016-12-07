import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OperatingHoursComponent } from "./operatingHours.component";
import { DataTableModule, MessagesModule, GrowlModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { GridModule} from '../../../../shared/UIComponents/GridComponent/grid.module';

import { OperatingHoursService } from '../../../../shared/services/operatingHours.service';

import operatingHoursRoutes from "./operatingHours.routes";

@NgModule({
    imports: [CommonModule, DataTableModule, GridModule, operatingHoursRoutes, MessagesModule, GrowlModule],
    providers: [OperatingHoursService],
    declarations: [OperatingHoursComponent]
})

export default class ProjectStatusModule{}