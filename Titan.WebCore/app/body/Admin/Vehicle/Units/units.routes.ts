import { UnitsComponent } from './units.component';
import { RouterModule } from "@angular/router";

const routes = [
    { path: '/:page', component: UnitsComponent },
    { path: '', component: UnitsComponent },
    { path: 'add', loadChildren: 'app/body/Admin/Vehicle/Units/Add/add.module' },
    { path: 'details/:id', loadChildren: 'app/body/Admin/Vehicle/Units/Details/details.module'}
];

export default RouterModule.forChild(routes);