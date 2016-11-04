import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TestFacilityComponent } from "./testfacility.component";
import { DataTableModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { GridModule} from '../../../../shared/UIComponents/GridComponent/grid.module';
import testfacilityRoutes from "./testfacility.routes";

@NgModule({
    imports: [CommonModule, DataTableModule, GridModule, testfacilityRoutes],
    declarations: [TestFacilityComponent]
})

export default class TestFacilityModule{}