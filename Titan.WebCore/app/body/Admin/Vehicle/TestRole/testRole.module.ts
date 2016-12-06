import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TestRoleComponent } from "./testRole.component";
import { DataTableModule, MessagesModule, GrowlModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { GridModule} from '../../../../shared/UIComponents/GridComponent/grid.module';

import { TestRoleService } from '../../../../shared/services/testRole.service';

import testRoleRoutes from "./testRole.routes";

@NgModule({
    imports: [CommonModule, DataTableModule, GridModule, testRoleRoutes, MessagesModule, GrowlModule],
    providers: [TestRoleService],
    declarations: [TestRoleComponent]
})

export default class TestRoleModule{}