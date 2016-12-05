import { ModelNameComponent } from './modelName.component';
import { RouterModule } from "@angular/router";

const routes = [
    { path: '/:page', component: ModelNameComponent },
    { path: '', component: ModelNameComponent },
    { path: 'add', loadChildren: 'app/body/Admin/Vehicle/ModelName/Add/add.module' },
    { path: 'details/:id', loadChildren: 'app/body/Admin/Vehicle/ModelName/Details/details.module'}
];

export default RouterModule.forChild(routes);