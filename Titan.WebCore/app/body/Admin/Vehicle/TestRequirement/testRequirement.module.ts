import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TestRequirementComponent } from "./testRequirement.component";
import { ButtonModule, DataTableModule, MessagesModule, GrowlModule,BreadcrumbModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { GridModule} from '../../../../shared/UIComponents/GridComponent/grid.module';
import { BreadCrumbsService } from '../../../../shared/services/breadCrumbs/breadCrumbs.service';
import { TestRequirementService } from '../../../../shared/services/testRequirement.service';

import testRequirementRoutes from "./testRequirement.routes";

@NgModule({
    imports: [ButtonModule, CommonModule, DataTableModule, GridModule, testRequirementRoutes, MessagesModule, GrowlModule,BreadcrumbModule],
    providers: [TestRequirementService,BreadCrumbsService],
    declarations: [TestRequirementComponent]
})

export default class TestRequirementModule{}