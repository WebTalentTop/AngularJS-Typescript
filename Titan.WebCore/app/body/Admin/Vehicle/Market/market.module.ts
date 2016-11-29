import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MarketComponent } from "./market.component";
import { DataTableModule,MessagesModule, GrowlModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { GridModule} from '../../../../shared/UIComponents/GridComponent/grid.module';

import { MarketService } from '../../../../shared/services/market.service';

import marketRoutes from "./market.routes";

@NgModule({
    imports: [CommonModule, DataTableModule, GridModule, marketRoutes,MessagesModule, GrowlModule],
    providers: [MarketService],
    declarations: [MarketComponent]
})

export default class MarketModule{}