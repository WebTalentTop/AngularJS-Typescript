import { ProjectRoleComponent } from './projectRole.component';
import { RouterModule } from "@angular/router";
import {AuthGuard} from "../../../../shared/services/auth/authGuard";

const routes = [
    { path: '/:page', component: ProjectRoleComponent },
    { path: '', component: ProjectRoleComponent },
    { path: 'add', canActivate: [AuthGuard], loadChildren: 'app/body/Admin/Vehicle/ProjectRole/Add/add.module' },
    { path: 'details/:id', canActivate: [AuthGuard], loadChildren: 'app/body/Admin/Vehicle/ProjectRole/Details/details.module'}
];

export default RouterModule.forChild(routes);