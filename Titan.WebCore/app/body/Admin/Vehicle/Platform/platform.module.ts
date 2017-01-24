import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PlatformComponent } from "./platform.component";
import { ButtonModule, DataTableModule, MessagesModule, GrowlModule,BreadcrumbModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { GridModule} from '../../../../shared/UIComponents/GridComponent/grid.module';
import { BreadCrumbsService } from '../../../../shared/services/breadCrumbs/breadCrumbs.service';

import { PlatformService } from '../../../../shared/services/platform.service';

import platformRoutes from "./platform.routes";

@NgModule({
    imports: [ButtonModule, CommonModule, DataTableModule, GridModule, platformRoutes, MessagesModule, GrowlModule,BreadcrumbModule],
    providers: [PlatformService,BreadCrumbsService],
    declarations: [PlatformComponent]
})

export default class PlatformModule{}