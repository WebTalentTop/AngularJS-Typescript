
import { TitanRoleComponent } from './titanRole.component';
import { RouterModule } from "@angular/router";
import {AuthGuard} from "../../../../shared/services/auth/authGuard";

const routes = [
    { path: '/:page', component: TitanRoleComponent },
    { path: '', component: TitanRoleComponent },
    { path: 'add',canActivate: [AuthGuard], loadChildren: 'app/body/Admin/Vehicle/TitanRole/Add/add.module' },
    { path: 'details/:id',canActivate: [AuthGuard], loadChildren: 'app/body/Admin/Vehicle/TitanRole/Details/details.module'}
];

export default RouterModule.forChild(routes);