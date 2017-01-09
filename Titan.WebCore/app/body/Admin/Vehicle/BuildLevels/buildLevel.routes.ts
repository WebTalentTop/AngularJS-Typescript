import { BuildLevelComponent } from './buildLevel.component';
import { RouterModule } from "@angular/router";
import {AuthGuard} from "../../../../shared/services/auth/authGuard";

const routes = [
    { path: '/:page', component: BuildLevelComponent },
    { path: '', component: BuildLevelComponent },
    { path: 'add', canActivate: [AuthGuard], loadChildren: 'app/body/Admin/Vehicle/BuildLevels/Add/add.module' },
    { path: 'details/:id', canActivate: [AuthGuard], loadChildren: 'app/body/Admin/Vehicle/BuildLevels/Details/details.module'}
];

export default RouterModule.forChild(routes);