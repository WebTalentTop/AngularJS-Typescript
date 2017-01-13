import { VehicleTypeComponent } from './vehicleType.component';
import { RouterModule } from "@angular/router";
import {AuthGuard} from "../../../../shared/services/auth/authGuard";

const routes = [
    { path: '/:page', component: VehicleTypeComponent },
    { path: '', component: VehicleTypeComponent },
    { path: 'add', canActivate: [AuthGuard], loadChildren: 'app/body/Admin/Vehicle/VehicleType/Add/add.module' },
    { path: 'details/:id', canActivate: [AuthGuard], loadChildren: 'app/body/Admin/Vehicle/VehicleType/Details/details.module'}
];

export default RouterModule.forChild(routes);