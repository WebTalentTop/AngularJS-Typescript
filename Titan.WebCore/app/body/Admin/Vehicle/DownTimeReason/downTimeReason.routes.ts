import { DownTimeReasonComponent } from './downTimeReason.component';
import { RouterModule } from "@angular/router";
import {AuthGuard} from "../../../../shared/services/auth/authGuard";

const routes = [
    { path: '/:page', component: DownTimeReasonComponent },
    { path: '', component: DownTimeReasonComponent },
    { path: 'add', canActivate: [AuthGuard], loadChildren: 'app/body/Admin/Vehicle/DownTimeReason/Add/add.module' },
    { path: 'details/:id', canActivate: [AuthGuard], loadChildren: 'app/body/Admin/Vehicle/DownTimeReason/Details/details.module'}
];

export default RouterModule.forChild(routes);