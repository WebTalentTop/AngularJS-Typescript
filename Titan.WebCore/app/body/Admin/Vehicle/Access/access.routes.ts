import { AccessComponent } from './access.component';
import { RouterModule } from "@angular/router";
import {AuthGuard} from "../../../../shared/services/auth/authGuard";

const routes = [
    { path: '/:page', component: AccessComponent },
    { path: '', component: AccessComponent },
    { path: 'add', canActivate: [AuthGuard], loadChildren: 'app/body/Admin/Vehicle/Access/Add/add.module' },
    { path: 'details/:id', canActivate: [AuthGuard], loadChildren: 'app/body/Admin/Vehicle/Access/Details/details.module'}
];

export default RouterModule.forChild(routes);