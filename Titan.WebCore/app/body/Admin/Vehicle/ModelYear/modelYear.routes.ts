import { ModelYearComponent } from './modelYear.component';
import { RouterModule } from "@angular/router";

const routes = [
    { path: '/:page', component: ModelYearComponent },
    { path: '', component: ModelYearComponent },
    { path: 'add', loadChildren: 'app/body/Admin/Vehicle/ModelYear/Add/add.module' },
    { path: 'details/:id', loadChildren: 'app/body/Admin/Vehicle/ModelYear/Details/details.module'}
];

export default RouterModule.forChild(routes);