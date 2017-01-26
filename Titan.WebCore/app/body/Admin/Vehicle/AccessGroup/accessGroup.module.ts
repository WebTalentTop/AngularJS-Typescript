import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AccessGroupComponent } from "./accessGroup.component";
import { ButtonModule, DataTableModule, MessagesModule, GrowlModule,BreadcrumbModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { GridModule} from '../../../../shared/UIComponents/GridComponent/grid.module';
import { BreadCrumbsService } from '../../../../shared/services/breadCrumbs/breadCrumbs.service';
import { AccessGroupService } from '../../../../shared/services/accessGroup.service';

import accessGroupRoutes from "./accessGroup.routes";

@NgModule({
    imports: [ButtonModule, CommonModule, DataTableModule, GridModule, accessGroupRoutes, MessagesModule, GrowlModule,BreadcrumbModule],
    providers: [AccessGroupService,BreadCrumbsService],
    declarations: [AccessGroupComponent]
})

export default class AccessGroupModule{}