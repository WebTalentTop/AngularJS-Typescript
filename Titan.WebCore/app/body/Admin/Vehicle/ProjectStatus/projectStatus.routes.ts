import { ProjectStatusComponent } from './projectStatus.component';
import { RouterModule } from "@angular/router";
import {AuthGuard} from "../../../../shared/services/auth/authGuard";

const routes = [
    { path: '/:page', component: ProjectStatusComponent },
    { path: '', component: ProjectStatusComponent },
    { path: 'add', canActivate: [AuthGuard], loadChildren: 'app/body/Admin/Vehicle/ProjectStatus/Add/add.module' },
    { path: 'details/:id', canActivate: [AuthGuard], loadChildren: 'app/body/Admin/Vehicle/ProjectStatus/Details/details.module'}
];

export default RouterModule.forChild(routes);