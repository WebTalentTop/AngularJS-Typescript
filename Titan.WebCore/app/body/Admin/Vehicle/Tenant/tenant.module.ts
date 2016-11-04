import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TenantComponent } from "./tenant.component";
import { DataTableModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { GridModule} from '../../../../shared/UIComponents/GridComponent/grid.module';
import tenantRoutes from "./tenant.routes";

@NgModule({
    imports: [CommonModule, DataTableModule, GridModule, tenantRoutes],
    declarations: [TenantComponent]
})

export default class TenantModule{}