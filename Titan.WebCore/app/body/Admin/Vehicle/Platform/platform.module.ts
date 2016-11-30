import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PlatformComponent } from "./platform.component";
import { DataTableModule, MessagesModule, GrowlModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { GridModule} from '../../../../shared/UIComponents/GridComponent/grid.module';

import { PlatformService } from '../../../../shared/services/platform.service';

import platformRoutes from "./platform.routes";

@NgModule({
    imports: [CommonModule, DataTableModule, GridModule, platformRoutes, MessagesModule, GrowlModule],
    providers: [PlatformService],
    declarations: [PlatformComponent]
})

export default class PlatformModule{}