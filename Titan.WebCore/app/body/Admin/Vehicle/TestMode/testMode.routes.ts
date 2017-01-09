import { TestModeComponent } from './testMode.component';
import { RouterModule } from "@angular/router";
import {AuthGuard} from "../../../../shared/services/auth/authGuard";

const routes = [
    { path: '/:page', component: TestModeComponent },
    { path: '', component: TestModeComponent },
    { path: 'add', canActivate: [AuthGuard], loadChildren: 'app/body/Admin/Vehicle/TestMode/Add/add.module' },
    { path: 'details/:id', canActivate: [AuthGuard], loadChildren: 'app/body/Admin/Vehicle/TestMode/Details/details.module'}
];

export default RouterModule.forChild(routes);