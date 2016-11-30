import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ScheduleComponent } from "./schedule.component";
import { DataTableModule,MessagesModule, GrowlModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { GridModule} from '../../../../shared/UIComponents/GridComponent/grid.module';

import { ScheduleService } from '../../../../shared/services/schedule.service';

import scheduleRoutes from "./schedule.routes";

@NgModule({
    imports: [CommonModule, DataTableModule, GridModule, scheduleRoutes,MessagesModule, GrowlModule],
    providers: [ScheduleService],
    declarations: [ScheduleComponent]
})

export default class ScheduleModule{}