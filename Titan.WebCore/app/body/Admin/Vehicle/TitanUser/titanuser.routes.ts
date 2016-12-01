import { TitanUserComponent } from './titanUser.component';
import { RouterModule } from "@angular/router";

const routes = [
    { path: '/:page', component: TitanUserComponent },
    { path: '', component: TitanUserComponent },
    { path: 'add', loadChildren: 'app/body/Admin/Vehicle/TitanUser/Add/add.module' },
    { path: 'details/:id', loadChildren: 'app/body/Admin/Vehicle/TitanUser/Details/details.module'}
];

export default RouterModule.forChild(routes);