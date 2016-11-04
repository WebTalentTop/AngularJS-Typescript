import { TenantComponent } from './tenant.component';
import { RouterModule } from "@angular/router";

const routes = [
    { path: '', component: TenantComponent },
    { path: 'add', loadChildren: 'app/body/Admin/Vehicle/Tenant/Add/add.module' },
    { path: 'edit/:id', loadChildren: 'app/body/Admin/Vehicle/Tenant/Edit/edit.module' }
];

export default RouterModule.forChild(routes);