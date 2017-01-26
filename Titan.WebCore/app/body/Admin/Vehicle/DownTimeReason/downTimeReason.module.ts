import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DownTimeReasonComponent } from "./downTimeReason.component";
import { ButtonModule, DataTableModule, MessagesModule, GrowlModule,BreadcrumbModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { GridModule} from '../../../../shared/UIComponents/GridComponent/grid.module';
import { BreadCrumbsService } from '../../../../shared/services/breadCrumbs/breadCrumbs.service';
import { DownTimeReasonService } from '../../../../shared/services/downTimeReason.service';

import downTimeReasonRoutes from "./downTimeReason.routes";

@NgModule({
    imports: [ButtonModule, CommonModule, DataTableModule, GridModule, downTimeReasonRoutes, MessagesModule,BreadcrumbModule, GrowlModule],
    providers: [DownTimeReasonService,BreadCrumbsService],
    declarations: [DownTimeReasonComponent]
})

export default class DownTimeReasonModule{}