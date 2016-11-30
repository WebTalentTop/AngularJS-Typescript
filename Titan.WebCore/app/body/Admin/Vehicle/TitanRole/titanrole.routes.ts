import { TitanRoleComponent } from './titanRole.component';
import { RouterModule } from "@angular/router";

const routes = [
    { path: '/:page', component: TitanRoleComponent },
    { path: '', component: TitanRoleComponent },
    { path: 'add', loadChildren: 'app/body/Admin/Vehicle/TitanRole/Add/add.module' },
    { path: 'details/:id', loadChildren: 'app/body/Admin/Vehicle/TitanRole/Details/details.module'}
];

export default RouterModule.forChild(routes);