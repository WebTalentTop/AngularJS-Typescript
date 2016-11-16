import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TestStatusComponent } from "./testStatus.component";
import { DataTableModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import testStatusRoutes from "./testStatus.routes";
import { TestStatusService } from '../../../../shared/services/testStatus.service';
import { GridModule} from '../../../../shared/UIComponents/GridComponent/grid.module';

@NgModule({
    imports: [CommonModule, DataTableModule, GridModule, testStatusRoutes],
    providers:[TestStatusService],
    declarations: [TestStatusComponent]
})

export default class TestStatusModule{}