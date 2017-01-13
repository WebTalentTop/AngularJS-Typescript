import { TitanUserComponent } from './titanUser.component';
import { RouterModule } from "@angular/router";
import {AuthGuard} from "../../../../shared/services/auth/authGuard";

const routes = [
    { path: '/:page', component: TitanUserComponent },
    { path: '', component: TitanUserComponent },
    { path: 'add', canActivate: [AuthGuard], loadChildren: 'app/body/Admin/Vehicle/TitanUser/Add/add.module' },
    { path: 'details/:id', canActivate: [AuthGuard], loadChildren: 'app/body/Admin/Vehicle/TitanUser/Details/details.module'}
];

export default RouterModule.forChild(routes);