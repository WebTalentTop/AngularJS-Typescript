import { TestRoleComponent } from './testRole.component';
import { RouterModule } from "@angular/router";

const routes = [
    { path: '/:page', component: TestRoleComponent },
    { path: '', component: TestRoleComponent },
    { path: 'add', loadChildren: 'app/body/Admin/Vehicle/TestRole/Add/add.module' },
    { path: 'details/:id', loadChildren: 'app/body/Admin/Vehicle/TestRole/Details/details.module'}
];

export default RouterModule.forChild(routes);