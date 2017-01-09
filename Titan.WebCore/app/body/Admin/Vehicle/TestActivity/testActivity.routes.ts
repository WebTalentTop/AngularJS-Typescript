import { TestActivityComponent } from './testActivity.component';
import { RouterModule } from "@angular/router";
import {AuthGuard} from "../../../../shared/services/auth/authGuard";

const routes = [
    { path: '/:page', component: TestActivityComponent },
    { path: '', component: TestActivityComponent },
    { path: 'add', canActivate: [AuthGuard], loadChildren: 'app/body/Admin/Vehicle/TestActivity/Add/add.module' },
    { path: 'details/:id', canActivate: [AuthGuard], loadChildren: 'app/body/Admin/Vehicle/TestActivity/Details/details.module'}
];

export default RouterModule.forChild(routes);