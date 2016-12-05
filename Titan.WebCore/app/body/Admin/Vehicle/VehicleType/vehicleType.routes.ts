import { VehicleTypeComponent } from './vehicleType.component';
import { RouterModule } from "@angular/router";

const routes = [
    { path: '/:page', component: VehicleTypeComponent },
    { path: '', component: VehicleTypeComponent },
    { path: 'add', loadChildren: 'app/body/Admin/Vehicle/VehicleType/Add/add.module' },
    { path: 'details/:id', loadChildren: 'app/body/Admin/Vehicle/VehicleType/Details/details.module'}
];

export default RouterModule.forChild(routes);