import { AccessGroupComponent } from './accessGroup.component';
import { RouterModule } from "@angular/router";
import {AuthGuard} from "../../../../shared/services/auth/authGuard";

const routes = [
    { path: '/:page', component: AccessGroupComponent },
    { path: '', component: AccessGroupComponent },
    { path: 'add', canActivate: [AuthGuard], loadChildren: 'app/body/Admin/Vehicle/AccessGroup/Add/add.module' },
    { path: 'details/:id', canActivate: [AuthGuard], loadChildren: 'app/body/Admin/Vehicle/AccessGroup/Details/details.module'}
];

export default RouterModule.forChild(routes);