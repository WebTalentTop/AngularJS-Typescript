import { AccessComponent } from './access.component';
import { RouterModule } from "@angular/router";

const routes = [
    { path: '/:page', component: AccessComponent },
    { path: '', component: AccessComponent },
    { path: 'add', loadChildren: 'app/body/Admin/Vehicle/Access/Add/add.module' },
    { path: 'details/:id', loadChildren: 'app/body/Admin/Vehicle/Access/Details/details.module'}
];

export default RouterModule.forChild(routes);