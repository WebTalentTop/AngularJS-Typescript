import { SensorTypeComponent } from './sensorType.component';
import { RouterModule } from "@angular/router";

const routes = [
    { path: '/:page', component: SensorTypeComponent },
    { path: '', component: SensorTypeComponent },
    { path: 'add', loadChildren: 'app/body/Admin/Vehicle/SensorType/Add/add.module' },
    { path: 'details/:id', loadChildren: 'app/body/Admin/Vehicle/SensorType/Details/details.module'}
];

export default RouterModule.forChild(routes);