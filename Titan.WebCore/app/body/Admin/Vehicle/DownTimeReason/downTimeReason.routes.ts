import { DownTimeReasonComponent } from './downTimeReason.component';
import { RouterModule } from "@angular/router";

const routes = [
    { path: '/:page', component: DownTimeReasonComponent },
    { path: '', component: DownTimeReasonComponent },
    { path: 'add', loadChildren: 'app/body/Admin/Vehicle/DownTimeReason/Add/add.module' },
    { path: 'details/:id', loadChildren: 'app/body/Admin/Vehicle/DownTimeReason/Details/details.module'}
];

export default RouterModule.forChild(routes);