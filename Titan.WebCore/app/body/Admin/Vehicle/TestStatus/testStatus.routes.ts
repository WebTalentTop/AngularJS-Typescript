import { TestStatusComponent } from './testStatus.component';
import { RouterModule } from "@angular/router";
import {AuthGuard} from "../../../../shared/services/auth/authGuard";

const routes = [
    { path: '/:page', component: TestStatusComponent },
    { path: '', component: TestStatusComponent },
    { path: 'add', canActivate: [AuthGuard], loadChildren: 'app/body/Admin/Vehicle/TestStatus/Add/add.module' },
    { path: 'details/:id', canActivate: [AuthGuard], loadChildren: 'app/body/Admin/Vehicle/TestStatus/Details/details.module'}
];

export default RouterModule.forChild(routes);