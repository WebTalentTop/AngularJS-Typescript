import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PlatformComponent } from "./platform.component";

import { DataTableModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import platformRoutes from "./platform.routes";


import { GridModule} from '../../../../shared/UIComponents/GridComponent/grid.module';

@NgModule({
    imports: [CommonModule, DataTableModule,GridModule, platformRoutes],
    declarations: [PlatformComponent]
})

export default class PlatformModule{}