import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MarketComponent } from "./market.component";
import { DataTableModule,MessagesModule, GrowlModule, BreadcrumbModule, ButtonModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { GridModule} from '../../../../shared/UIComponents/GridComponent/grid.module';
import { BreadCrumbsService } from '../../../../shared/services/breadCrumbs/breadCrumbs.service';

import { MarketService } from '../../../../shared/services/market.service';

import marketRoutes from "./market.routes";

@NgModule({
    imports: [CommonModule, DataTableModule, GridModule, marketRoutes,MessagesModule, GrowlModule,BreadcrumbModule, ButtonModule],
    providers: [MarketService, BreadCrumbsService],
    declarations: [MarketComponent]
})

export default class MarketModule{}