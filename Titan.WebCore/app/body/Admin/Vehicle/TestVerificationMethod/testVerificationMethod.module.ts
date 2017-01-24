import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TestVerificationMethodComponent } from "./testVerificationMethod.component";
import { ButtonModule, DataTableModule, MessagesModule, GrowlModule,BreadcrumbModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { GridModule} from '../../../../shared/UIComponents/GridComponent/grid.module';
import { BreadCrumbsService } from '../../../../shared/services/breadCrumbs/breadCrumbs.service';
import { TestVerificationMethodService } from '../../../../shared/services/testVerificationMethod.service';

import testVerificationMethodRoutes from "./testVerificationMethod.routes";

@NgModule({
    imports: [ButtonModule, CommonModule, DataTableModule, GridModule, testVerificationMethodRoutes, MessagesModule,BreadcrumbModule ,GrowlModule],
    providers: [TestVerificationMethodService,BreadCrumbsService],
    declarations: [TestVerificationMethodComponent]
})

export default class TestVerificationMethodModule{}