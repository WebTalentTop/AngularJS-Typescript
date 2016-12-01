import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TestVerificationMethodComponent } from "./testVerificationMethod.component";
import { DataTableModule, MessagesModule, GrowlModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { GridModule} from '../../../../shared/UIComponents/GridComponent/grid.module';

import { TestVerificationMethodService } from '../../../../shared/services/testVerificationMethod.service';

import testVerificationMethodRoutes from "./testVerificationMethod.routes";

@NgModule({
    imports: [CommonModule, DataTableModule, GridModule, testVerificationMethodRoutes, MessagesModule, GrowlModule],
    providers: [TestVerificationMethodService],
    declarations: [TestVerificationMethodComponent]
})

export default class TestVerificationMethodModule{}