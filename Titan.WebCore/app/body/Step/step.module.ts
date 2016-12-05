import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StepComponent } from "./step.component";

import { DataTableModule, TabViewModule, InputTextModule, InputTextareaModule, DropdownModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { TestFacilityService } from '../../shared/services/testfacility.service';
import { StepService } from '../../shared/services/step.service';
import { GridModule} from '../../shared/UIComponents/GridComponent/grid.module';
import testFacilitiesRoutes from "./step.routes";

@NgModule({
    imports: [CommonModule,RouterModule, DataTableModule, InputTextModule,DropdownModule, InputTextareaModule, TabViewModule,GridModule, testFacilitiesRoutes],
    providers:[TestFacilityService, StepService],
    declarations: [StepComponent]
})

export default class TestFacilitiesModule{}