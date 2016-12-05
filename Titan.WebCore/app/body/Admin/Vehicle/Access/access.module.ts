import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AccessComponent } from "./access.component";
import { DataTableModule, MessagesModule, GrowlModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { GridModule} from '../../../../shared/UIComponents/GridComponent/grid.module';

import { AccessService } from '../../../../shared/services/access.service';

import accessRoutes from "./access.routes";

@NgModule({
    imports: [CommonModule, DataTableModule, GridModule, accessRoutes, MessagesModule, GrowlModule],
    providers: [AccessService],
    declarations: [AccessComponent]
})

export default class AccessModule{}