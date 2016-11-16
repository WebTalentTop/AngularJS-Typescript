import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TestVerificationMethodComponent } from "./testverificationMethod.component";
import { DataTableModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import testverificationMethodRoutes from "./testverificationMethod.routes";
import { TestVerificationMethodService } from '../../../../shared/services/testverificationMethod.service';
import { GridModule} from '../../../../shared/UIComponents/GridComponent/grid.module';

@NgModule({
    imports: [CommonModule, DataTableModule, GridModule, testverificationMethodRoutes],
    providers:[TestVerificationMethodService],
    declarations: [TestVerificationMethodComponent]
})

export default class TestVerificationMethodModule{}