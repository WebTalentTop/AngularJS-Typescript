import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AccessComponent } from "./access.component";
import { ButtonModule, DataTableModule, MessagesModule, GrowlModule,BreadcrumbModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { GridModule} from '../../../../shared/UIComponents/GridComponent/grid.module';
import { BreadCrumbsService } from '../../../../shared/services/breadCrumbs/breadCrumbs.service';
import { AccessService } from '../../../../shared/services/access.service';

import accessRoutes from "./access.routes";

@NgModule({
    imports: [ButtonModule, CommonModule, DataTableModule, GridModule, accessRoutes, MessagesModule, GrowlModule,BreadcrumbModule],
    providers: [AccessService,BreadCrumbsService],
    declarations: [AccessComponent]
})

export default class AccessModule{}