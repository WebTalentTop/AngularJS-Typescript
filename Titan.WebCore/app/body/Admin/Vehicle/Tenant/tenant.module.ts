import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TenantComponent } from "./tenant.component";
import { DataTableModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { GridModule} from '../../../../shared/UIComponents/GridComponent/grid.module';
import tenantRoutes from "./tenant.routes";
import { TenantService } from '../../../../shared/services/tenant.service';

@NgModule({
    imports: [CommonModule, DataTableModule, GridModule, tenantRoutes],
    providers: [TenantService],
    declarations: [TenantComponent]
})

export default class TenantModule{}