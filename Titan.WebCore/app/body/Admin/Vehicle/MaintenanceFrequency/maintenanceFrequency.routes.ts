import { MaintenanceFrequencyComponent } from './maintenanceFrequency.component';
import { RouterModule } from "@angular/router";
import {AuthGuard} from "../../../../shared/services/auth/authGuard";

const routes = [
    { path: '/:page', component: MaintenanceFrequencyComponent },
    { path: '', component: MaintenanceFrequencyComponent },
    { path: 'add', canActivate: [AuthGuard], loadChildren: 'app/body/Admin/Vehicle/MaintenanceFrequency/Add/add.module' },
    { path: 'details/:id', canActivate: [AuthGuard], loadChildren: 'app/body/Admin/Vehicle/MaintenanceFrequency/Details/details.module'}
];

export default RouterModule.forChild(routes);