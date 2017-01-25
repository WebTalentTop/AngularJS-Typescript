import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TitanRoleComponent } from "./titanRole.component";
import { ButtonModule, DataTableModule, MessagesModule, GrowlModule,BreadcrumbModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { GridModule} from '../../../../shared/UIComponents/GridComponent/grid.module';
import { BreadCrumbsService } from '../../../../shared/services/breadCrumbs/breadCrumbs.service';
import { TitanRoleService } from '../../../../shared/services/titanRole.service';

import titanRoleRoutes from "./titanRole.routes";

@NgModule({
    imports: [ButtonModule, CommonModule, DataTableModule, GridModule, titanRoleRoutes, MessagesModule, GrowlModule,BreadcrumbModule],
    providers: [TitanRoleService,BreadCrumbsService],
    declarations: [TitanRoleComponent]
})

export default class TitanRoleModule{}