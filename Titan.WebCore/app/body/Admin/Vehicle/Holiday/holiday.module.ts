import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HolidayComponent } from "./holiday.component";
import { DataTableModule, MessagesModule, GrowlModule ,BreadcrumbModule} from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { GridModule} from '../../../../shared/UIComponents/GridComponent/grid.module';
import { BreadCrumbsService } from '../../../../shared/services/breadCrumbs/breadCrumbs.service';

import { HolidayService } from '../../../../shared/services/holiday.service';

import holidayRoutes from "./holiday.routes";

@NgModule({
    imports: [CommonModule, DataTableModule, GridModule, holidayRoutes, BreadcrumbModule ,MessagesModule, GrowlModule],
    providers: [HolidayService,BreadCrumbsService],
    declarations: [HolidayComponent]
})

export default class HolidayModule{}