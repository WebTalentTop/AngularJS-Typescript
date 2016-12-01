import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TestStatusComponent } from "./testStatus.component";
import { DataTableModule, MessagesModule, GrowlModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { GridModule} from '../../../../shared/UIComponents/GridComponent/grid.module';

import { TestStatusService } from '../../../../shared/services/testStatus.service';

import testStatusRoutes from "./testStatus.routes";

@NgModule({
    imports: [CommonModule, DataTableModule, GridModule, testStatusRoutes, MessagesModule, GrowlModule],
    providers: [TestStatusService],
    declarations: [TestStatusComponent]
})

export default class TestStatusModule{}