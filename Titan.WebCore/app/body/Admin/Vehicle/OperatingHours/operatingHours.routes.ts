import { OperatingHoursComponent } from './operatingHours.component';
import { RouterModule } from "@angular/router";
import {AuthGuard} from "../../../../shared/services/auth/authGuard";

const routes = [
    { path: '/:page', component: OperatingHoursComponent },
    { path: '', component: OperatingHoursComponent },
    { path: 'add', canActivate: [AuthGuard], loadChildren: 'app/body/Admin/Vehicle/OperatingHours/Add/add.module' },
    { path: 'details/:id', canActivate: [AuthGuard], loadChildren: 'app/body/Admin/Vehicle/OperatingHours/Details/details.module'}
];

export default RouterModule.forChild(routes);