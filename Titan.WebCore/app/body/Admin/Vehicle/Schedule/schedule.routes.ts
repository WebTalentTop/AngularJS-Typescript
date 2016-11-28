import { ScheduleComponent } from './schedule.component';
import { RouterModule } from "@angular/router";

const routes = [
    { path: '', component: ScheduleComponent },
    { path: 'add', loadChildren: 'app/body/Admin/Vehicle/Schedule/Add/add.module' },
    { path: 'details/:id', loadChildren: 'app/body/Admin/Vehicle/Schedule/Details/details.module'}
];

export default RouterModule.forChild(routes);