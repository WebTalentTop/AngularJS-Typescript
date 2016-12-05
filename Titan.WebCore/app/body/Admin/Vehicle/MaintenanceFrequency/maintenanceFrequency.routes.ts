import { MaintenanceFrequencyComponent } from './maintenanceFrequency.component';
import { RouterModule } from "@angular/router";

const routes = [
    { path: '/:page', component: MaintenanceFrequencyComponent },
    { path: '', component: MaintenanceFrequencyComponent },
    { path: 'add', loadChildren: 'app/body/Admin/Vehicle/MaintenanceFrequency/Add/add.module' },
    { path: 'details/:id', loadChildren: 'app/body/Admin/Vehicle/MaintenanceFrequency/Details/details.module'}
];

export default RouterModule.forChild(routes);