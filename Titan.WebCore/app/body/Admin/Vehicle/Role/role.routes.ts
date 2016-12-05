import { RoleComponent } from './role.component';
import { RouterModule } from "@angular/router";

const routes = [
    { path: '/:page', component: RoleComponent },
    { path: '', component: RoleComponent },
    { path: 'add', loadChildren: 'app/body/Admin/Vehicle/Role/Add/add.module' },
    { path: 'details/:id', loadChildren: 'app/body/Admin/Vehicle/Role/Details/details.module'}
];

export default RouterModule.forChild(routes);