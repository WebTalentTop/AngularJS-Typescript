import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AccessGroupComponent } from "./accessGroup.component";
import { DataTableModule, MessagesModule, GrowlModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { GridModule} from '../../../../shared/UIComponents/GridComponent/grid.module';

import { AccessGroupService } from '../../../../shared/services/accessGroup.service';

import accessGroupRoutes from "./accessGroup.routes";

@NgModule({
    imports: [CommonModule, DataTableModule, GridModule, accessGroupRoutes, MessagesModule, GrowlModule],
    providers: [AccessGroupService],
    declarations: [AccessGroupComponent]
})

export default class AccessGroupModule{}