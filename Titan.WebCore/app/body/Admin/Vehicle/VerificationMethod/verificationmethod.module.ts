import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { VerificationMethodComponent } from "./verificationmethod.component";
import { DataTableModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import equipmentRoutes from "./verificationmethod.routes";
import { VerificationMethodService } from '../../../../shared/services/verificationmethod.service';
import { GridModule} from '../../../../shared/UIComponents/GridComponent/grid.module';

@NgModule({
    imports: [CommonModule, DataTableModule, GridModule, equipmentRoutes],
    providers:[VerificationMethodService],
    declarations: [VerificationMethodComponent]
})

export default class VerificationMethodModule{}