import { OperatingHoursComponent } from './operatingHours.component';
import { RouterModule } from "@angular/router";

const routes = [
    { path: '/:page', component: OperatingHoursComponent },
    { path: '', component: OperatingHoursComponent },
    { path: 'add', loadChildren: 'app/body/Admin/Vehicle/OperatingHours/Add/add.module' },
    { path: 'details/:id', loadChildren: 'app/body/Admin/Vehicle/OperatingHours/Details/details.module'}
];

export default RouterModule.forChild(routes);