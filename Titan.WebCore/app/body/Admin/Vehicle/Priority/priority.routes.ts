import { PriorityComponent } from './priority.component';
import { RouterModule } from "@angular/router";

const routes = [
    { path: '/:page', component: PriorityComponent },
    { path: '', component: PriorityComponent },
    { path: 'add', loadChildren: 'app/body/Admin/Vehicle/Priority/Add/add.module' },
    { path: 'details/:id', loadChildren: 'app/body/Admin/Vehicle/Priority/Details/details.module'}
];

export default RouterModule.forChild(routes);