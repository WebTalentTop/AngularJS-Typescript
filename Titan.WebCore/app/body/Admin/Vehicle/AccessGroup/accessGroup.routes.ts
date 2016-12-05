import { AccessGroupComponent } from './accessGroup.component';
import { RouterModule } from "@angular/router";

const routes = [
    { path: '/:page', component: AccessGroupComponent },
    { path: '', component: AccessGroupComponent },
    { path: 'add', loadChildren: 'app/body/Admin/Vehicle/AccessGroup/Add/add.module' },
    { path: 'details/:id', loadChildren: 'app/body/Admin/Vehicle/AccessGroup/Details/details.module'}
];

export default RouterModule.forChild(routes);