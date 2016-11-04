import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MarketComponent } from "./market.component";
import { DataTableModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { GridModule} from '../../../../shared/UIComponents/GridComponent/grid.module';
import marketRoutes from "./market.routes";

@NgModule({
    imports: [CommonModule, DataTableModule, GridModule, marketRoutes],
    declarations: [MarketComponent]
})

export default class MarketModule{}