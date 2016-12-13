import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HolidayComponent } from "./holiday.component";
import { DataTableModule, MessagesModule, GrowlModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { GridModule} from '../../../../shared/UIComponents/GridComponent/grid.module';

import { HolidayService } from '../../../../shared/services/holiday.service';

import holidayRoutes from "./Holiday.routes";

@NgModule({
    imports: [CommonModule, DataTableModule, GridModule, holidayRoutes, MessagesModule, GrowlModule],
    providers: [HolidayService],
    declarations: [HolidayComponent]
})

export default class HolidayModule{}