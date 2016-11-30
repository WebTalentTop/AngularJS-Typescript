import { PermissionComponent } from './permission.component';
import { RouterModule } from "@angular/router";

const routes = [
    { path: '/:page', component: PermissionComponent },
    { path: '', component: PermissionComponent },
    { path: 'add', loadChildren: 'app/body/Admin/Vehicle/Permission/Add/add.module' },
    { path: 'details/:id', loadChildren: 'app/body/Admin/Vehicle/Permission/Details/details.module'}
];

export default RouterModule.forChild(routes);