import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PlatformComponent } from "./platform.component";
import { DataTableModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import platformRoutes from "./platform.routes";
import { PlatformService } from '../../../../shared/services/platform.service';


import { GridModule} from '../../../../shared/UIComponents/GridComponent/grid.module';

@NgModule({
    imports: [CommonModule, DataTableModule,GridModule, platformRoutes],
    providers: [PlatformService],
    declarations: [PlatformComponent]
})

export default class PlatformModule{}