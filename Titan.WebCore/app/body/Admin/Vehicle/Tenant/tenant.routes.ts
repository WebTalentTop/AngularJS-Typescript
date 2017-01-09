import { TenantComponent } from './tenant.component';
import { RouterModule } from "@angular/router";
import {AuthGuard} from "../../../../shared/services/auth/authGuard";

const routes = [
    { path: '', component: TenantComponent },
    { path: 'add', canActivate: [AuthGuard], loadChildren: 'app/body/Admin/Vehicle/Tenant/Add/add.module' },
    { path: 'edit/:id', canActivate: [AuthGuard], loadChildren: 'app/body/Admin/Vehicle/Tenant/Edit/edit.module' }
];

export default RouterModule.forChild(routes);