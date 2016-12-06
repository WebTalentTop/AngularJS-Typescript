import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TestRequirementComponent } from "./testRequirement.component";
import { DataTableModule, MessagesModule, GrowlModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { GridModule} from '../../../../shared/UIComponents/GridComponent/grid.module';

import { TestRequirementService } from '../../../../shared/services/testRequirement.service';

import testRequirementRoutes from "./testRequirement.routes";

@NgModule({
    imports: [CommonModule, DataTableModule, GridModule, testRequirementRoutes, MessagesModule, GrowlModule],
    providers: [TestRequirementService],
    declarations: [TestRequirementComponent]
})

export default class TestRequirementModule{}